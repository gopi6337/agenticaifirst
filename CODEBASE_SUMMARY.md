# AgenticAI First - Codebase Summary

Marketing website for AgenticAI First, an agentic AI solutions company, live at https://agenticaifirst.com. It is a static site with no backend. Page content is stored in TypeScript files.

## Technology

- **Framework:** Next.js 16 (App Router) with React 19 and TypeScript 5
- **Styling:** Tailwind CSS 4, with theme colors and animations in `src/app/globals.css`. The Typography plugin is not installed, so `prose` classes have no effect.
- **Hosting:** static export to GitHub Pages, on a custom domain set by `public/CNAME`
- **Forms:** the contact and newsletter forms both post to one Formspree endpoint
- **Analytics:** Google Analytics, loaded in `src/app/layout.tsx`

## Structure

```
src/
├── app/
│   ├── page.tsx               # Home page and services/industries JSON-LD
│   ├── layout.tsx             # Root layout, metadata, analytics
│   ├── globals.css
│   ├── blog/                  # Blog index and blog/[slug] post pages
│   ├── case-studies/          # Case study index and case-studies/[slug] pages
│   ├── legal/                 # cookies, privacy, security, terms
│   └── resources/             # community, docs, integrations
├── components/
│   ├── layout/                # Navbar, Footer
│   ├── sections/              # Home page sections
│   └── ui/                    # Button, ContactForm, cards, headings
├── hooks/useScrollReveal.ts   # Adds the scroll reveal animation
└── lib/                       # Site content (see below)
scripts/                       # Favicon, share image, and logo tools
public/                        # Images, CNAME, robots.txt, sitemap.xml, llms.txt, og/
```

## Home Page Order

Hero, Services, Industries, How It Works, How We Build Agents You Can Trust (`ProductionAgentsSection`), Why Choose Us, About, Built by Us (`OurWorkSection`), Case Studies, Blog (6 newest posts), FAQ, Contact.

`TestimonialsSection` is commented out in `page.tsx`.

## Where Content Lives

| File | Content |
|------|---------|
| `src/lib/constants.ts` | Navigation, 15 services, 8 industries, process steps, differentiators, production practices, platforms, footer links |
| `src/lib/blog.ts` | 11 blog posts; 1 is hidden with `hidden: true` |
| `src/lib/casestudies.ts` | 8 case studies |
| `src/lib/resources.ts` | 9 docs guides and 10 integration categories |
| `src/components/sections/FAQSection.tsx` | 12 FAQ entries, also output as JSON-LD |
| `public/llms.txt` | Summary of the site for AI crawlers; keep it in step with the site |
| `public/sitemap.xml` | Written by hand; add new pages here |

The hero's "AI Solutions" stat in `HeroSection.tsx` and the "platforms across categories" count in `resources/integrations/page.tsx` are hard-coded. Update them when services or integrations change.

## Adding a Blog Post

1. Add the post at the top of `BLOG_POSTS` in `src/lib/blog.ts`. The list and home page show posts in array order, not by date.
2. Add a share image entry in `scripts/make-og-image.mjs`, then run `node scripts/make-og-image.mjs`. It rebuilds every image, so use `git restore` on any existing images you don't mean to change.
3. Add the post to `public/sitemap.xml` and `public/llms.txt`.

Post content supports `## ` headings, `- ` bullets, `**bold**`, and lines that are entirely bold, which render as subheadings. Links and tables are not supported.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Static build to `out/` |
| `npm run lint` | ESLint check |

## Deployment

Each push to `master` runs `.github/workflows/deploy.yml`, which builds with Node.js 20 and deploys `out/` to GitHub Pages. There is no staging site, so a push goes straight to production.
