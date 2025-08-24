# 🚗 Woodland Car Rental System

A comprehensive car rental management system with a modern customer portal, admin CRM, and robust backend API. Built with Next.js, TypeScript, and TailwindCSS for a professional car rental experience.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Branch Strategy](#branch-strategy)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Future Improvements](#future-improvements)
- [Support](#support)

## 🎯 Project Overview

The Woodland Car Rental System is a modern, scalable platform that provides a seamless car rental experience. Built with a monorepo architecture, it includes a customer-facing website, admin CRM portal, and comprehensive backend API.

**Key Benefits:**
- **For Customers**: Easy car browsing, instant booking, secure payments, and comprehensive rental management
- **For Staff**: Centralized fleet management, booking administration, customer tracking, and financial oversight
- **For Business**: Increased operational efficiency, better customer engagement, and comprehensive business analytics

## ✨ Features

### 🚗 Customer Portal Features
- **Modern Website Design**
  - Responsive homepage with hero section
  - Car browsing with filters and search
  - About page with company information
  - Contact page with form and service areas
  
- **Car Management**
  - Browse car catalog with advanced filtering
  - Car details and specifications
  - Instant booking and reservation
  
- **User Experience**
  - Mobile-first responsive design
  - Professional UI with TailwindCSS
  - Fast loading with Next.js optimization

### 👨‍💼 Admin Portal Features
- **Fleet Management**
  - Complete car inventory management
  - Booking status and customer history
  - Maintenance scheduling and tracking
  
- **Customer Administration**
  - Customer profiles and information
  - Booking management and status updates
  - Communication tools and notifications
  
- **Business Operations**
  - Booking analytics and reporting
  - Revenue tracking and financial reports
  - Customer performance metrics

## 🛠️ Tech Stack

### Customer Portal
- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom components with Lucide React icons
- **Forms**: React Hook Form with state management
- **Deployment**: Vercel

### Admin Portal
- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Charts**: Recharts for analytics
- **State Management**: React hooks

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **API**: RESTful endpoints
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with bcrypt

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Database**: PostgreSQL 15+
- **Caching**: Redis
- **Payments**: Stripe (primary), Razorpay (alternative)

## 🏗️ Repository Structure

```
woodland-car-rental/
├── customer-portal/          # Customer-facing website (Next.js)
│   ├── pages/               # Next.js pages
│   ├── components/          # React components
│   ├── styles/              # CSS and TailwindCSS
│   └── package.json         # Dependencies
├── admin-portal/            # Admin CRM portal (React + Vite)
│   ├── src/                 # Source code
│   ├── components/          # Admin components
│   └── package.json         # Dependencies
├── backend/                 # API server (Node.js + Express)
│   ├── src/                 # Source code
│   ├── routes/              # API routes
│   ├── controllers/         # Business logic
│   └── package.json         # Dependencies
├── infra/                   # Infrastructure files
│   ├── docker-compose.yml   # Local development
│   └── Dockerfile           # Containerization
├── docs/                    # Documentation
└── scripts/                 # Setup and deployment scripts
```

## 🌿 Branch Strategy

### **Main Branches**
- **`main`** - Production-ready code, stable releases
- **`develop`** - Development branch, integration of features (default)

### **Feature Branches**
- **`feature/feature-name`** - New features and enhancements
- **`bugfix/bug-description`** - Bug fixes
- **`hotfix/urgent-fix`** - Critical production fixes

### **Development Workflow**
1. Always start from `develop` branch
2. Create feature branches for new work
3. Merge features back to `develop`
4. Release from `develop` to `main`

## 📋 Prerequisites

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher
- **Git**: Latest version
- **Docker**: For local development (optional)
- **PostgreSQL**: 15.0 or higher (for backend)

## 🚀 Setup Instructions

### **1. Clone and Setup**
```bash
# Clone the repository
git clone https://github.com/Abhisheknakka/woodland-car-rental.git
cd woodland-car-rental

# Switch to develop branch (default)
git checkout develop

# Install dependencies
npm install
```

### **2. Environment Setup**
```bash
# Customer Portal
cd customer-portal
cp env.example .env.local
npm install

# Admin Portal
cd ../admin-portal
cp env.example .env.local
npm install

# Backend
cd ../backend
cp env.example .env
npm install
```

### **3. Start Development**
```bash
# From root directory
npm run dev

# Or individually:
# Customer Portal (Next.js)
cd customer-portal && npm run dev

# Admin Portal (React + Vite)
cd admin-portal && npm run dev

# Backend (Node.js)
cd backend && npm run dev
```

## 🌍 Environment Variables

### **Customer Portal (.env.local)**
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

### **Admin Portal (.env.local)**
```env
VITE_API_URL=http://localhost:3001
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

### **Backend (.env)**
```env
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/woodland_rental
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
```

## 🏃‍♂️ Running Locally

### **Quick Start (All Services)**
```bash
# From root directory
npm run dev
```

This will start:
- Customer Portal: http://localhost:3000
- Admin Portal: http://localhost:5173
- Backend API: http://localhost:3001

### **Individual Services**
```bash
# Customer Portal
cd customer-portal
npm run dev

# Admin Portal
cd admin-portal
npm run dev

# Backend
cd backend
npm run dev
```

## 🚀 Deployment

### **Customer Portal (Vercel)**
```bash
cd customer-portal
npm run build
vercel --prod
```

### **Admin Portal (Vercel)**
```bash
cd admin-portal
npm run build
vercel --prod
```

### **Backend (Railway/Heroku)**
```bash
cd backend
npm run build
# Deploy to your preferred platform
```

## 📚 API Documentation

### **Base URL**: `http://localhost:3001`

### **Endpoints**
- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get car by ID
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get all bookings
- `PUT /api/bookings/:id` - Update booking

## 🤝 Contributing

### **Development Workflow**
1. **Start from develop branch**
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes and commit**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   # Create PR to develop branch
   ```

### **Commit Message Convention**
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring

## 🔮 Future Improvements

### **Phase 2 Features**
- [ ] User authentication and profiles
- [ ] Advanced booking system
- [ ] Payment integration (Stripe/Razorpay)
- [ ] Real-time notifications
- [ ] Mobile app (React Native)

### **Phase 3 Features**
- [ ] AI-powered recommendations
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Integration with third-party services
- [ ] Advanced reporting system

## 🆘 Support

- **Documentation**: Check the `docs/` folder
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub Discussions for questions
- **Development Guide**: See `docs/development-workflow.md`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Vercel for seamless deployment
- All contributors and supporters
