(() => {
  'use strict';

  const STORAGE_KEY = 'arctic-focus-studio.v1';
  const OUTPUT_LIMIT = 450000;
  const LESSONS = [
    {
      id: 'hello', number: '01', module: 'DASAR PYTHON', group: 'FONDASI', title: 'Mulai dengan Python', duration: '5 menit',
      summary: 'Jalankan program pertama dan pahami fungsi print().',
      content: `<p>Python adalah bahasa pemrograman yang dirancang agar sintaksnya mudah dibaca. Kode dijalankan dari atas ke bawah, kecuali alur program diubah oleh kondisi, perulangan, atau pemanggilan fungsi.</p><h3>Menampilkan teks</h3><p>Fungsi <code>print()</code> mengirimkan teks atau nilai ke konsol. Teks ditulis di antara tanda kutip.</p><div class="tip-box"><span class="tip-label">KUNCI KONSEP</span>Gunakan tanda kurung setelah nama fungsi. Tanda kutip pembuka dan penutup harus berpasangan.</div>`,
      example: `print("Halo, dunia!")\nprint("Saya sedang belajar Python 3.")`,
      challenge: 'Ubah program agar menampilkan nama panggilanmu dan alasan kamu ingin belajar Python.'
    },
    {
      id: 'variables', number: '02', module: 'DASAR PYTHON', group: 'FONDASI', title: 'Variabel dan nilai', duration: '7 menit',
      summary: 'Simpan informasi menggunakan nama variabel yang jelas.',
      content: `<p>Variabel adalah nama yang merujuk pada nilai. Python membuat variabel saat sebuah nilai diberikan dengan operator <code>=</code>; deklarasi tipe eksplisit tidak diperlukan.</p><h3>Aturan penamaan</h3><ul><li>Nama variabel peka huruf besar-kecil: <code>umur</code> berbeda dari <code>Umur</code>.</li><li>Gunakan huruf, angka, dan garis bawah; nama tidak boleh diawali angka.</li><li>Pilih nama deskriptif seperti <code>harga_total</code>.</li></ul><div class="tip-box"><span class="tip-label">CATATAN</span>Tanda <code>=</code> adalah assignment, bukan tanda sama dengan matematika.</div>`,
      example: `nama = "Alya"\numur = 20\nkota = "Pekanbaru"\n\nprint("Nama:", nama)\nprint("Umur:", umur)\nprint("Kota:", kota)`,
      challenge: 'Buat tiga variabel tentang dirimu, lalu tampilkan semuanya dengan print().' 
    },
    {
      id: 'types', number: '03', module: 'DASAR PYTHON', group: 'FONDASI', title: 'Tipe data dasar', duration: '8 menit',
      summary: 'Bedakan string, integer, float, dan boolean.',
      content: `<p>Nilai memiliki tipe. Tipe menentukan operasi yang dapat dilakukan dan bagaimana Python memperlakukannya.</p><ul><li><code>str</code>: teks, misalnya <code>"belajar"</code>.</li><li><code>int</code>: bilangan bulat, misalnya <code>42</code>.</li><li><code>float</code>: bilangan desimal, misalnya <code>3.14</code>.</li><li><code>bool</code>: nilai logika <code>True</code> atau <code>False</code>.</li></ul><p>Gunakan <code>type(nilai)</code> untuk memeriksa tipe. Konversi seperti <code>int("12")</code> dapat dilakukan jika bentuk nilainya valid.</p>`,
      example: `nama = "Rani"       # str\numur = 19            # int\ntinggi = 1.68         # float\nsudah_belajar = True  # bool\n\nprint(type(nama))\nprint(type(umur))\nprint(type(tinggi))\nprint(type(sudah_belajar))`,
      challenge: 'Buat satu variabel untuk setiap tipe data di atas dan tampilkan tipe masing-masing.'
    },
    {
      id: 'operators', number: '04', module: 'EKSPRESI PYTHON', group: 'FONDASI', title: 'Operator dan ekspresi', duration: '8 menit',
      summary: 'Hitung angka dan bandingkan nilai.',
      content: `<p>Operator aritmetika melakukan perhitungan. Operator perbandingan menghasilkan boolean yang sering digunakan dalam <code>if</code> dan perulangan.</p><ul><li><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>: operasi aritmetika.</li><li><code>//</code>: pembagian bulat; <code>%</code>: sisa pembagian.</li><li><code>**</code>: pangkat.</li><li><code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;=</code>: perbandingan.</li></ul><div class="tip-box"><span class="tip-label">HINDARI KEBINGUNGAN</span><code>=</code> memberi nilai, sedangkan <code>==</code> membandingkan dua nilai.</div>`,
      example: `a = 17\nb = 5\n\nprint("Jumlah:", a + b)\nprint("Pembagian:", a / b)\nprint("Pembagian bulat:", a // b)\nprint("Sisa:", a % b)\nprint("a lebih besar?", a > b)`,
      challenge: 'Buat kalkulasi luas persegi panjang dengan variabel panjang dan lebar.'
    },
    {
      id: 'strings', number: '05', module: 'EKSPRESI PYTHON', group: 'ALUR PROGRAM', title: 'Mengolah teks', duration: '8 menit',
      summary: 'Gabungkan string dan gunakan f-string.',
      content: `<p>String adalah rangkaian karakter. Kamu dapat menggabungkannya, mengambil sebagian, atau menyisipkan nilai variabel dengan f-string.</p><ul><li><code>nama.upper()</code> mengubah huruf menjadi kapital.</li><li><code>teks.strip()</code> menghapus spasi di awal dan akhir.</li><li><code>f"Halo, {nama}"</code> menyisipkan nilai variabel dengan mudah.</li></ul><p>String tidak dapat diubah langsung di tempat (*immutable*); metode string biasanya menghasilkan string baru.</p>`,
      example: `nama = "Alya"\nproduk = "buku python"\nharga = 45000\n\nprint(nama.upper())\nprint(produk.title())\nprint(f"{nama} membeli {produk} seharga Rp{harga:,}.")`,
      challenge: 'Buat kalimat ringkasan biodata menggunakan minimal dua variabel dan f-string.'
    },
    {
      id: 'conditions', number: '06', module: 'ALUR KONTROL', group: 'ALUR PROGRAM', title: 'Kondisi if / elif / else', duration: '10 menit',
      summary: 'Buat program mengambil keputusan berdasarkan kondisi.',
      content: `<p>Percabangan memilih blok kode berdasarkan kondisi bernilai <code>True</code> atau <code>False</code>. Python menggunakan indentasi untuk menandai blok, bukan kurung kurawal.</p><ul><li><code>if</code>: kondisi pertama.</li><li><code>elif</code>: kondisi alternatif jika kondisi sebelumnya salah.</li><li><code>else</code>: jalur terakhir ketika semua kondisi sebelumnya salah.</li></ul><p>Tanda titik dua <code>:</code> mengakhiri baris kondisi dan diikuti blok yang menjorok ke dalam.</p>`,
      example: `nilai = 82\n\nif nilai >= 90:\n    predikat = "A"\nelif nilai >= 80:\n    predikat = "B"\nelif nilai >= 70:\n    predikat = "C"\nelse:\n    predikat = "Perlu latihan"\n\nprint("Predikat:", predikat)`,
      challenge: 'Buat penentu kelulusan: nilai minimal 75 dinyatakan lulus.'
    },
    {
      id: 'loops', number: '07', module: 'ALUR KONTROL', group: 'ALUR PROGRAM', title: 'Perulangan for dan while', duration: '10 menit',
      summary: 'Ulangi tindakan tanpa menulis kode berulang.',
      content: `<p>Gunakan <code>for</code> saat menelusuri item atau rentang, dan <code>while</code> saat pengulangan bergantung pada kondisi.</p><ul><li><code>range(5)</code> menghasilkan urutan 0 sampai 4.</li><li><code>break</code> menghentikan perulangan.</li><li><code>continue</code> melompat ke iterasi berikutnya.</li></ul><div class="tip-box"><span class="tip-label">PENTING</span>Pastikan kondisi <code>while</code> pada akhirnya dapat menjadi salah agar tidak terjadi perulangan tanpa akhir.</div>`,
      example: `for nomor in range(1, 6):\n    print("Latihan ke-", nomor)\n\nangka = 3\nwhile angka > 0:\n    print("Hitung mundur:", angka)\n    angka -= 1\nprint("Selesai")`,
      challenge: 'Cetak semua bilangan genap dari 2 sampai 20 menggunakan perulangan.'
    },
    {
      id: 'lists', number: '08', module: 'STRUKTUR DATA', group: 'DATA', title: 'List dan indeks', duration: '9 menit',
      summary: 'Simpan beberapa nilai dalam satu koleksi berurutan.',
      content: `<p><code>list</code> menyimpan beberapa nilai dalam satu urutan dan dapat diubah. Indeks dimulai dari nol; indeks negatif mengakses dari belakang.</p><ul><li><code>append(x)</code> menambahkan item ke akhir.</li><li><code>len(data)</code> menghitung jumlah item.</li><li><code>data[0]</code> mengambil item pertama.</li><li><code>data[1:3]</code> mengambil irisan indeks 1 sampai sebelum 3.</li></ul>`,
      example: `bahasa = ["Python", "JavaScript", "Java"]\nprint("Pertama:", bahasa[0])\n\nbahasa.append("Kotlin")\nprint("Jumlah bahasa:", len(bahasa))\n\nfor nama in bahasa:\n    print("-", nama)`,
      challenge: 'Buat list berisi minimal empat makanan, tambahkan satu item, lalu tampilkan dengan for.'
    },
    {
      id: 'dicts', number: '09', module: 'STRUKTUR DATA', group: 'DATA', title: 'Dictionary', duration: '9 menit',
      summary: 'Pasangkan kunci dan nilai untuk merepresentasikan data.',
      content: `<p><code>dict</code> menyimpan pasangan kunci-nilai. Struktur ini berguna untuk data bernama seperti profil, produk, atau konfigurasi.</p><ul><li><code>profil["nama"]</code> mengambil nilai dari sebuah kunci.</li><li><code>profil.get("email")</code> mengambil nilai dengan lebih aman jika kunci mungkin tidak tersedia.</li><li><code>profil["kota"] = "Riau"</code> menambah atau memperbarui nilai.</li><li><code>items()</code> menelusuri pasangan kunci dan nilai.</li></ul>`,
      example: `mahasiswa = {\n    "nama": "Dina",\n    "program": "Teknik Informatika",\n    "semester": 3,\n}\n\nprint(mahasiswa["nama"])\nmahasiswa["semester"] = 4\n\nfor kunci, nilai in mahasiswa.items():\n    print(f"{kunci}: {nilai}")`,
      challenge: 'Buat dictionary produk dengan nama, harga, dan stok, lalu tampilkan tiap nilai.'
    },
    {
      id: 'functions', number: '10', module: 'FUNGSI', group: 'DATA', title: 'Membuat fungsi', duration: '10 menit',
      summary: 'Kelompokkan logika agar dapat digunakan kembali.',
      content: `<p>Fungsi dibuat dengan kata kunci <code>def</code>. Parameter menerima input dan <code>return</code> mengirimkan hasil ke pemanggil.</p><ul><li>Gunakan nama fungsi yang menjelaskan tugasnya.</li><li>Pilih nilai kembalian yang konsisten.</li><li>Gunakan parameter daripada bergantung pada variabel global.</li></ul><p>Fungsi hanya dijalankan ketika dipanggil, bukan saat definisinya dibaca.</p>`,
      example: `def hitung_luas(panjang, lebar):\n    """Mengembalikan luas persegi panjang."""\n    return panjang * lebar\n\nluas = hitung_luas(8, 4)\nprint("Luas:", luas)`,
      challenge: 'Tulis fungsi konversi_celcius(fahrenheit) yang mengembalikan nilai Celcius.'
    },
    {
      id: 'input', number: '11', module: 'INPUT & VALIDASI', group: 'PRAKTIK', title: 'Input dari pengguna', duration: '10 menit',
      summary: 'Ambil masukan teks, lalu konversi dan validasi.',
      content: `<p>Fungsi <code>input()</code> membaca satu baris teks dari pengguna. Nilai yang dikembalikan bertipe <code>str</code>, jadi lakukan konversi untuk perhitungan numerik.</p><pre>nama = input("Nama: ")\numur = int(input("Umur: "))</pre><p>Jika input angka tidak valid, <code>int()</code> dapat menghasilkan <code>ValueError</code>. Kita akan menangani jenis kesalahan itu pada materi berikutnya.</p><div class="tip-box"><span class="tip-label">TENTANG KONSOL</span>Di Arctic Focus Studio, permintaan input muncul di area Console. Ketik jawaban lalu tekan Enter atau tombol Kirim input.</div>`,
      example: `nama = input("Siapa namamu? ")\nkota = input("Kamu tinggal di kota mana? ")\n\nprint(f"Halo, {nama}!")\nprint(f"Salam untuk {kota}.")`,
      challenge: 'Minta nama dan makanan favorit, lalu tampilkan satu kalimat personal.'
    },
    {
      id: 'errors', number: '12', module: 'DEBUGGING & MINI PROJECT', group: 'PRAKTIK', title: 'Menangani error + proyek', duration: '15 menit',
      summary: 'Tangani kesalahan umum dan susun mini program.',
      content: `<p>Error adalah bagian normal dari proses pengembangan. Baca traceback dari bagian bawah untuk menemukan tipe kesalahan dan baris pemicunya.</p><ul><li><code>SyntaxError</code>: struktur penulisan tidak valid.</li><li><code>NameError</code>: nama yang dipakai belum didefinisikan.</li><li><code>TypeError</code>: operasi tidak cocok dengan tipe nilai.</li><li><code>ValueError</code>: tipe konversi sesuai, tetapi nilainya tidak valid.</li></ul><p>Blok <code>try/except</code> dapat menangani kesalahan yang diperkirakan. Tangani tipe error spesifik dan jangan menutupi semua kesalahan tanpa alasan.</p>`,
      example: `print("=== Kalkulator sederhana ===")\ntry:\n    angka_a = float(input("Angka pertama: "))\n    angka_b = float(input("Angka kedua: "))\n    operasi = input("Operasi (+, -, *, /): ")\n\n    if operasi == "+":\n        hasil = angka_a + angka_b\n    elif operasi == "-":\n        hasil = angka_a - angka_b\n    elif operasi == "*":\n        hasil = angka_a * angka_b\n    elif operasi == "/":\n        hasil = angka_a / angka_b\n    else:\n        raise ValueError("Operasi tidak dikenal")\n\n    print("Hasil:", hasil)\nexcept ValueError as error:\n    print("Input tidak valid:", error)\nexcept ZeroDivisionError:\n    print("Tidak dapat membagi dengan nol.")`,
      challenge: 'Jalankan mini kalkulator. Uji penjumlahan, input yang bukan angka, dan pembagian dengan nol.'
    }
  ];

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const safeLocalStorage = {
    get(key) { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null; } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } }
  };
  const initialState = safeLocalStorage.get(STORAGE_KEY) || {};
  const state = {
    activeLesson: LESSONS.some(item => item.id === initialState.activeLesson) ? initialState.activeLesson : 'hello',
    completed: new Set(Array.isArray(initialState.completed) ? initialState.completed : []),
    bookmarks: new Set(Array.isArray(initialState.bookmarks) ? initialState.bookmarks : []),
    code: typeof initialState.code === 'string' ? initialState.code : null,
    fileName: typeof initialState.fileName === 'string' ? initialState.fileName : 'main.py',
    fontSize: Number.isFinite(initialState.fontSize) ? Math.max(12, Math.min(22, initialState.fontSize)) : 15,
    tabSize: [2, 4, 8].includes(initialState.tabSize) ? initialState.tabSize : 4,
    lineWrapping: initialState.lineWrapping !== false,
    focusMode: false,
    currentMobilePanel: 'code',
    runStatus: 'idle',
    dirty: false,
    runtimeReady: false,
    worker: null,
    waitingInput: null,
    outputChars: 0,
    runStartedAt: 0,
    codeMirror: null,
    saveTimer: null,
    toastTimer: null
  };

  function persistState() {
    const ok = safeLocalStorage.set(STORAGE_KEY, {
      activeLesson: state.activeLesson,
      completed: [...state.completed],
      bookmarks: [...state.bookmarks],
      code: state.codeMirror ? state.codeMirror.getValue() : state.code,
      fileName: state.fileName,
      fontSize: state.fontSize,
      tabSize: state.tabSize,
      lineWrapping: state.lineWrapping
    });
    if (!ok) setSaveState('Penyimpanan penuh', true);
    return ok;
  }

  function setSaveState(text, isError = false) {
    const el = $('#save-state');
    el.textContent = text;
    el.style.color = isError ? 'var(--error)' : '';
  }

  function setDirty(dirty) {
    state.dirty = dirty;
    $('#dirty-dot').classList.toggle('is-hidden', !dirty);
    if (dirty) setSaveState('Belum disimpan');
  }

  function saveDraft(showFeedback = true) {
    if (state.codeMirror) state.code = state.codeMirror.getValue();
    const ok = persistState();
    if (ok) {
      setDirty(false);
      setSaveState('Tersimpan lokal');
      if (showFeedback) toast('Draft tersimpan di perangkat ini.');
    } else if (showFeedback) {
      toast('Draft tidak dapat disimpan. Periksa ruang penyimpanan browser.', true);
    }
  }

  function scheduleSave() {
    setDirty(true);
    window.clearTimeout(state.saveTimer);
    state.saveTimer = window.setTimeout(() => saveDraft(false), 420);
  }

  function toast(message, isError = false) {
    const el = document.createElement('div');
    el.className = `toast${isError ? ' error' : ''}`;
    el.textContent = message;
    $('#toast-region').append(el);
    window.setTimeout(() => el.remove(), 3200);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  }

  function currentLesson() { return LESSONS.find(item => item.id === state.activeLesson) || LESSONS[0]; }

  function renderNavigation(filter = '') {
    const nav = $('#lesson-nav');
    nav.replaceChildren();
    const normalized = filter.trim().toLocaleLowerCase('id-ID');
    let visible = 0;
    let lastGroup = '';
    LESSONS.forEach((lesson) => {
      const matches = !normalized || `${lesson.title} ${lesson.summary} ${lesson.module} ${lesson.group}`.toLocaleLowerCase('id-ID').includes(normalized) || (normalized === 'bookmark' && state.bookmarks.has(lesson.id));
      if (!matches) return;
      visible++;
      if (lesson.group !== lastGroup) {
        const group = document.createElement('div');
        group.className = 'module-label';
        const name = document.createElement('span');
        name.textContent = lesson.group;
        group.append(name);
        const count = document.createElement('span');
        count.textContent = String(LESSONS.filter(item => item.group === lesson.group && (!normalized || `${item.title} ${item.summary} ${item.module}`.toLocaleLowerCase('id-ID').includes(normalized) || (normalized === 'bookmark' && state.bookmarks.has(item.id)))).length).padStart(2, '0');
        group.append(count);
        nav.append(group);
        lastGroup = lesson.group;
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'lesson-item';
      button.dataset.lesson = lesson.id;
      button.setAttribute('aria-current', lesson.id === state.activeLesson ? 'step' : 'false');
      const number = document.createElement('span');
      number.className = 'lesson-number';
      number.textContent = lesson.number;
      const title = document.createElement('span');
      title.textContent = lesson.title;
      button.append(number, title);
      if (state.bookmarks.has(lesson.id)) {
        const star = document.createElement('span'); star.className = 'lesson-check'; star.textContent = '☆'; star.setAttribute('aria-label', 'Bookmark'); button.append(star);
      } else if (state.completed.has(lesson.id)) {
        const check = document.createElement('span'); check.className = 'lesson-check'; check.textContent = '✓'; check.setAttribute('aria-label', 'Selesai'); button.append(check);
      }
      button.addEventListener('click', () => selectLesson(lesson.id));
      nav.append(button);
    });
    if (!visible) {
      const empty = document.createElement('div');
      empty.className = 'empty-search';
      empty.textContent = 'Tidak ada materi yang cocok. Coba kata kunci lain.';
      nav.append(empty);
    }
    const completed = LESSONS.filter(item => state.completed.has(item.id)).length;
    const percent = Math.round(completed / LESSONS.length * 100);
    $('#progress-percent').textContent = `${percent}%`;
    $('#progress-bar').style.width = `${percent}%`;
    $('#progress-detail').textContent = `${completed} dari ${LESSONS.length} pelajaran selesai`;
  }

  function renderLesson() {
    const lesson = currentLesson();
    $('#lesson-module').textContent = `MODUL ${lesson.number} · ${lesson.module}`;
    $('#lesson-title').textContent = lesson.title;
    $('#bookmark-btn').setAttribute('aria-pressed', String(state.bookmarks.has(lesson.id)));
    $('#bookmark-btn').querySelector('span[aria-hidden="true"]').textContent = state.bookmarks.has(lesson.id) ? '★' : '☆';
    $('#mark-done-btn').classList.toggle('is-complete', state.completed.has(lesson.id));
    $('#mark-done-btn').textContent = state.completed.has(lesson.id) ? '✓ Selesai — batalkan' : 'Tandai selesai';
    const nextIndex = LESSONS.findIndex(item => item.id === lesson.id) + 1;
    $('#next-lesson-btn').disabled = nextIndex >= LESSONS.length;
    $('#next-lesson-btn').style.opacity = nextIndex >= LESSONS.length ? '.45' : '1';
    const content = $('#lesson-content');
    content.innerHTML = `${lesson.content}<h3>Contoh kode</h3><pre><code>${escapeHtml(lesson.example)}</code></pre><button id="load-example-btn" class="secondary-button" type="button">Gunakan contoh di editor <span aria-hidden="true">↗</span></button><div class="challenge-box"><span class="tip-label">TANTANGAN LATIHAN</span>${escapeHtml(lesson.challenge)}</div>`;
    $('#load-example-btn').addEventListener('click', () => {
      state.codeMirror.setValue(lesson.example);
      state.codeMirror.focus();
      setDirty(true);
      toast('Contoh dimuat ke editor. Jalankan dengan Ctrl+Enter.');
      switchMobilePanel('code');
    });
  }

  function selectLesson(id) {
    if (!LESSONS.some(item => item.id === id)) return;
    state.activeLesson = id;
    renderNavigation($('#lesson-search').value);
    renderLesson();
    persistState();
    if (window.matchMedia('(max-width: 980px)').matches) switchMobilePanel('learn');
    document.body.classList.remove('lesson-picker-open');
  }

  function renderFileName() {
    $('#file-name').value = state.fileName;
    $('#editor-tab-name').textContent = state.fileName;
    document.title = `${state.fileName} — Arctic Focus Studio`;
  }

  function normalizeFileName(value) {
    let name = String(value || '').replace(/[\\/:*?"<>|\u0000-\u001F]/g, '').trim().slice(0, 80);
    if (!name) name = 'main.py';
    if (!/\.py$/i.test(name)) name += '.py';
    return name;
  }

  function downloadFile(filename, text, mime = 'text/x-python;charset=utf-8') {
    const blob = new Blob([text], { type: mime });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.style.display = 'none';
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1200);
  }

  function toggleComment(cm) {
    const selections = cm.listSelections();
    const ranges = selections.map(selection => ({ from: Math.min(selection.anchor.line, selection.head.line), to: Math.max(selection.anchor.line, selection.head.line) }));
    const lines = new Set();
    ranges.forEach(({ from, to }) => { for (let i = from; i <= to; i++) lines.add(i); });
    const indexes = [...lines].sort((a, b) => b - a);
    const allCommented = indexes.every(line => /^\s*#/.test(cm.getLine(line)) || /^\s*$/.test(cm.getLine(line)));
    cm.operation(() => {
      indexes.forEach(line => {
        const text = cm.getLine(line);
        if (!text.trim()) return;
        if (allCommented) {
          const match = text.match(/^(\s*)# ?/);
          if (match) cm.replaceRange('', { line, ch: match[1].length }, { line, ch: match[0].length });
        } else {
          const spaces = (text.match(/^\s*/) || [''])[0].length;
          cm.replaceRange('# ', { line, ch: spaces }, { line, ch: spaces });
        }
      });
    });
    scheduleSave();
  }

  function initEditor() {
    const textarea = $('#code-editor');
    if (state.code !== null) textarea.value = state.code;
    state.codeMirror = CodeMirror.fromTextArea(textarea, {
      mode: { name: 'python', version: 3 },
      lineNumbers: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      indentUnit: state.tabSize,
      tabSize: state.tabSize,
      indentWithTabs: false,
      lineWrapping: state.lineWrapping,
      autofocus: false,
      viewportMargin: 35,
      extraKeys: {
        'Tab': cm => cm.somethingSelected() ? cm.indentSelection('add') : cm.execCommand('insertSoftTab'),
        'Shift-Tab': cm => cm.indentSelection('subtract'),
        'Ctrl-Enter': () => runCode(),
        'Cmd-Enter': () => runCode(),
        'Ctrl-S': () => saveDraft(true),
        'Cmd-S': () => saveDraft(true),
        'Ctrl-/': cm => toggleComment(cm),
        'Cmd-/': cm => toggleComment(cm),
        'F1': () => openDialog('shortcuts-dialog'),
        'Esc': () => closeTopDialog()
      },
      gutters: ['CodeMirror-linenumbers'],
      styleActiveLine: true,
      dragDrop: false,
      allowDropFileTypes: []
    });
    state.codeMirror.setSize('100%', '100%');
    applyEditorSettings();
    state.codeMirror.on('change', scheduleSave);
    state.codeMirror.on('cursorActivity', updateCursorPosition);
    state.codeMirror.on('focus', () => { document.body.classList.add('editor-focused'); });
    state.codeMirror.on('blur', () => { document.body.classList.remove('editor-focused'); });
    updateCursorPosition();
  }

  function updateCursorPosition() {
    if (!state.codeMirror) return;
    const cursor = state.codeMirror.getCursor();
    $('#cursor-position').textContent = `Ln ${cursor.line + 1}, Col ${cursor.ch + 1}`;
  }

  function applyEditorSettings() {
    document.documentElement.style.setProperty('--code-font-size', `${state.fontSize}px`);
    $('#font-size-value').textContent = `${state.fontSize} px`;
    $('#indent-status').textContent = `Indentasi: ${state.tabSize} spasi`;
    if (state.codeMirror) {
      state.codeMirror.setOption('indentUnit', state.tabSize);
      state.codeMirror.setOption('tabSize', state.tabSize);
      state.codeMirror.setOption('lineWrapping', state.lineWrapping);
      state.codeMirror.refresh();
    }
    persistState();
  }

  function openDialog(id) {
    const dialog = document.getElementById(id);
    if (!dialog || dialog.open) return;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else { dialog.setAttribute('open', ''); }
  }

  function closeTopDialog() {
    const openDialogEl = $$('dialog[open]').slice(-1)[0];
    if (openDialogEl) openDialogEl.close ? openDialogEl.close() : openDialogEl.removeAttribute('open');
  }

  function setRuntimeStatus(kind, label) {
    const pill = $('#runtime-pill');
    pill.className = `status-pill status-${kind}`;
    $('#runtime-label').textContent = label;
  }

  async function checkRuntimeAssets() {
    try {
      const response = await fetch('./runtime/pyodide.js', { method: 'HEAD', cache: 'no-store' });
      if (response.ok) {
        setRuntimeStatus('warn', 'Runtime tersedia · belum dimuat');
        $('#runtime-version').textContent = 'Runtime siap dimuat';
        return true;
      }
    } catch { /* the server may not be running yet */ }
    setRuntimeStatus('warn', 'Runtime belum dipasang');
    $('#runtime-version').textContent = 'Jalankan setup_runtime.py';
    return false;
  }

  function addConsoleLine(text, type = 'stdout') {
    const output = $('#console-output');
    if (output.querySelector('.console-placeholder')) output.replaceChildren();
    const safeText = String(text ?? '');
    state.outputChars += safeText.length;
    if (state.outputChars > OUTPUT_LIMIT) {
      const warning = document.createElement('div');
      warning.className = 'console-line system';
      warning.textContent = 'Output dihentikan karena batas ukuran konsol tercapai.';
      output.append(warning);
      stopWorker('output-limit');
      return;
    }
    const line = document.createElement('div');
    line.className = `console-line ${type}`;
    line.textContent = safeText;
    output.append(line);
    output.scrollTop = output.scrollHeight;
  }

  function clearOutput() {
    state.outputChars = 0;
    const output = $('#console-output');
    output.innerHTML = '<div class="console-placeholder"><span class="placeholder-mark">✓</span><div><strong>Output program akan muncul di sini.</strong><p>Tekan <kbd>Ctrl</kbd> + <kbd>Enter</kbd> untuk menjalankan kode.</p></div></div>';
  }

  function setExecutionBadge(kind, text) {
    const badge = $('#execution-badge');
    badge.className = `execution-badge${kind ? ` is-${kind}` : ''}`;
    badge.textContent = text;
  }

  function setExecutionStatus(text, kind = '') {
    const el = $('#execution-status');
    el.className = kind ? `is-${kind}` : '';
    el.innerHTML = '<span class="tiny-dot"></span>';
    const label = document.createElement('span');
    label.textContent = text;
    el.append(label);
  }

  function setRunStatus(status) {
    state.runStatus = status;
    const running = status === 'running' || status === 'loading';
    $('#run-btn').classList.toggle('is-hidden', running);
    $('#stop-btn').classList.toggle('is-hidden', !running);
    $('#run-btn').disabled = running;
    if (status === 'loading') {
      setExecutionBadge('running', 'MEMUAT');
      setExecutionStatus('Memuat runtime Python…');
    } else if (status === 'running') {
      setExecutionBadge('running', 'RUNNING');
      setExecutionStatus('Program sedang berjalan…');
    } else if (status === 'success') {
      setExecutionBadge('success', 'SELESAI');
      setExecutionStatus('Eksekusi selesai', 'success');
    } else if (status === 'error') {
      setExecutionBadge('error', 'ERROR');
      setExecutionStatus('Eksekusi menghasilkan error', 'error');
    } else if (status === 'stopped') {
      setExecutionBadge('', 'DIHENTIKAN');
      setExecutionStatus('Eksekusi dihentikan');
    } else {
      setExecutionBadge('', 'SIAP');
      setExecutionStatus('Menunggu eksekusi');
    }
  }

  function createWorker() {
    if (state.worker) {
      state.worker.terminate();
      state.worker = null;
    }
    const worker = new Worker('./assets/js/runtime-worker.js');
    state.worker = worker;
    worker.onmessage = event => handleWorkerMessage(event.data || {});
    worker.onerror = event => {
      addConsoleLine(`Worker error: ${event.message || 'Gagal memulai runtime.'}`, 'stderr');
      setRuntimeStatus('error', 'Runtime gagal');
      setRunStatus('error');
      resetInputForm();
      worker.terminate();
      if (state.worker === worker) state.worker = null;
    };
    return worker;
  }

  let queuedCode = null;
  function runCode() {
    if (state.runStatus === 'running' || state.runStatus === 'loading') return;
    if (!state.codeMirror) return;
    saveDraft(false);
    const code = state.codeMirror.getValue();
    if (!code.trim()) {
      toast('Editor masih kosong. Tulis kode Python sebelum menjalankan.', true);
      state.codeMirror.focus();
      return;
    }
    clearOutput();
    resetInputForm();
    state.runStartedAt = performance.now();
    queuedCode = code;
    setRunStatus('loading');
    setRuntimeStatus('warn', 'Memuat Python…');
    let worker = state.worker;
    if (!worker) worker = createWorker();
    if (state.runtimeReady) {
      worker.postMessage({ type: 'RUN', code });
      queuedCode = null;
    } else {
      worker.postMessage({ type: 'INIT' });
    }
  }

  function stopWorker(reason = 'user') {
    if (state.worker) {
      state.worker.terminate();
      state.worker = null;
    }
    state.runtimeReady = false;
    queuedCode = null;
    resetInputForm();
    if (reason === 'user') {
      addConsoleLine('Eksekusi dihentikan oleh pengguna.', 'system');
      setRunStatus('stopped');
      setRuntimeStatus('warn', 'Runtime akan dimuat ulang');
    } else if (reason === 'output-limit') {
      setRunStatus('error');
      setRuntimeStatus('warn', 'Eksekusi dihentikan');
    }
  }

  function handleWorkerMessage(message) {
    switch (message.type) {
      case 'loading':
        setRunStatus('loading');
        break;
      case 'ready':
        state.runtimeReady = true;
        setRuntimeStatus('ready', 'Python 3 siap');
        $('#runtime-version').textContent = `Python ${message.pythonVersion || '3'} · Pyodide ${message.pyodideVersion || ''}`;
        if (queuedCode !== null) {
          const code = queuedCode;
          queuedCode = null;
          state.worker?.postMessage({ type: 'RUN', code });
        } else if (state.runStatus === 'loading') {
          setRunStatus('idle');
        }
        break;
      case 'stdout':
        addConsoleLine(message.text, 'stdout');
        break;
      case 'stderr':
        addConsoleLine(message.text, 'stderr');
        break;
      case 'stdin-request':
        showInputForm(message.buffer, message.control);
        break;
      case 'input-unavailable':
        addConsoleLine('Input interaktif membutuhkan browser dengan SharedArrayBuffer aktif. Jalankan aplikasi melalui launcher lokal yang disertakan.', 'stderr');
        break;
      case 'run-start':
        setRunStatus('running');
        break;
      case 'run-done': {
        resetInputForm();
        const duration = (performance.now() - state.runStartedAt) / 1000;
        $('#last-run-time').textContent = `${duration.toFixed(2)} s`;
        setRunStatus('success');
        setRuntimeStatus('ready', 'Python 3 siap');
        break;
      }
      case 'run-error':
        resetInputForm();
        addConsoleLine(message.error || 'Eksekusi gagal.', 'stderr');
        $('#last-run-time').textContent = `${((performance.now() - state.runStartedAt) / 1000).toFixed(2)} s`;
        setRunStatus('error');
        setRuntimeStatus('ready', 'Python 3 siap');
        break;
      case 'runtime-error':
        resetInputForm();
        addConsoleLine(message.error || 'Runtime Python tidak dapat dimuat.', 'stderr');
        addConsoleLine('Periksa apakah setup_runtime.py sudah berhasil dijalankan dan file runtime/pyodide.js serta aset pendukung tersedia.', 'system');
        state.runtimeReady = false;
        setRunStatus('error');
        setRuntimeStatus('error', 'Runtime tidak tersedia');
        if (state.worker) { state.worker.terminate(); state.worker = null; }
        break;
      default:
        break;
    }
  }

  function showInputForm(buffer, control) {
    const form = $('#stdin-form');
    state.waitingInput = { buffer, control };
    form.classList.remove('is-hidden');
    $('#stdin-label').textContent = 'Python sedang menunggu input — ketik jawaban lalu Enter';
    $('#stdin-input').value = '';
    $('#stdin-input').focus();
  }

  function resetInputForm() {
    state.waitingInput = null;
    $('#stdin-form').classList.add('is-hidden');
    $('#stdin-input').value = '';
  }

  function sendInput(value) {
    const waiting = state.waitingInput;
    if (!waiting) return;
    const bytes = new TextEncoder().encode(`${value}\n`);
    const buffer = new Uint8Array(waiting.buffer);
    if (bytes.length > buffer.length) {
      toast('Input terlalu panjang. Batasi panjang input hingga sekitar 64 KB.', true);
      return;
    }
    buffer.set(bytes);
    const control = new Int32Array(waiting.control);
    Atomics.store(control, 1, bytes.length);
    Atomics.store(control, 0, 1);
    Atomics.notify(control, 0, 1);
    addConsoleLine(value, 'system');
    state.waitingInput = null;
    $('#stdin-form').classList.add('is-hidden');
  }

  function switchMobilePanel(panel) {
    if (!['learn', 'code', 'output'].includes(panel)) return;
    state.currentMobilePanel = panel;
    document.body.classList.remove('mobile-panel-learn', 'mobile-panel-code', 'mobile-panel-output');
    document.body.classList.add(`mobile-panel-${panel}`);
    $$('[data-mobile-panel]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mobilePanel === panel)));
    if (panel === 'code' && state.codeMirror) window.setTimeout(() => state.codeMirror.refresh(), 30);
  }

  function toggleFocusMode() {
    state.focusMode = !state.focusMode;
    document.body.classList.toggle('focus-mode', state.focusMode);
    $('#focus-btn').setAttribute('aria-pressed', String(state.focusMode));
    $('#focus-btn').innerHTML = state.focusMode ? 'Keluar fokus <span aria-hidden="true">↙</span>' : 'Fokus <span aria-hidden="true">↗</span>';
    if (state.focusMode) {
      document.body.classList.remove('mobile-panel-learn', 'mobile-panel-output');
      document.body.classList.add('mobile-panel-code');
    }
    window.setTimeout(() => state.codeMirror?.refresh(), 40);
  }

  function setupEvents() {
    $('#run-btn').addEventListener('click', runCode);
    $('#stop-btn').addEventListener('click', () => stopWorker('user'));
    $('#save-btn').addEventListener('click', () => saveDraft(true));
    $('#settings-btn').addEventListener('click', () => openDialog('settings-dialog'));
    $('#shortcuts-btn').addEventListener('click', () => openDialog('shortcuts-dialog'));
    $('#mobile-lessons-btn').addEventListener('click', () => { document.body.classList.add('lesson-picker-open'); });
    document.addEventListener('click', event => {
      if (document.body.classList.contains('lesson-picker-open') && !$('#sidebar').contains(event.target) && event.target !== $('#mobile-lessons-btn')) document.body.classList.remove('lesson-picker-open');
    });
    $('#collapse-sidebar').addEventListener('click', () => {
      document.body.classList.add('sidebar-collapsed');
    });
    $('#show-sidebar-btn').addEventListener('click', () => {
      document.body.classList.remove('sidebar-collapsed');
      window.setTimeout(() => state.codeMirror?.refresh(), 30);
    });
    $('#bookmark-btn').addEventListener('click', () => {
      const id = state.activeLesson;
      state.bookmarks.has(id) ? state.bookmarks.delete(id) : state.bookmarks.add(id);
      renderLesson(); renderNavigation($('#lesson-search').value); persistState();
      toast(state.bookmarks.has(id) ? 'Pelajaran ditambahkan ke bookmark.' : 'Bookmark dihapus.');
    });
    $('#mark-done-btn').addEventListener('click', () => {
      const id = state.activeLesson;
      state.completed.has(id) ? state.completed.delete(id) : state.completed.add(id);
      renderLesson(); renderNavigation($('#lesson-search').value); persistState();
      toast(state.completed.has(id) ? 'Progres pelajaran disimpan.' : 'Status selesai dibatalkan.');
    });
    $('#next-lesson-btn').addEventListener('click', () => {
      const index = LESSONS.findIndex(item => item.id === state.activeLesson);
      if (index >= 0 && index < LESSONS.length - 1) selectLesson(LESSONS[index + 1].id);
    });
    $('#lesson-search').addEventListener('input', event => renderNavigation(event.target.value));
    $('#file-name').addEventListener('change', event => {
      state.fileName = normalizeFileName(event.target.value);
      renderFileName(); persistState(); toast(`Nama file: ${state.fileName}`);
    });
    $('#file-name').addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); event.target.blur(); } });
    $('#export-btn').addEventListener('click', () => {
      saveDraft(false);
      downloadFile(state.fileName, state.codeMirror.getValue());
      toast(`File ${state.fileName} diekspor.`);
    });
    $('#import-btn').addEventListener('click', () => $('#file-input').click());
    $('#file-input').addEventListener('change', async event => {
      const file = event.target.files?.[0];
      if (!file) return;
      if (file.size > 2 * 1024 * 1024) { toast('File terlalu besar. Batas impor 2 MB.', true); event.target.value = ''; return; }
      try {
        const code = await file.text();
        state.fileName = normalizeFileName(file.name);
        renderFileName();
        state.codeMirror.setValue(code);
        setDirty(true); saveDraft(false); state.codeMirror.focus();
        toast(`File ${state.fileName} berhasil dibuka.`);
      } catch { toast('File tidak dapat dibaca.', true); }
      event.target.value = '';
    });
    $('#font-down-btn').addEventListener('click', () => changeFont(-1));
    $('#font-up-btn').addEventListener('click', () => changeFont(1));
    $('#settings-font-down').addEventListener('click', () => changeFont(-1));
    $('#settings-font-up').addEventListener('click', () => changeFont(1));
    $('#tab-size-select').value = String(state.tabSize);
    $('#tab-size-select').addEventListener('change', event => { state.tabSize = Number(event.target.value); applyEditorSettings(); });
    $('#wrap-toggle').checked = state.lineWrapping;
    $('#wrap-toggle').addEventListener('change', event => { state.lineWrapping = event.target.checked; applyEditorSettings(); });
    $('#focus-btn').addEventListener('click', toggleFocusMode);
    $('#clear-output-btn').addEventListener('click', clearOutput);
    $('#toggle-console-btn').addEventListener('click', () => { document.body.classList.toggle('console-collapsed'); window.setTimeout(() => state.codeMirror?.refresh(), 30); });
    $('#copy-output-btn').addEventListener('click', async () => {
      const text = [...$('#console-output').querySelectorAll('.console-line')].map(item => item.textContent).join('\n');
      if (!text) { toast('Belum ada output untuk disalin.'); return; }
      try {
        if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
        else throw new Error('clipboard unavailable');
        toast('Output disalin.');
      } catch {
        const area = document.createElement('textarea'); area.value = text; area.style.position = 'fixed'; area.style.opacity = '0'; document.body.append(area); area.select();
        let ok = false; try { ok = document.execCommand('copy'); } catch { /* no clipboard */ }
        area.remove(); toast(ok ? 'Output disalin.' : 'Browser tidak mengizinkan penyalinan otomatis.', !ok);
      }
    });
    $('#stdin-form').addEventListener('submit', event => { event.preventDefault(); sendInput($('#stdin-input').value); });
    $$('[data-mobile-panel]').forEach(button => button.addEventListener('click', () => switchMobilePanel(button.dataset.mobilePanel)));
    $$('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); }));
    document.addEventListener('keydown', event => {
      const key = event.key.toLowerCase();
      const modifier = event.ctrlKey || event.metaKey;
      if (key === 'escape' && state.focusMode && !$$('dialog[open]').length) { toggleFocusMode(); return; }
      if (event.key === 'F1') { event.preventDefault(); openDialog('shortcuts-dialog'); return; }
      if (event.key === '/' && !modifier && !event.altKey && !event.shiftKey && !['INPUT','TEXTAREA'].includes(document.activeElement?.tagName) && !document.body.classList.contains('editor-focused')) {
        event.preventDefault(); $('#lesson-search').focus(); return;
      }
      if (modifier && key === 's') { event.preventDefault(); saveDraft(true); }
      if (modifier && key === 'enter') { event.preventDefault(); runCode(); }
    });
    window.addEventListener('beforeunload', event => {
      if (state.dirty) { saveDraft(false); event.preventDefault(); event.returnValue = ''; }
    });
  }

  function changeFont(delta) {
    state.fontSize = Math.max(12, Math.min(22, state.fontSize + delta));
    applyEditorSettings();
  }

  async function init() {
    initEditor();
    renderFileName();
    renderNavigation();
    renderLesson();
    setupEvents();
    switchMobilePanel('code');
    applyEditorSettings();
    const runtimeExists = await checkRuntimeAssets();
    if (!runtimeExists) {
      addConsoleLine('Runtime Python belum terpasang. Jalankan setup_runtime.py satu kali saat perangkat terhubung ke internet, lalu muat ulang aplikasi.', 'system');
      addConsoleLine('Setelah file runtime lokal terpasang, editor dan eksekusi kode dapat digunakan tanpa CDN atau koneksi internet.', 'system');
    } else {
      addConsoleLine('Aset runtime lokal ditemukan. Tekan Run untuk menginisialisasi Python saat dibutuhkan.', 'system');
    }
  }

  function openFromExternalShortcut() {
    if (state.codeMirror) state.codeMirror.focus();
  }

  window.addEventListener('DOMContentLoaded', () => {
    if (typeof CodeMirror === 'undefined') {
      document.body.innerHTML = '<main style="max-width:680px;margin:60px auto;padding:24px;font:16px system-ui;color:#253247"><h1>Arctic Focus Studio</h1><p>Editor lokal belum berhasil dimuat. Pastikan folder assets/vendor/codemirror tersedia, lalu jalankan kembali melalui launcher lokal.</p></main>';
      return;
    }
    init().catch(error => {
      console.error(error);
      toast('Inisialisasi antarmuka gagal. Muat ulang aplikasi dan periksa console browser.', true);
    });
  });

  // Exposed only for a future local test harness; no data is sent over the network.
  window.ArcticFocus = { lessons: LESSONS.map(({ id, title }) => ({ id, title })), runCode: () => runCode(), stop: () => stopWorker('user'), focusEditor: openFromExternalShortcut };
})();
