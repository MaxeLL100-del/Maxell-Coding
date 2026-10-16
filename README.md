# Arctic Focus Studio — Python 3 Offline Learning Workspace

Aplikasi pembelajaran Python 3 dengan UI cerah, editor lokal, materi berbahasa Indonesia, console, shortcut keyboard, dan penyimpanan progres di browser. File aplikasi tidak memakai CDN atau API cloud saat berjalan.

## Status paket dan syarat offline

**Frontend tersedia di paket ini. Runtime Python WebAssembly tidak disertakan sebagai binari di arsip pembuatan ini karena lingkungan pembuatannya tidak memiliki akses unduh internet.** Pasang runtime dengan langkah satu kali di bawah. Sesudah kelima aset runtime selesai diunduh ke `runtime/`, aplikasi dapat dipakai tanpa koneksi internet, selama file paket tetap tersedia.

Runtime yang dipasang adalah Pyodide **0.29.5**, berbasis CPython untuk WebAssembly. Skrip mengunduh runtime core dan standard library dari distribusi Pyodide yang dipatok versinya serta mencoba mengunduh font variable Inter dan JetBrains Mono beserta lisensinya agar tersedia secara lokal. Paket ini **tidak** menyertakan wheel pustaka pihak ketiga seperti `numpy`, `pandas`, atau `matplotlib`.

## Windows: pemasangan pertama dan menjalankan

1. Ekstrak folder paket ke lokasi yang bisa ditulis.
2. Saat internet tersedia, buka terminal di folder ini lalu jalankan:

   ```bat
   py -3 setup_runtime.py
   ```

   Atau jalankan `setup_windows.bat`. Jika perintah `py` tidak tersedia, gunakan `python setup_runtime.py`.
3. Setelah unduhan selesai, putuskan koneksi internet untuk menguji mode offline.
4. Jalankan `start_windows.bat`. Browser akan membuka `http://127.0.0.1:8765/` jika pengaturan sistem mengizinkan.
5. Tekan Run pada contoh `print(...)`. Status runtime harus berubah menjadi **Python 3 siap**.
6. Hentikan server dengan `Ctrl+C` di terminal.

## Android melalui Termux

1. Pasang Termux dari sumber tepercaya yang biasa kamu gunakan.
2. Jalankan `pkg install python` jika Python belum tersedia.
3. Ekstrak folder proyek ke penyimpanan yang dapat diakses Termux atau salin ke direktori Termux.
4. Saat internet tersedia, jalankan `python setup_runtime.py` sekali atau `sh setup_android.sh`.
5. Jalankan `sh start_android.sh`.
6. Buka Chrome/Firefox ke `http://127.0.0.1:8765/`. Setelah runtime terpasang, matikan internet untuk memastikan aplikasi tetap bekerja.
7. Gunakan tab **Editor** untuk menulis kode, **Output** untuk melihat hasil, dan **Belajar** untuk membuka materi.

Server bind hanya ke `127.0.0.1`, tidak dibuka ke Wi-Fi/LAN. Header COOP/COEP disetel untuk mendukung `SharedArrayBuffer` agar pemanggilan `input()` dapat menunggu input pengguna tanpa membekukan antarmuka. Karena itu, **jangan** membuka `index.html` langsung dengan `file://`; gunakan launcher lokal.

## Fitur yang diimplementasikan

- Editor CodeMirror 5 lokal dengan Python syntax highlighting, nomor baris, indentasi, penutupan kurung otomatis, dan pencocokan kurung.
- Shortcut: `Ctrl+Enter` run, `Ctrl+S` simpan draft lokal, `Ctrl+Z`, `Ctrl+Shift+Z`, `Ctrl+F`, `Ctrl+/`, `Tab`, `Shift+Tab`, `Esc`, `F1`.
- Runtime Python yang dijalankan di Web Worker. Tombol Stop mengakhiri worker agar loop tanpa henti tidak terus mengunci antarmuka; setelah dihentikan, state runtime dimuat ulang ketika Run berikutnya.
- Output `print`, traceback/error, console clearing, copy output, dan prompt `input()` melalui panel console ketika browser mendukung SharedArrayBuffer terisolasi.
- Dua belas pelajaran singkat berbahasa Indonesia, contoh kode, tantangan, pencarian, bookmark, progres selesai.
- Autosave draft dan progres via `localStorage`; buka dan ekspor file `.py` lokal.
- Focus mode, pengaturan font/indentasi/word wrap, layout responsif, dan dukungan `prefers-reduced-motion`.

## Batasan teknis

- Pyodide adalah CPython yang dikompilasi untuk WebAssembly, bukan interpreter Python native di sistem operasi. Sebagian pustaka yang memerlukan ekstensi native atau akses OS penuh tidak tersedia/berperilaku berbeda.
- Runtime dasar yang disiapkan memuat core dan standard library. Paket pihak ketiga harus disiapkan terpisah dan tidak akan otomatis mengunduh paket dari internet saat offline.
- File dan input/output Python berlangsung di filesystem virtual runtime; aplikasi ini tidak memberi akses bebas ke seluruh file perangkat. Gunakan **Buka** dan **Ekspor .py** untuk memindahkan file kode.
- Data draft, bookmark, dan progres disimpan dalam penyimpanan browser pada origin lokal ini. Membersihkan data situs browser dapat menghapusnya. Ekspor kode `.py` untuk salinan permanen.
- Kinerja dan dukungan browser tetap bergantung pada perangkat/runtime. Paket tidak menjanjikan angka FPS, suhu, atau kompatibilitas universal.
- Inter dan JetBrains Mono disiapkan lokal oleh skrip setup dari repositori font open-source. Jika unduhan font gagal, browser memakai fallback sans/monospace dan fitur lain tetap bisa dipakai.

## Struktur folder

```text
arctic-focus-studio/
├── index.html
├── serve.py
├── setup_runtime.py
├── start_windows.bat
├── start_android.sh
├── assets/
│   ├── css/app.css
│   ├── fonts/            # diisi oleh setup_runtime.py (opsional)
│   ├── js/app.js
│   ├── js/runtime-worker.js
│   └── vendor/codemirror/...
└── runtime/              # diisi oleh setup_runtime.py
```

## Pemeriksaan manual yang disarankan

1. Jalankan `print("Python OK")`; hasil harus muncul di Console.
2. Jalankan kode yang memakai `input()`; kirim jawaban melalui form input Console.
3. Jalankan `while True: pass`, lalu tekan Stop; worker harus berhenti.
4. Ubah kode, refresh halaman, pastikan draft pulih.
5. Tandai pelajaran selesai, bookmark materi, refresh, cek progres.
6. Buka dan ekspor `.py`.
7. Ulangi tanpa internet setelah runtime terpasang.
8. Uji viewport desktop dan ponsel, Tab/Shift+Tab, undo/redo, pencarian, modal Settings dan shortcut.

Pemeriksaan sintaks skrip, struktur HTML/aset lokal, dan kompilasi 12 contoh materi telah dilakukan. Pengujian UI browser dan uji offline penuh masih perlu dilakukan pada perangkat sasaran setelah runtime terpasang; browser uji pada lingkungan pembuatan memblokir localhost dengan `ERR_BLOCKED_BY_ADMINISTRATOR`. Lihat `TEST_REPORT.md` untuk status per pemeriksaan. Jangan menganggap daftar pemeriksaan manual di atas sebagai hasil lulus sebelum dijalankan.
