#!/data/data/com.termux/files/usr/bin/sh
set -eu
cd "$(dirname "$0")"
if ! command -v python >/dev/null 2>&1; then
  echo "Python belum tersedia. Di Termux jalankan: pkg install python"
  exit 1
fi
printf '\nArctic Focus Studio akan berjalan di perangkat ini.\n'
printf 'Buka browser ke http://127.0.0.1:8765/\n'
printf 'Server tetap berjalan sampai kamu menekan Ctrl+C.\n\n'
python serve.py --no-browser
