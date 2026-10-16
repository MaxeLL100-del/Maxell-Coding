@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 setup_runtime.py
  goto :done
)
where python >nul 2>nul
if %errorlevel%==0 (
  python setup_runtime.py
  goto :done
)
echo Python 3 belum terdeteksi. Pasang Python 3 lalu coba lagi.
:done
pause
