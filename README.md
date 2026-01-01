# Orbit Tech Solutions - IT Firm Website

## Selected Option
**IT (Information Technology)**
Single-page static website for an IT consulting firm.

## Project Description
A professional, modern single-page static website for an IT consulting firm. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, responsive design, and enterprise-grade user experience. The website showcases comprehensive IT services, company expertise, and client success stories through an elegant, minimalist design.

## Steps to Run Project

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/orbit-tech/orbit-tech.git

# Navigate to project directory
cd orbit-tech

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build the project
npm run build

# The build will be created in the `dist` folder
```

## Libraries or Frameworks Used

### Frontend Framework
- **React 18.3.1**: Component-based architecture with hooks
- **TypeScript**: Type safety and enhanced developer experience
- **Vite 5.4.19**: Fast build tool and development server with HMR

### UI Component Libraries
- **Radix UI**: Accessible component primitives for modals, forms, and navigation
  - `@radix-ui/react-dialog`: Modal and popup components
  - `@radix-ui/react-accordion`: Collapsible content sections
  - `@radix-ui/react-dropdown-menu`: Navigation dropdowns
  - `@radix-ui/react-menubar`: Responsive navigation menu
  - `@radix-ui/react-navigation-menu`: Mobile navigation
  - `@radix-ui/react-toast`: Notification system
  - `@radix-ui/react-select`: Form select inputs
  - `@radix-ui/react-tabs`: Tab navigation
  - `@radix-ui/react-tooltip`: Hover tooltips

### Styling & CSS
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Tailwind CSS Animate**: Animation utilities for smooth transitions
- **Lucide React 0.462.0**: Consistent icon system
- **Class Variance Authority**: Type-safe CSS class management

### Icons & Assets
- **Lucide React**: Professional icon library
- **Unsplash**: High-quality placeholder images

### Development Tools
- **ESLint 9.32.0**: Code quality and consistency
- **TypeScript**: Static type checking
- **Prettier**: Code formatting

## Project Structure

```
orbit-tech/
├── public/                    # Static assets
│   ├── index.html               # Main HTML entry point
│   ├── robots.txt               # Search engine configuration
│   └── favicon.ico              # Site icon
├── src/                      # Source code
│   ├── components/               # React components
│   │   ├── Header.tsx            # Navigation and branding
│   │   ├── Hero.tsx              # Hero section with animations
│   │   ├── About.tsx              # Company information
│   │   ├── Services.tsx            # Services showcase
│   │   ├── WhyChooseUs.tsx        # Value propositions
│   │   ├── Process.tsx             # Workflow steps
│   │   ├── Portfolio.tsx           # Case studies and projects
│   │   ├── Testimonials.tsx        # Client testimonials
│   │   ├── Contact.tsx             # Contact form and information
│   │   └── Footer.tsx             # Site footer
│   ├── main.tsx                  # Application entry point
│   ├── index.css                  # Global styles
│   ├── vite-env.d.ts              # Vite type definitions
│   └── hooks/                    # Custom React hooks
├── package.json               # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts             # Tailwind configuration
├── vite.config.ts               # Build configuration
└── README.md                   # This documentation
```

## Deployment

### Build Project
```bash
# Create production build
npm run build

# The build will be created in the `dist` folder
```

### Deployment Options

#### Netlify (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

#### GitHub Pages
```bash
# Build and deploy to GitHub Pages
npm run build

# Push dist folder to gh-pages branch
git subtree push --prefix dist origin gh-pages
```

