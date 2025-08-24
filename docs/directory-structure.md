# 📁 Woodland Car Rental System - Directory Structure

## 🎯 **CLEAR DIRECTORY NAMING** - No More Confusion!

We've renamed the directories to make it crystal clear what each one does:

```
woodland-car-rental/
├── 🚗 customer-portal/          # 👥 CUSTOMER-FACING WEBSITE
│   ├── pages/                   # Next.js pages (routes)
│   ├── components/              # Reusable UI components
│   ├── public/                  # Static assets (images, icons)
│   ├── styles/                  # CSS and TailwindCSS
│   └── package.json             # Customer portal dependencies
│
├── 🏢 admin-portal/             # 👨‍💼 STAFF CRM SYSTEM
│   ├── pages/                   # Admin page components
│   ├── components/              # Admin UI components
│   └── package.json             # Admin portal dependencies
│
├── ⚙️ backend/                  # 🔌 API SERVER
│   ├── src/
│   │   ├── routes/              # API endpoint definitions
│   │   ├── controllers/         # Business logic handlers
│   │   ├── models/              # Data models
│   │   └── index.js             # Server entry point
│   ├── package.json             # Backend dependencies
│   └── env.example              # Environment variables template
│
├── 🗄️ db/                       # 💾 DATABASE SETUP
│   ├── schema.sql               # PostgreSQL table definitions
│   ├── migrations/              # Database change files
│   └── seeds/                   # Sample data files
│
├── 🐳 infra/                    # 🚀 INFRASTRUCTURE
│   └── docker-compose.yml       # Docker services configuration
│
├── 📚 docs/                     # 📖 DOCUMENTATION
│   ├── setup-guide.md           # Development setup guide
│   ├── requirements.md           # Project requirements
│   └── directory-structure.md   # This file
│
├── 🔧 scripts/                  # 🛠️ AUTOMATION SCRIPTS
│   ├── setup.bat                # Windows setup script
│   └── setup.sh                 # Unix/Linux setup script
│
├── .cursorrules                  # 🤖 AI coding assistant rules
├── package.json                  # Root project management
└── README.md                     # Project overview
```

## 🎨 **Customer Portal** (`customer-portal/`)

**Purpose**: The public-facing website where customers browse cars, make bookings, and manage their rentals.

**What You'll Work On**:
- ✅ Homepage with hero section and features
- ✅ Car browsing page with filters and search
- ✅ Car detail pages
- ✅ User registration and login
- ✅ Booking forms and payment
- ✅ User dashboard for managing rentals
- ✅ Responsive design for mobile and desktop

**Tech Stack**:
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- React Hook Form + Zod validation
- Lucide React icons

**Current Status**: 
- ✅ Basic structure and components created
- ✅ Homepage with hero, features, and CTA
- ✅ Cars listing page with filters
- 🔄 Next: Car detail pages, user authentication, booking system

## 🏢 **Admin Portal** (`admin-portal/`)

**Purpose**: Internal CRM system for staff to manage fleet, customers, bookings, and business operations.

**What Staff Can Do**:
- Manage car inventory and availability
- Process customer bookings and payments
- View customer information and rental history
- Generate reports and analytics
- Manage locations and pricing
- Handle customer support tickets

**Tech Stack**:
- React + Vite
- TypeScript
- TailwindCSS
- React Router DOM
- Recharts for analytics
- React Hook Form + Zod validation

## ⚙️ **Backend API** (`backend/`)

**Purpose**: RESTful API server that handles all business logic, database operations, and integrations.

**Key Features**:
- User authentication and authorization
- Car management and availability
- Booking system and payment processing
- File uploads (car images, documents)
- Email notifications
- Payment gateway integration (Stripe/Razorpay)

**Tech Stack**:
- Node.js + Express.js
- Prisma ORM + PostgreSQL
- JWT authentication
- Redis for caching
- Multer for file uploads
- Nodemailer for emails

## 🗄️ **Database** (`db/`)

**Purpose**: Database schema, migrations, and sample data for the car rental system.

**Tables**:
- `users` - Customer and staff accounts
- `cars` - Vehicle inventory and details
- `bookings` - Rental reservations
- `payments` - Transaction records
- `car_maintenance` - Service history
- `user_documents` - License and ID verification
- `reviews` - Customer feedback

## 🐳 **Infrastructure** (`infra/`)

**Purpose**: Docker configuration for local development and deployment.

**Services**:
- PostgreSQL 15 - Main database
- Redis 7 - Caching and sessions
- Backend API - Express.js server
- Customer Portal - Next.js website
- Admin Portal - React CRM
- Nginx - Reverse proxy (optional)

## 📚 **Documentation** (`docs/`)

**Purpose**: Complete project documentation for developers and stakeholders.

**Files**:
- `setup-guide.md` - Step-by-step development setup
- `requirements.md` - Detailed feature specifications
- `project-overview.md` - High-level project status
- `directory-structure.md` - This file

## 🔧 **Scripts** (`scripts/`)

**Purpose**: Automated setup and development tools.

**Scripts**:
- `setup.bat` - Windows development environment setup
- `setup.sh` - Unix/Linux development environment setup

---

## 🚀 **Getting Started with Customer Portal Development**

Since you're working on the customer-facing frontend:

1. **Navigate to the customer portal**:
   ```bash
   cd customer-portal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Access your work**: http://localhost:3000

5. **What to work on next**:
   - Car detail pages (`/cars/[id]`)
   - User authentication pages (`/login`, `/register`)
   - Booking flow and forms
   - User dashboard
   - Payment integration

## 🎯 **Key Benefits of This Structure**

✅ **No Confusion**: Clear names for each portal
✅ **Easy Navigation**: Know exactly where to find things
✅ **Team Clarity**: Frontend developers know they work in `customer-portal/`
✅ **Scalable**: Easy to add more services later
✅ **Professional**: Industry-standard naming conventions

---

**🎉 You're all set to work on the customer portal! The directory structure is now crystal clear.**
