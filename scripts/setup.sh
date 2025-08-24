#!/bin/bash

echo "========================================"
echo " Woodland Car Rental System Setup"
echo "========================================"
echo

echo "Checking prerequisites..."
echo

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed or not in PATH"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
else
    echo "✅ Node.js found: $(node --version)"
fi

# Check Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed or not in PATH"
    echo "Please install Docker and ensure it's running"
    exit 1
else
    echo "✅ Docker found: $(docker --version)"
fi

# Check Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed or not in PATH"
    echo "Please install Docker Compose"
    exit 1
else
    echo "✅ Docker Compose found: $(docker-compose --version)"
fi

# Check Git
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed or not in PATH"
    echo "Please install Git from https://git-scm.com/"
    exit 1
else
    echo "✅ Git found: $(git --version)"
fi

echo
echo "All prerequisites are satisfied!"
echo

echo "Installing dependencies..."
npm run install:all
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo
echo "✅ Dependencies installed successfully!"
echo

echo "Setting up environment files..."

# Backend environment
if [ ! -f "backend/.env" ]; then
    cp "backend/env.example" "backend/.env"
    echo "✅ Backend environment file created"
else
    echo "ℹ️  Backend environment file already exists"
fi

# Frontend environment
if [ ! -f "customer-portal/.env.local" ]; then
    cp "customer-portal/env.example" "customer-portal/.env.local"
    echo "✅ Customer Portal environment file created"
else
    echo "ℹ️  Customer Portal environment file already exists"
fi

# Admin Portal environment
if [ ! -f "admin-portal/.env.local" ]; then
    cp "admin-portal/env.example" "admin-portal/.env.local"
    echo "✅ Admin Portal environment file created"
else
    echo "ℹ️  Admin Portal environment file already exists"
fi

echo
echo "Starting Docker services..."
npm run docker:up
if [ $? -ne 0 ]; then
    echo "❌ Failed to start Docker services"
    exit 1
fi

echo
echo "✅ Setup completed successfully!"
echo
echo "========================================"
echo " Next Steps:"
echo "========================================"
echo "1. Edit environment files if needed:"
echo "   - backend/.env"
echo "   - frontend/.env.local"
echo "   - admin/.env.local"
echo
echo "2. Start development servers:"
echo "   npm run dev"
echo
echo "3. Access your applications:"
echo "   - Customer Site: http://localhost:3000"
echo "   - Admin Portal: http://localhost:3002"
echo "   - API Server: http://localhost:3001"
echo
echo "========================================"
echo

read -p "Press Enter to continue..."
