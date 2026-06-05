# Ajay-Chaurasiya-Portfolio

A modern, production-ready Full Stack Developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Dark theme with premium animations
- Fully responsive (desktop, tablet, mobile)
- SEO optimized with metadata, sitemap, and structured data
- Smooth scrolling navigation
- Project detail modals
- Animated skill progress indicators
- Contact form with mailto integration
- Vercel deployment ready

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages & layout
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Skills, Projects, etc.
│   └── ui/               # Reusable UI components
├── data/                 # Portfolio content data
├── lib/                  # Utility functions
└── types/                # TypeScript type definitions
```

## Customization

Edit `src/data/portfolio.ts` to update:

- Personal information
- Skills and proficiency levels
- Projects and descriptions
- Work experience
- Social links and email

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy (no environment variables required for static preview; add Resend keys for contact form)

## License

MIT
