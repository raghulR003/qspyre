# QSpyre Landing Page

A modern, responsive landing page for QSpyre - the AI/ML benchmark creation and evaluation platform.

## About QSpyre

QSpyre is a comprehensive platform for designing, sharing, and evaluating benchmarks across any AI/ML domain. From LLMs and vision models to multi-modal systems and custom pipelines, QSpyre provides researchers, developers, and organizations with the tools to quantitatively evaluate AI/ML models from a unified, bird's-eye perspective.

## Project Overview

This landing page is built with:
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive design** for all devices
- **SEO optimized** with proper meta tags and structured data

## Recent Updates ✨

### Mobile Responsiveness & Performance Optimization
- ✅ **Complete mobile responsiveness** across all sections and components
- ✅ **Dark mode support** with system preference detection
- ✅ **Performance-aware animations** that adapt to device capabilities
- ✅ **Cross-browser compatibility** with proper fallbacks
- ✅ **Accessibility improvements** with proper focus states and reduced motion support
- ✅ **Fixed ThemeProvider context issues** by moving Header/Footer to root layout

### Key Features
- 📱 **Mobile-First Design**: Responsive breakpoints (sm, md, lg, xl) throughout
- 🎨 **Dark/Light Theme**: System preference detection with manual toggle
- ⚡ **Performance Optimized**: Hardware acceleration, reduced animations on slow devices
- 🔍 **SEO Ready**: Complete meta tags, structured data, and semantic HTML
- ♿ **Accessible**: WCAG guidelines, keyboard navigation, screen reader support
- 🚀 **Fast Loading**: Optimized images, CSS, and JavaScript bundles

### Testing Checklist
- [x] Desktop responsiveness (1920px, 1440px, 1024px)
- [x] Tablet responsiveness (768px, 834px)
- [x] Mobile responsiveness (375px, 414px, 390px)
- [x] Dark/Light theme switching
- [x] Interactive demo functionality
- [x] Navigation and routing
- [x] Performance on slower devices
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse performance audit
- [ ] Real device testing

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Modern Hero Section** - Compelling introduction to QSpyre
- **Feature Highlights** - Key benefits and capabilities
- **How It Works** - Step-by-step process explanation
- **Use Cases** - Comprehensive coverage of AI/ML evaluation scenarios
- **Community Section** - Call-to-action for engagement
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **SEO Optimized** - Proper meta tags and semantic HTML

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
└── components/
    ├── Header.tsx          # Navigation header
    └── Footer.tsx          # Site footer
```

## Customization

The landing page follows QSpyre's brand guidelines:
- Professional yet approachable color scheme
- Clean, readable typography
- Consistent spacing and grid systems
- Focus on quantitative metrics and bird's-eye perspective

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

This project is part of the QSpyre ecosystem. For contributing guidelines and development setup, please refer to the main QSpyre repository.

## License

Open source under MIT license.

## Development Tools 🛠️

### Performance Monitoring
The project includes performance monitoring utilities in `src/utils/performance.ts`:

```typescript
import { measurePerformance, logPerformanceMetrics } from '@/utils/performance';

// Measure Core Web Vitals
const metrics = await measurePerformance();
logPerformanceMetrics(metrics);
```

This helps track:
- **TTFB** (Time to First Byte)
- **FCP** (First Contentful Paint)
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)

### Performance Optimization Hook
Use the `usePerformanceOptimization` hook for adaptive UI:

```typescript
import { usePerformanceOptimization } from '@/components/hooks/usePerformanceOptimization';

const { isSlowDevice, prefersReducedMotion, isMobile } = usePerformanceOptimization();
```

This automatically:
- Detects slow devices and reduces animation complexity
- Respects user's reduced motion preferences
- Optimizes touch interactions on mobile devices

## Tech Stack

- **Next.js 14+**: React framework for production
- **TypeScript**: Static typing for JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vercel Analytics**: Real-time performance monitoring
- **Lighthouse**: Automated performance auditing
