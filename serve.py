#!/usr/bin/env python3
"""Local-only HTTP server with headers needed for isolated SharedArrayBuffer."""
from __future__ import annotations

import argparse
import http.server
import mimetypes
import os
import socket
import sys
import webbrowser
from pathlib import Path

ROOT = Path(__file__).resolve().parent
mimetypes.add_type("application/wasm", ".wasm")
mimetypes.add_type("text/javascript", ".mjs")
mimetypes.add_type("application/json", ".json")


class LocalHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self) -> None:
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        self.send_header("Cross-Origin-Embedder-Policy", "require-corp")
        self.send_header("Cross-Origin-Resource-Policy", "same-origin")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        super().end_headers()

    def log_message(self, format: str, *args: object) -> None:
        # Log the local request path without adding application data.
        print(f"[local] {self.address_string()} - {format % args}")


def main() -> int:
    parser = argparse.ArgumentParser(description="Jalankan Arctic Focus Studio hanya pada perangkat ini.")
    parser.add_argument("--host", default="127.0.0.1", help="Alamat bind (default: 127.0.0.1, lokal saja)")
    parser.add_argument("--port", type=int, default=8765, help="Port HTTP (default: 8765)")
    parser.add_argument("--no-browser", action="store_true", help="Jangan otomatis membuka browser")
    args = parser.parse_args()
    if args.host not in ("127.0.0.1", "localhost", "::1"):
        print("Demi privasi, server ini hanya mengizinkan alamat loopback perangkat.", file=sys.stderr)
        return 2

    class Handler(LocalHandler):
        def __init__(self, *handler_args, **handler_kwargs):
            super().__init__(*handler_args, directory=str(ROOT), **handler_kwargs)

    server = http.server.ThreadingHTTPServer((args.host, args.port), Handler)
    server.daemon_threads = True
    url = f"http://127.0.0.1:{args.port}/"
    print("Arctic Focus Studio berjalan secara lokal.")
    print(f"Buka: {url}")
    print("Server hanya bind ke loopback; tidak dibuka ke jaringan lokal.")
    print("Tekan Ctrl+C untuk berhenti. Runtime harus dipasang satu kali sebelum penggunaan offline.")
    if not args.no_browser:
        try:
            webbrowser.open(url, new=2)
        except Exception:
            pass
    try:
        server.serve_forever(poll_interval=0.4)
    except KeyboardInterrupt:
        print("\nServer dihentikan.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
