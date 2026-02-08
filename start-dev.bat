@echo off
REM Start a simple HTTP server on port 8000 using Python if available.
where python >nul 2>&1
if %errorlevel%==0 (
  start "" python -m http.server 8000
) else (
  echo Python no encontrado. Intenta instalar Python o usar `npx http-server`.
  pause
  exit /b 1
)
timeout /t 1 >nul
REM Open Google Chrome to the local server
where chrome >nul 2>&1
if %errorlevel%==0 (
  start chrome "http://localhost:8000"
) else (
  if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" "http://localhost:8000"
  ) else if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" "http://localhost:8000"
  ) else (
    echo No se pudo encontrar Google Chrome. Abre el navegador manualmente en http://localhost:8000
    pause
  )
)
