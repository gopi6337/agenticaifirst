# AgenticAI First - Codebase Summary

## Project Overview

A **single-page marketing website** for "AgenticAI First" — an agentic AI solutions company. Built with **Next.js 16 + TypeScript + Tailwind CSS 4**, deployed as a static site to **GitHub Pages**.

---

## Technology Stack

- **Framework**: Next.js 16.1.6 (React 19.2.3)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with PostCSS
- **Deployment**: Static export (GitHub Pages)
- **Linting**: ESLint 9
- **Total LOC**: ~414 lines of TypeScript/React code

---

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Tailwind theme + custom animations
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with mobile hamburger menu
│   │   └── Footer.tsx      # Multi-column footer with social links
│   ├── sections/
│   │   ├── HeroSection.tsx          # Hero banner + stats
│   │   ├── ServicesSection.tsx      # 12 AI services grid
│   │   ├── HowItWorksSection.tsx    # 4-step process
│   │   ├── WhyChooseUsSection.tsx   # 4 differentiators
│   │   ├── TestimonialsSection.tsx  # 3 customer testimonials
│   │   └── CTASection.tsx           # Contact form
│   └── ui/
│       ├── Button.tsx           # Polymorphic button/link component
│       ├── ServiceCard.tsx      # Service grid cards with icons
│       ├── StepCard.tsx         # Process step cards
│       ├── TestimonialCard.tsx  # Testimonial quote cards
│       ├── SectionHeading.tsx   # Section title/label/description
│       ├── GradientText.tsx     # Gradient text wrapper
│       └── ContactForm.tsx      # Lead capture form
├── hooks/
│   └── useScrollReveal.ts  # Intersection Observer for scroll animations
└── lib/
    └── constants.ts        # All content data (services, testimonials, etc.)
```

---

## Page Sections (Single Page, Anchor Navigation)

| Section | Component | Content |
|---------|-----------|---------|
| Hero | `HeroSection` | "Build Smarter with Agentic AI" headline + 2 CTAs + 4 stats |
| Services | `ServicesSection` | Grid of 12 AI service offerings |
| How It Works | `HowItWorksSection` | 4-step methodology: Discovery → Design → Deploy → Optimize |
| Why Choose Us | `WhyChooseUsSection` | 4 differentiators: Agentic-First, Enterprise Security, Rapid Deployment, Measurable ROI |
| Testimonials | `TestimonialsSection` | 3 enterprise customer testimonials |
| CTA/Contact | `CTASection` | Lead generation form (name, email, company, message) |

---

## 12 Services Offered

All services are defined in `src/lib/constants.ts`:

1. Full-Stack Development
2. AI Agent Development
3. Chatbot Solutions
4. Process Automation
5. AI Consulting
6. Data Analytics & BI
7. NLP Solutions
8. Computer Vision
9. MLOps & Infrastructure
10. AI Integration Services
11. Custom Model Training
12. AI Security & Compliance

---

## Design & Styling

- **Dark theme** with gradient accents (purple → blue → pink)
- **Custom color palette**: violet-deep, purple-vivid, blue-electric, cyan-bright, pink-hot, fuchsia-neon
- **Gradient borders** and **card glow** hover effects
- **Scroll-reveal animations** via Intersection Observer hook
- **Floating blob** decorative background elements
- **Mobile-first** responsive design with `md:` and `lg:` breakpoints

### Custom CSS Classes (globals.css)

- `.scroll-reveal` / `.scroll-reveal.revealed` — Scroll animation states
- `.animate-float`, `.animate-float-delayed`, `.animate-float-slow` — Floating animations
- `.gradient-text` — Gradient text effect
- `.card-glow` — Card hover glow + lift effect
- `.gradient-border` — Gradient border on cards
- `.animate-pulse-glow` — Pulsing button glow
- `.step-line` — Connecting line between process steps

---

## Key Patterns & Architecture

### Content Management
All page content is centralized in `src/lib/constants.ts`:
- `NAV_LINKS` — 5 navigation items
- `SERVICES` — 12 service offerings with icons
- `STEPS` — 4-step methodology
- `DIFFERENTIATORS` — 4 key value propositions
- `TESTIMONIALS` — 3 customer quotes
- `FOOTER_LINKS` — 4 footer link categories

### Polymorphic Button Component
The `Button` component renders as either `<a>` (link) or `<button>` based on props, with 3 variants (primary, secondary, outline) and 3 sizes (sm, md, lg).

### Scroll-Triggered Animations
The `useScrollReveal` hook uses Intersection Observer to animate elements:
- Elements start with `.scroll-reveal` class (opacity: 0, translateY: 30px)
- When 10% visible, `.revealed` class is added (animates to opacity: 1, translateY: 0)

### Form State Management
`ContactForm` uses React state for submission handling, success state with confirmation message, and form reset.

---

## Deployment Configuration

### Next.js (`next.config.ts`)
- `output: "export"` — Static site generation
- `basePath: "/agenticaifirst"` — GitHub Pages subpath
- `images: { unoptimized: true }` — Disable image optimization for static export

### GitHub Actions (`.github/workflows/deploy.yml`)
- Triggers on push to `master` branch
- Node.js 20 with npm cache
- Build → Upload artifact (`out/`) → Deploy to GitHub Pages

### SEO Metadata (`layout.tsx`)
- Title: "AgenticAI First - Everything AI, Under One Roof"
- Open Graph meta tags for social sharing
- Keywords: AI, Agentic AI, Artificial Intelligence, Automation, etc.
- Base URL: https://agenticaifirst.com

---

## Build Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Static build to `/out` |
| `npm run start` | Production server |
| `npm run lint` | ESLint check |

---

## Git History (Recent)

| Commit | Description |
|--------|-------------|
| `26d4197` | Add basePath for GitHub Pages subpath deployment |
| `19dc867` | Configure static export and GitHub Pages deployment |
| `ba3b1be` | Rebrand to AgenticAI First, fix card issues, add 12 services |
| `4b88231` | WIP: Attempt card content centering and improve text visibility |
| `af466b5` | Fix gradient-border cards showing empty content |

---

*Generated on: 2026-02-09*
