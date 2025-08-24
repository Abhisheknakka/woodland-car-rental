# Development Workflow

This document outlines the development workflow for the Woodland Car Rental System.

## 🌿 Branch Strategy

### **Main Branches**
- **`main`** - Production-ready code, stable releases
- **`develop`** - Development branch, integration of features

### **Feature Branches**
- **`feature/feature-name`** - New features and enhancements
- **`bugfix/bug-description`** - Bug fixes
- **`hotfix/urgent-fix`** - Critical production fixes

## 🚀 Development Workflow

### **Starting Development**
```bash
# Always start from develop branch
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/new-feature
```

### **Daily Development**
```bash
# Start your day
git checkout develop
git pull origin develop

# Work on your feature
git checkout feature/your-feature
# ... make changes ...

# Commit your work
git add .
git commit -m "feat: add new feature description"

# Push feature branch
git push origin feature/your-feature
```

### **Completing Features**
```bash
# Update develop branch
git checkout develop
git pull origin develop

# Merge feature branch
git checkout feature/your-feature
git rebase develop
git checkout develop
git merge feature/your-feature

# Push to develop
git push origin develop

# Delete feature branch
git branch -d feature/your-feature
git push origin --delete feature/your-feature
```

### **Releasing to Production**
```bash
# From develop branch
git checkout develop
git pull origin develop

# Merge to main
git checkout main
git merge develop
git push origin main

# Tag the release
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## 📝 Commit Message Convention

Use conventional commit messages:

- **`feat:`** - New features
- **`fix:`** - Bug fixes
- **`docs:`** - Documentation changes
- **`style:`** - Code style changes (formatting, etc.)
- **`refactor:`** - Code refactoring
- **`test:`** - Adding or updating tests
- **`chore:`** - Maintenance tasks

### **Examples**
```bash
git commit -m "feat: add user authentication system"
git commit -m "fix: resolve booking form validation issue"
git commit -m "docs: update API documentation"
git commit -m "style: format code with prettier"
```

## 🔄 Pull Request Process

### **Creating Pull Requests**
1. Push your feature branch to GitHub
2. Create a Pull Request from `feature/branch` to `develop`
3. Add description of changes
4. Request code review
5. Address review comments
6. Merge when approved

### **Pull Request Template**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Local testing completed
- [ ] All tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
```

## 🧪 Testing Strategy

### **Before Committing**
- Run type checking: `npm run type-check`
- Run linting: `npm run lint`
- Test locally: `npm run dev`
- Build test: `npm run build`

### **Before Merging to Develop**
- All tests pass
- Code review completed
- No merge conflicts
- Feature tested locally

## 🚀 Deployment Strategy

### **Development Environment**
- **Branch**: `develop`
- **Deployment**: Automatic on push to develop
- **URL**: `dev-woodland-car-rental.vercel.app`

### **Production Environment**
- **Branch**: `main`
- **Deployment**: Manual or automatic on merge to main
- **URL**: `woodland-car-rental.vercel.app`

## 📋 Development Setup

### **Required Tools**
- Node.js 18+
- Git
- VS Code (recommended)
- GitHub CLI (optional)

### **Environment Setup**
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

## 🆘 Troubleshooting

### **Common Issues**
1. **Merge Conflicts**: Resolve conflicts before merging
2. **Build Failures**: Check TypeScript errors and fix
3. **Dependency Issues**: Delete node_modules and reinstall

### **Getting Help**
- Check this documentation
- Review GitHub issues
- Ask team members for code review
- Check Vercel deployment logs

## 📚 Resources

- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
