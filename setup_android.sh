#!/data/data/com.termux/files/usr/bin/sh
set -eu
cd "$(dirname "$0")"
if ! command -v python >/dev/null 2>&1; then
  echo "Python belum tersedia. Di Termux jalankan: pkg install python"
  exit 1
fi
python setup_runtime.py
