# 🚗 Woodland Car Rental System - Development Setup Guide

## 📋 Project Overview

**Woodland Car Rental System** is a comprehensive car rental platform built as a monorepo with three main components:

1. **Customer Portal** - Customer-facing website (Next.js 14)
2. **Admin Portal** - Staff CRM system (React + Vite)
3. **Backend API** - RESTful API server (Express.js + PostgreSQL)

### 🎯 What We're Building

A complete car rental solution where:
- **Customers** can browse cars, make bookings, and pay online
- **Staff** can manage fleet, customers, and bookings through an admin panel
- **Business** gets real-time analytics and automated operations

### 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Customer Portal │    │   Admin Portal  │    │   Backend API   │
│  (Next.js 14)   │    │   (React+Vite)  │    │  (Express.js)   │
│   Port: 3000    │    │   Port: 3002    │    │   Port: 3001    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   PostgreSQL    │
                    │   Port: 5432    │
                    └─────────────────┘
```

## 🛠️ Prerequisites

Before starting, ensure you have these installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Docker Desktop** ([Download](https://www.docker.com/))
- **Git** ([Download](https://git-scm.com/))
- **VS Code** (recommended) or your preferred editor

### Verify Installation

```bash
# Check Node.js version
node --version  # Should be 18.0.0 or higher

# Check Docker
docker --version
docker-compose --version

# Check Git
git --version
```

## 🚀 Quick Start (5 Minutes)

### 1. Clone & Navigate

```bash
git clone <your-repository-url>
cd woodland-car-rental
```

### 2. Install Dependencies

```bash
# Install all dependencies for all services
npm run install:all
```

### 3. Start Development Environment

```bash
# Start database and services
npm run docker:up

# Start all development servers
npm run dev
```

### 4. Access Your Applications

- **Customer Portal**: http://localhost:3000
- **Admin Portal**: http://localhost:3002  
- **API Server**: http://localhost:3001
- **Database**: localhost:5432

## 🔧 Detailed Setup Instructions

### Step 1: Environment Configuration

#### Backend Environment
```bash
# Copy environment template
cp backend/env.example backend/.env

# Edit backend/.env with your values
# Key variables to set:
DATABASE_URL="postgresql://woodland_user:woodland_password@localhost:5432/woodland_car_rental"
JWT_SECRET="your-super-secret-jwt-key"
JWT_REFRESH_SECRET="your-refresh-secret-key"
```

#### Customer Portal Environment
```bash
# Create customer portal environment file
cp customer-portal/.env.example customer-portal/.env.local

# Set API URL
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

#### Admin Portal Environment
```bash
# Create admin portal environment file
cp admin-portal/.env.example admin-portal/.env.local

# Set API URL
VITE_API_URL=http://localhost:3001/api
```

### Step 2: Database Setup

```bash
# Start PostgreSQL container
npm run docker:up

# Wait for database to be ready (check logs)
npm run docker:logs

# Run database migrations (when backend is ready)
npm run db:migrate

# Seed with sample data
npm run db:seed
```

### Step 3: Start Development Servers

#### Option A: All Services at Once
```bash
# Start frontend, admin, and backend simultaneously
npm run dev
```

#### Option B: Individual Services
```bash
# Terminal 1: Backend API
npm run dev:backend

# Terminal 2: Customer Portal
npm run dev:customer-portal

# Terminal 3: Admin Portal
npm run dev:admin
```

## 📁 Project Structure Explained

```
woodland-car-rental/
├── customer-portal/          # Customer website
│   ├── pages/               # Next.js pages (routes)
│   ├── components/          # Reusable UI components
│   ├── public/              # Static assets (images, icons)
│   └── package.json         # Customer portal dependencies
│
├── admin-portal/             # Staff CRM portal
│   ├── pages/               # Admin page components
│   ├── components/          # Admin UI components
│   └── package.json         # Admin dependencies
│
├── backend/                  # API server
│   ├── src/
│   │   ├── routes/          # API endpoint definitions
│   │   ├── controllers/     # Business logic handlers
│   │   ├── models/          # Data models
│   │   └── index.js         # Server entry point
│   ├── package.json         # Backend dependencies
│   └── env.example          # Environment variables template
│
├── db/                       # Database setup
│   ├── schema.sql           # PostgreSQL table definitions
│   ├── migrations/          # Database change files
│   └── seeds/               # Sample data files
│
├── infra/                    # Infrastructure
│   └── docker-compose.yml   # Docker services configuration
│
├── docs/                     # Documentation
│   ├── setup-guide.md       # This file
│   └── requirements.md       # Project requirements
│
├── .cursorrules              # AI coding assistant rules
├── package.json              # Root project management
└── README.md                 # Project overview
```

