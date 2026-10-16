@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 serve.py
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 (
  python serve.py
  goto :eof
)
echo Python 3 belum terdeteksi. Pasang Python 3, lalu jalankan ulang file ini.
pause
