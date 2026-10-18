@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo.
    echo No se pudieron instalar las dependencias. Verifica Node.js e Internet.
    pause
    exit /b 1
  )
)
echo Iniciando pagina...
call npm run dev