## 🐳 Docker Services

Our Docker setup includes:

- **PostgreSQL 15** - Main database
- **Redis 7** - Caching and sessions
- **Backend API** - Express.js server
- **Customer Portal** - Next.js customer site
- **Admin Portal** - React admin interface
- **Nginx** - Reverse proxy (optional)

### Docker Commands

```bash
# Start all services
npm run docker:up

# Stop all services
npm run docker:down

# View service logs
npm run docker:logs

# Rebuild containers
npm run docker:build

# Check service status
docker-compose ps
```

## 🔑 Development Workflow

### 1. Daily Development

```bash
# Start your day
npm run docker:up          # Start database
npm run dev                # Start all dev servers

# Make changes to code
# Save files - hot reload will update automatically

# End your day
npm run docker:down        # Stop database
```

### 2. Adding New Features

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# Test locally
npm run test

# Commit and push
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

### 3. Database Changes

```bash
# When you modify database schema
cd backend
npx prisma migrate dev --name "description-of-changes"
npx prisma generate
```

## 🧪 Testing & Quality

### Run Tests
```bash
# All tests
npm run test

# Customer Portal tests only
npm run test:customer-portal

# Backend tests only
npm run test:backend
```

### Code Quality
```bash
# Lint all code
npm run lint

# Type checking (frontend & admin)
npm run type-check

# Format code
npm run format
```

## 🚨 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Check what's using the port
netstat -ano | findstr :3000

# Kill the process or change port in .env
```

#### Database Connection Failed
```bash
# Check if PostgreSQL is running
docker-compose ps postgres

# Restart database
docker-compose restart postgres

# Check logs
docker-compose logs postgres
```

#### Dependencies Issues
```bash
# Clean and reinstall
npm run clean
npm run install:all
```

#### Docker Issues
```bash
# Restart Docker Desktop
# Then run:
docker-compose down
docker-compose up -d
```

### Getting Help

1. **Check logs**: `npm run docker:logs`
2. **Verify services**: `docker-compose ps`
3. **Check environment**: Ensure `.env` files are set correctly
4. **Restart services**: `npm run docker:down && npm run docker:up`

## 📚 Next Steps

After setup, you can:

1. **Explore the codebase** - Start with `frontend/pages/` and `backend/src/routes/`
2. **Check the database** - Use `npm run db:studio` to view data
3. **Read requirements** - See `docs/requirements.md` for feature details
4. **Start coding** - Pick a feature from the requirements document

## 🔗 Useful Commands Reference

```bash
# Development
npm run dev                    # Start all services
npm run dev:customer-portal   # Start customer portal only
npm run dev:admin-portal      # Start admin portal only
npm run dev:backend           # Start API server only

# Database
npm run db:migrate            # Run database migrations
npm run db:seed               # Add sample data
npm run db:studio             # Open database viewer

# Docker
npm run docker:up             # Start infrastructure
npm run docker:down           # Stop infrastructure
npm run docker:logs           # View service logs

# Quality
npm run test                  # Run all tests
npm run lint                  # Check code quality
npm run type-check            # Verify TypeScript
npm run format                # Format code

# Build & Deploy
npm run build                 # Build all applications
npm run start                 # Start production servers
```

## 📞 Team Communication

- **Project Lead**: [Your Name] - [email]
- **Frontend Developer**: [Teammate Name] - [email]
- **Backend Developer**: [Teammate Name] - [email]
- **DevOps**: [DevOps Name] - [email]

## 🎯 What to Work On Next

1. **Customer Portal Developer**: Build customer car browsing and booking pages
2. **Backend Developer**: Implement user authentication and car management APIs
3. **Both**: Set up the database models and API endpoints together

---

**🎉 You're all set! The development environment is ready for you to start building the Woodland Car Rental System.**

*Need help? Check the troubleshooting section or reach out to the team.*
