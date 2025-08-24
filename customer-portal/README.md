# 🚗 Woodland Car Rental - Customer Portal

## 🎯 Overview

This is the customer-facing website for the Woodland Car Rental System. Built with Next.js 14, TypeScript, and TailwindCSS, it provides a modern, responsive interface for customers to browse cars, make bookings, and manage their rentals.

## ✨ Features

- **Professional Homepage** - Hero section with integrated booking form
- **Car Browsing** - Search, filter, and view available vehicles
- **Responsive Design** - Mobile-first approach with beautiful UI
- **Modern Tech Stack** - Next.js 14, TypeScript, TailwindCSS
- **Interactive Elements** - FAQ accordion, testimonials, pricing banner

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development
- **Local URL**: http://localhost:3000
- **Hot Reload**: Enabled
- **TypeScript**: Strict mode enabled
- **TailwindCSS**: Custom design system

## 🏗️ Project Structure

```
customer-portal/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── Layout.tsx      # Page layout wrapper
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Homepage
│   └── cars.tsx        # Car listing page
├── styles/             # CSS and styling
│   └── globals.css     # Global styles + TailwindCSS
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Blue shades (brand colors)
- **Secondary**: Gray shades (text, borders)
- **Accent**: Orange (CTAs, highlights)
- **Success/Warning/Error**: Status colors

### Components
- **Buttons**: Primary, secondary, outline, accent variants
- **Cards**: Consistent shadow and border styling
- **Forms**: Clean input fields with focus states
- **Layout**: Responsive grid system

## 🔧 Customization

### Environment Variables
Copy `env.example` to `.env.local` and configure:
- API endpoints
- Payment gateway keys
- Google Maps API
- Contact information

### Styling
- **TailwindCSS**: Utility-first CSS framework
- **Custom CSS**: Global styles in `styles/globals.css`
- **Responsive**: Mobile-first breakpoints

## 📱 Responsive Design

- **Mobile**: 320px+ (default)
- **Tablet**: 768px+ (md:)
- **Desktop**: 1024px+ (lg:)
- **Large**: 1280px+ (xl:)

## 🚀 Deployment

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

### Docker
```bash
# Build image
docker build -t woodland-customer-portal .

# Run container
docker run -p 3000:3000 woodland-customer-portal
```

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## 📚 Next Steps

1. **Car Detail Pages** - Individual vehicle pages
2. **User Authentication** - Login/register system
3. **Booking Flow** - Complete reservation process
4. **Payment Integration** - Stripe/Razorpay setup
5. **User Dashboard** - Rental management
6. **Admin Integration** - Connect with backend APIs

## 🤝 Contributing

1. Follow the existing code style
2. Use TypeScript for all new components
3. Ensure responsive design
4. Test on multiple devices
5. Update documentation

## 📞 Support

- **Developer**: [Your Name]
- **Email**: [your.email@company.com]
- **Documentation**: See project docs folder

---

**🎉 Happy coding! Build something amazing for our customers!**
