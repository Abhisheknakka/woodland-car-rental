#!/bin/bash

# Woodland Car Rental - Vercel Deployment Script
echo "🚀 Starting Vercel deployment for Woodland Car Rental..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "next.config.js" ]; then
    echo "❌ Please run this script from the customer-portal directory"
    exit 1
fi

# Build the project first
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment complete!"
echo "📱 Your app should be live at the URL provided above"
echo "🔗 Check your Vercel dashboard for more details"
