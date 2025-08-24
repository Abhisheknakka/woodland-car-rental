# 🎓 Woodland Coaching CRM Portal

A comprehensive Customer Relationship Management (CRM) portal designed specifically for coaching businesses. This platform enables students to discover, enroll, and manage courses while providing administrators with powerful tools to manage students, courses, enrollments, and payments.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
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

The Woodland Coaching CRM Portal is a modern, scalable platform that streamlines the entire coaching business workflow. Built with a microservices architecture, it provides a seamless experience for both students and administrators.

**Key Benefits:**
- **For Students**: Easy course discovery, streamlined enrollment, secure payments, and comprehensive learning management
- **For Administrators**: Centralized student management, course administration, enrollment tracking, and financial oversight
- **For Business**: Increased operational efficiency, better student engagement, and comprehensive business analytics

## ✨ Features

### 👨‍🎓 Student Features
- **User Registration & Authentication**
  - Secure signup/login with email verification
  - Social media authentication (Google, Facebook)
  - Password reset and account recovery
  
- **Course Management**
  - Browse course catalog with advanced filtering
  - Course previews and detailed descriptions
  - Enrollment in courses with instant confirmation
  
- **Payment & Billing**
  - Secure payment processing via Stripe/Razorpay
  - Multiple payment methods (credit card, UPI, net banking)
  - Invoice generation and payment history
  
- **Learning Dashboard**
  - Course progress tracking
  - Learning materials access
  - Assignment submissions
  - Course completion certificates

### 👨‍💼 Admin Features
- **Student Management**
  - Complete student profiles and information
  - Enrollment status and course history
  - Communication tools and notifications
  
- **Course Administration**
  - Create and edit course content
  - Manage course schedules and availability
  - Upload learning materials and resources
  
- **Business Operations**
  - Enrollment analytics and reporting
  - Payment tracking and financial reports
  - Student performance metrics
  - Revenue analytics and forecasting

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **State Management**: Zustand/Redux Toolkit
- **UI Components**: Headless UI + Radix UI
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js (with NestJS option)
- **API**: RESTful + GraphQL (optional)
- **Validation**: Joi/Zod
- **File Upload**: Multer + AWS S3

### Database
- **Primary**: PostgreSQL 15+
- **ORM**: Prisma
- **Migrations**: Prisma Migrate
- **Seeding**: Prisma Seed

### Authentication & Security
- **JWT**: JSON Web Tokens with refresh tokens
- **Password Hashing**: bcrypt
- **Rate Limiting**: Express Rate Limit
- **CORS**: Configurable CORS policies
- **Helmet**: Security headers

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Process Management**: PM2
- **Reverse Proxy**: Nginx
- **SSL**: Let's Encrypt

### Payment Integration
- **Primary**: Stripe
- **Alternative**: Razorpay
- **Webhooks**: Secure payment confirmation

## 📁 Repository Structure

```
woodland-car-rental/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App Router pages and layouts
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utility functions and configurations
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   ├── styles/              # Global styles and Tailwind config
│   └── public/              # Static assets
│
├── backend/                  # Node.js backend application
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── middleware/      # Custom middleware
│   │   ├── models/          # Data models and schemas
│   │   ├── routes/          # API route definitions
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Helper functions
│   │   └── config/          # Configuration files
│   ├── prisma/              # Database schema and migrations
│   └── tests/               # Test files
│
├── infra/                    # Infrastructure and deployment
│   ├── docker/              # Docker configurations
│   ├── nginx/               # Nginx configuration
│   ├── scripts/             # Deployment and utility scripts
│   └── docker-compose.yml   # Local development setup
│
├── docs/                     # Documentation
│   ├── api/                 # API documentation
│   ├── deployment/          # Deployment guides
│   └── contributing/        # Contribution guidelines
│
├── .github/                  # GitHub workflows and templates
├── .gitignore               # Git ignore rules
├── docker-compose.yml       # Main Docker Compose file
├── package.json             # Root package.json for scripts
└── README.md                # This file
```

