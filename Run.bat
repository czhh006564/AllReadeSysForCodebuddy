@echo off
chcp 65001 >nul
title 薪火传 书香伴 · 原型一键启动
cd /d "%~dp0prototype"

set "PORT=8123"
set "URL=http://127.0.0.1:%PORT%/index.html"

echo ============================================
echo   薪火传 书香伴 · 高保真原型
echo   目录: %CD%
echo   地址: %URL%
echo ============================================
echo.

rem ---- 若端口已有服务在跑，直接打开浏览器 ----
netstat -ano | findstr ":%PORT% " | findstr "LISTENING" >nul 2>nul
if %errorlevel%==0 (
    echo [提示] 端口 %PORT% 已有服务在运行，直接打开页面。
    start "" "%URL%"
    goto :end
)

rem ---- 优先使用 Python ----
where python >nul 2>nul
if %errorlevel%==0 (
    echo [启动] 使用 Python 内置静态服务器，端口 %PORT% ...
    start "原型服务器(关闭此窗口即停止)" /min cmd /c "python -m http.server %PORT%"
    ping -n 2 127.0.0.1 >nul
    start "" "%URL%"
    goto :end
)

rem ---- 无 Python 时回退到 Node ----
where npx >nul 2>nul
if %errorlevel%==0 (
    echo [启动] 未检测到 Python，改用 npx serve，端口 %PORT% ...
    start "原型服务器(关闭此窗口即停止)" /min cmd /c "npx --yes serve -l %PORT% ."
    ping -n 4 127.0.0.1 >nul
    start "" "%URL%"
    goto :end
)

echo [错误] 未检测到 python 或 node/npx，无法启动本地服务器。
echo        也可以直接双击 prototype\index.html 用浏览器打开（部分浏览器 iframe 预览受限）。
echo.
pause
exit /b 1

:end
echo.
echo [完成] 浏览器已打开。服务器在最小化的「原型服务器」窗口中运行，
echo        关闭该窗口即可停止服务。
echo.
echo 本窗口可以安全关闭。
ping -n 6 127.0.0.1 >nul
