# Catatan QA — Arctic Focus Studio

Tanggal pemeriksaan: 2026-10-16

## Hasil yang benar-benar diperiksa

| Pemeriksaan | Status | Bukti / batasan |
|---|---|---|
| Pemeriksaan sintaks JavaScript aplikasi | PASSED | `node --check assets/js/app.js` selesai tanpa error. |
| Pemeriksaan sintaks JavaScript worker | PASSED | `node --check assets/js/runtime-worker.js` selesai tanpa error. |
| Kompilasi skrip Python launcher dan setup | PASSED | `python -m py_compile serve.py setup_runtime.py` selesai tanpa error. |
| Sintaks 12 contoh kode materi Python | PASSED | Seluruh 12 contoh diekstrak dan dikompilasi menggunakan `compile(..., 'exec')` Python lokal. Ini memeriksa sintaks contoh; bukan pengujian runtime Pyodide. |
| ID HTML statis dan tautan aset | PASSED | 58 ID HTML unik, tidak ada duplikat; semua referensi `src`/`href` lokal yang ada di HTML ditemukan. `load-example-btn` dibuat secara dinamis oleh renderer pelajaran. |
| Keseimbangan kurung kurawal CSS | PASSED (pemeriksaan dasar) | Jumlah `{` dan `}` seimbang. Ini bukan pengganti parser CSS/browser. |
| Server lokal dan header isolasi | PASSED (smoke check sebelumnya) | Server menanggapi HTTP 200 dan mengirim header COOP/COEP serta nosniff; jalur worker tersedia. |
| Runtime Pyodide terunduh | BLOCKED | Lingkungan pembuatan tidak memiliki konektivitas DNS/Internet; binari runtime tidak disertakan. Jalankan `setup_runtime.py` ketika perangkat terhubung ke internet. |
| Font variable lokal terunduh | BLOCKED | Skrip mengunduh Inter dan JetBrains Mono secara opsional saat setup. Fallback sistem tetap disediakan jika font belum ada/gagal diunduh. |
| Uji UI di browser nyata | BLOCKED | Browser uji di lingkungan ini memblokir akses localhost/file dengan `ERR_BLOCKED_BY_ADMINISTRATOR`; tidak ada screenshot atau klaim visual browser yang dibuat. |
| Eksekusi Python di browser | NOT TESTED | Memerlukan aset Pyodide lokal yang belum tersedia di paket pembuatan ini. |
| Mode offline setelah setup | NOT TESTED | Harus diuji setelah runtime lengkap diunduh, kemudian koneksi perangkat dimatikan. |
| `input()` dan `SharedArrayBuffer` | NOT TESTED | Implementasi membutuhkan browser yang mendukung SharedArrayBuffer dan server lokal COOP/COEP; belum divalidasi lewat UI browser. |
| Shortcut, localStorage, responsivitas, aksesibilitas | NOT TESTED pada browser nyata | Implementasi tersedia; verifikasi akhir perlu dijalankan di desktop dan perangkat target, terutama Android/Termux bila digunakan. |

## Kriteria penerimaan manual

- [ ] Status runtime berubah menjadi siap dan versi Python 3 terdeteksi.
- [ ] `print("Python OK")` tampil di console tanpa request jaringan eksternal.
- [ ] `input()` menerima teks, mengirimkannya ke Python, dan program selesai.
- [ ] Program yang tidak berakhir bisa dihentikan melalui Stop.
- [ ] Ctrl+Enter, Ctrl+S, undo/redo, search, comment, Tab dan Shift+Tab berfungsi.
- [ ] Draft, bookmark, dan progres bertahan sesudah refresh.
- [ ] Tidak ada request CDN ketika memuat dan menjalankan kode setelah runtime lengkap terpasang.
- [ ] Layout tidak overflow pada viewport desktop, tablet, dan mobile portrait.
- [ ] Reduced motion dan navigasi keyboard bisa digunakan.

## Kesimpulan

Paket telah melewati pemeriksaan sintaks dan pemeriksaan struktur statis di atas. Aplikasi belum dapat dinyatakan siap-offline end-to-end sebelum pengguna menjalankan setup runtime dan melakukan pengujian browser di perangkatnya. Status `PASSED`, `BLOCKED`, dan `NOT TESTED` sengaja dipisahkan sesuai bukti yang tersedia.