## 📋 Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Docker** & **Docker Compose** ([Download](https://www.docker.com/))
- **Git** ([Download](https://git-scm.com/))
- **PostgreSQL** 15+ (optional, Docker will handle this)
- **Code Editor** (VS Code recommended)

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/woodland-coaching-crm.git
cd woodland-coaching-crm
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 3. Environment Setup

Copy the environment template files and configure them:

```bash
# Frontend
cp frontend/.env.example frontend/.env.local

# Backend
cp backend/.env.example backend/.env
```

### 4. Database Setup

```bash
# Start PostgreSQL with Docker
docker-compose up -d postgres

# Run database migrations
cd backend
npx prisma migrate dev
npx prisma generate
npx prisma db seed
```

### 5. Start Development Environment

```bash
# Start all services
docker-compose up -d

# Or start individually
docker-compose up -d postgres redis
npm run dev:frontend
npm run dev:backend
```

## 🔧 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_...
```

### Backend (.env)
```env
# Server
PORT=3001
NODE_ENV=development

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/woodland_crm"

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-refresh-secret-key

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Razorpay
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=your-razorpay-secret

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🏃‍♂️ Running Locally

### Quick Start (Docker)
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Start
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev

# Terminal 3: Database (if not using Docker)
docker-compose up -d postgres
```

### Access Points
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Database**: localhost:5432
- **Redis**: localhost:6379

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the Application**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **Environment Variables**
   - Set production API URL
   - Configure Stripe/Razorpay production keys
   - Set NODE_ENV=production

### Backend Deployment (DigitalOcean/AWS)

1. **Build Docker Image**
   ```bash
   cd backend
   docker build -t woodland-crm-backend .
   ```

2. **Deploy with Docker Compose**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

3. **Production Environment**
   - Use production database
   - Configure SSL certificates
   - Set up monitoring and logging

### Infrastructure Setup

```bash
# Production Docker Compose
cd infra
docker-compose -f docker-compose.prod.yml up -d

# SSL with Let's Encrypt
sudo certbot --nginx -d yourdomain.com
```

## 📚 API Documentation

### Authentication Endpoints
```http
POST /api/auth/register     # User registration
POST /api/auth/login        # User login
POST /api/auth/refresh      # Refresh JWT token
POST /api/auth/logout       # User logout
```

### Course Endpoints
```http
GET    /api/courses         # List all courses
GET    /api/courses/:id     # Get course details
POST   /api/courses         # Create course (admin)
PUT    /api/courses/:id     # Update course (admin)
DELETE /api/courses/:id     # Delete course (admin)
```

### Student Endpoints
```http
GET    /api/students        # List students (admin)
GET    /api/students/:id    # Get student profile
PUT    /api/students/:id    # Update student (admin)
POST   /api/enrollments     # Enroll in course
GET    /api/enrollments     # Get user enrollments
```

### Payment Endpoints
```http
POST   /api/payments/create # Create payment intent
POST   /api/payments/webhook # Payment webhook
GET    /api/payments        # Payment history
```

## 🤝 Contributing

We welcome contributions from developers! Please read our contribution guidelines before submitting pull requests.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   npm run test
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Standards

- **Frontend**: Follow Next.js best practices and use TypeScript
- **Backend**: Use ES6+ features and follow Express.js conventions
- **Database**: Use Prisma migrations for schema changes
- **Testing**: Maintain >80% test coverage
- **Documentation**: Update API docs for new endpoints

### Team Structure

- **Frontend Developer**: Focus on UI/UX, component library, and user experience
- **Backend Developer**: Focus on API design, database optimization, and business logic

## 🔮 Future Improvements

### Phase 2 Features
- **Analytics Dashboard**
  - Student performance metrics
  - Revenue analytics and forecasting
  - Course popularity insights
  
- **Communication System**
  - In-app messaging
  - Email notifications
  - SMS reminders
  
- **Advanced Learning Features**
  - Video streaming integration
  - Interactive quizzes
  - Progress tracking
  
### Phase 3 Features
- **Mobile Applications**
  - React Native mobile app
  - Push notifications
  - Offline learning support
  
- **AI Integration**
  - Personalized course recommendations
  - Automated grading
  - Chatbot support
  
- **Advanced Admin Tools**
  - Bulk operations
  - Advanced reporting
  - Integration APIs

## 🆘 Support

### Getting Help
- **Documentation**: Check the `/docs` folder
- **Issues**: Create a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Email**: support@woodlandcoaching.com

### Common Issues
- **Database Connection**: Ensure PostgreSQL is running and credentials are correct
- **Port Conflicts**: Check if ports 3000, 3001, 5432 are available
- **Docker Issues**: Restart Docker service and rebuild containers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Next.js, Express.js, and PostgreSQL
- Payment processing by Stripe and Razorpay
- UI components from Headless UI and Radix UI
- Database management with Prisma ORM

---

**Made with ❤️ by the Woodland Coaching Team**

*For questions or support, please reach out to our development team.*
