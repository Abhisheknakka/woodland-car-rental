# Deploying to Vercel

This guide will walk you through deploying the Woodland Car Rental customer portal to Vercel.

## Prerequisites

1. **GitHub Account**: Make sure your code is pushed to a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Node.js**: Version 18+ (Vercel will use this for building)

## Step 1: Prepare Your Repository

Make sure your code is committed and pushed to GitHub:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 2: Deploy via Vercel Dashboard

### Option A: Import from GitHub (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Select the `customer-portal` folder as the root directory
5. Configure the following settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `customer-portal`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to your project directory:
   ```bash
   cd customer-portal
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your project

## Step 3: Environment Variables

If you have any environment variables, add them in the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add any required variables (e.g., API endpoints, etc.)

## Step 4: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Domains"
2. Add your custom domain
3. Configure DNS settings as instructed by Vercel

## Step 5: Automatic Deployments

Vercel will automatically:
- Deploy on every push to your main branch
- Create preview deployments for pull requests
- Optimize your Next.js application

## Build Configuration

The `vercel.json` file is already configured for:
- Next.js framework detection
- Proper routing
- Production environment

## Troubleshooting

### Common Issues:

1. **Build Failures**: Check the build logs in Vercel dashboard
2. **Missing Dependencies**: Ensure all dependencies are in `package.json`
3. **Environment Variables**: Verify all required env vars are set

### Build Commands:

- **Build**: `npm run build`
- **Start**: `npm start` (for production)
- **Dev**: `npm run dev` (for development)

## Performance Optimization

Vercel automatically provides:
- Global CDN
- Edge functions support
- Automatic HTTPS
- Image optimization
- Analytics and monitoring

## Next Steps After Deployment

1. Test all pages and functionality
2. Set up monitoring and analytics
3. Configure custom domain if needed
4. Set up staging environment for testing

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
