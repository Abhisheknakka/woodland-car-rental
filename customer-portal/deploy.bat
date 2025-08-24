@echo off
echo 🚀 Starting Vercel deployment for Woodland Car Rental...

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI not found. Installing...
    npm install -g vercel
)

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Please run this script from the customer-portal directory
    pause
    exit /b 1
)

if not exist "next.config.js" (
    echo ❌ Please run this script from the customer-portal directory
    pause
    exit /b 1
)

REM Build the project first
echo 🔨 Building the project...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed. Please fix the errors and try again.
    pause
    exit /b 1
)

echo ✅ Build successful!

REM Deploy to Vercel
echo 🚀 Deploying to Vercel...
vercel --prod

echo 🎉 Deployment complete!
echo 📱 Your app should be live at the URL provided above
echo 🔗 Check your Vercel dashboard for more details
pause
