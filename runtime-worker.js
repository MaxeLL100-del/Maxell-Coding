/* Local Python runtime worker. Pyodide files must exist under /runtime. */
'use strict';

let pyodide = null;
let loadingPromise = null;
let busy = false;
const MAX_INPUT_BYTES = 64 * 1024;

function post(type, extra = {}) {
  self.postMessage({ type, ...extra });
}

function askForInput() {
  if (typeof SharedArrayBuffer === 'undefined' || !self.crossOriginIsolated) {
    post('input-unavailable');
    return null;
  }
  const inputBuffer = new SharedArrayBuffer(MAX_INPUT_BYTES);
  const controlBuffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 2);
  const control = new Int32Array(controlBuffer);
  post('stdin-request', { buffer: inputBuffer, control: controlBuffer });
  const result = Atomics.wait(control, 0, 0, 120000);
  if (result === 'timed-out') return null;
  const length = Math.max(0, Math.min(MAX_INPUT_BYTES, Atomics.load(control, 1)));
  return new TextDecoder().decode(new Uint8Array(inputBuffer, 0, length));
}

async function ensureRuntime() {
  if (pyodide) return pyodide;
  if (loadingPromise) return loadingPromise;
  loadingPromise = (async () => {
    post('loading');
    const loaderUrl = new URL('../../runtime/pyodide.js', self.location.href).href;
    importScripts(loaderUrl);
    if (typeof self.loadPyodide !== 'function') throw new Error('File pyodide.js tidak mengekspor loadPyodide. Jalankan ulang setup_runtime.py.');
    const runtimeUrl = new URL('../../runtime/', self.location.href).href;
    pyodide = await self.loadPyodide({
      indexURL: runtimeUrl,
      stdin: askForInput,
      stdout: text => post('stdout', { text }),
      stderr: text => post('stderr', { text })
    });
    pyodide.setStdout({ batched: text => post('stdout', { text }) });
    pyodide.setStderr({ batched: text => post('stderr', { text }) });
    pyodide.setStdin({ stdin: askForInput, isatty: true, autoEOF: true });
    const pythonVersion = pyodide.runPython('import sys; sys.version.split()[0]');
    post('ready', { pythonVersion, pyodideVersion: pyodide.version || '' });
    return pyodide;
  })();
  try { return await loadingPromise; }
  catch (error) { pyodide = null; loadingPromise = null; throw error; }
}

async function runCode(code) {
  if (busy) return;
  busy = true;
  post('run-start');
  try {
    const runtime = await ensureRuntime();
    const result = await runtime.runPythonAsync(code);
    if (result && typeof result.destroy === 'function') result.destroy();
    post('run-done');
  } catch (error) {
    post('run-error', { error: error?.message || String(error) });
  } finally {
    busy = false;
  }
}

self.onmessage = event => {
  const message = event.data || {};
  if (message.type === 'INIT') {
    ensureRuntime().catch(error => post('runtime-error', { error: error?.stack || error?.message || String(error) }));
  } else if (message.type === 'RUN') {
    runCode(String(message.code || '')).catch(error => post('run-error', { error: error?.stack || String(error) }));
  }
};
