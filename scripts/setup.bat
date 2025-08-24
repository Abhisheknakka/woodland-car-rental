@echo off
echo ========================================
echo  Woodland Car Rental System Setup
echo ========================================
echo.

echo Checking prerequisites...
echo.

REM Check Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or not in PATH
    echo Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
) else (
    echo ✅ Node.js found
)

REM Check Docker
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not installed or not running
    echo Please install Docker Desktop and ensure it's running
    pause
    exit /b 1
) else (
    echo ✅ Docker found
)

REM Check Git
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
) else (
    echo ✅ Git found
)

echo.
echo All prerequisites are satisfied!
echo.

echo Installing dependencies...
call npm run install:all
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!
echo.

echo Setting up environment files...
if not exist "backend\.env" (
    copy "backend\env.example" "backend\.env"
    echo ✅ Backend environment file created
) else (
    echo ℹ️  Backend environment file already exists
)

if not exist "customer-portal\.env.local" (
    copy "customer-portal\env.example" "customer-portal\.env.local"
    echo ✅ Customer Portal environment file created
) else (
    echo ℹ️  Customer Portal environment file already exists
)

if not exist "admin-portal\.env.local" (
    copy "admin-portal\env.example" "admin-portal\.env.local"
    echo ✅ Admin Portal environment file created
) else (
    echo ℹ️  Admin Portal environment file already exists
)

echo.
echo Starting Docker services...
call npm run docker:up
if %errorlevel% neq 0 (
    echo ❌ Failed to start Docker services
    pause
    exit /b 1
)

echo.
echo ✅ Setup completed successfully!
echo.
echo ========================================
echo  Next Steps:
echo ========================================
echo 1. Edit environment files if needed:
echo    - backend\.env
echo    - customer-portal\.env.local
echo    - admin-portal\.env.local
echo.
echo 2. Start development servers:
echo    npm run dev
echo.
echo 3. Access your applications:
echo    - Customer Portal: http://localhost:3000
echo    - Admin Portal: http://localhost:3002
echo    - API Server: http://localhost:3001
echo.
echo ========================================
echo.
pause
