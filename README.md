# LoveBytes Landing Page

A production-ready Next.js 14 application for LoveBeats - a dating platform that connects people through shared entertainment preferences.

## 🚀 Features

- **Next.js 14** with App Router and static export support
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Radix UI** components for accessibility
- **Lucide React** icons
- **Production-ready** with SEO optimization
- **Static export** compatible for easy deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in bundler

## 📦 Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🏃‍♂️ Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Build

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will create an optimized production build in the `out` directory.

## 🚀 Deployment

The application is configured for static export and can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `out` folder
- **GitHub Pages**: Upload the `out` folder contents
- **AWS S3**: Upload the `out` folder to an S3 bucket

## 📁 Project Structure

```
├── pages/                 # Next.js pages
│   ├── _app.tsx          # App component
│   ├── _document.tsx     # Document component
│   └── index.tsx         # Home page
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── figma/       # Figma-generated components
│   │   └── *.tsx        # Page-specific components
│   └── styles/          # Global styles
├── public/              # Static assets
└── ...config files
```

## 🎨 Styling

The application uses Tailwind CSS with a custom design system. Key features:

- Custom color palette with CSS variables
- Dark mode support
- Responsive design
- Custom animations
- Component-based styling with class-variance-authority

## 🔧 Configuration

- **next.config.js**: Next.js configuration with static export
- **tailwind.config.js**: Tailwind CSS configuration
- **tsconfig.json**: TypeScript configuration
- **postcss.config.js**: PostCSS configuration

## 📱 Components

The application includes a comprehensive set of UI components:

- **Hero**: Landing page hero section
- **Features**: Feature showcase
- **PhoneMockup**: App preview section
- **Testimonials**: User testimonials
- **Footer**: Site footer
- **UI Components**: Button, Dialog, Select, and more from Radix UI

## 🌟 Key Features

- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Accessibility**: WCAG compliant with Radix UI
- **Performance**: Optimized images and code splitting
- **Type Safety**: Full TypeScript coverage
- **Modern Stack**: Latest Next.js 14 features

## 📄 License

This project is private and proprietary.