# Thenmozhi Korai Mats

> Premium handwoven Korai grass mats from Tamil Nadu — a modern landing page for a timeless craft.

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2016-000000?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat&logo=framer&logoColor=white)](https://framer.com/motion)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat)](LICENSE)

---

## ✨ Overview

Thenmozhi Korai Mats is a premium brand landing page that showcases handwoven, eco-friendly Korai grass mats crafted by skilled artisans in Tamil Nadu. This project transforms a traditional craft into a modern digital experience — blending cultural heritage with contemporary web design.

The site is fully static (pre-rendered), accessible, responsive, and optimized for performance.

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | Static site generation & routing |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first styling with custom design tokens |
| **Framer Motion** | Page transitions, scroll animations, micro-interactions |
| **Lenis** | Smooth scrolling |
| **Lucide React** | Icon library |
| **clsx + tailwind-merge** | Conditional class merging |

## 🎨 Design System

| Token | Value |
|---|---|
| Primary | `#1F4D36` (forest green) |
| Secondary | `#D9C6A3` (warm beige) |
| Accent | `#C68A3A` (gold) |
| Background | `#FAF8F3` (cream) |
| Font (display) | Cormorant Garamond |
| Font (headings) | Playfair Display |
| Font (body) | Inter |

## ✨ Features

- **Hero section** — split-screen layout with animated statistics and scroll indicator
- **Trust badges** — glass-morphism card highlighting 6 key selling points
- **Heritage story** — timeline with scroll-triggered animations
- **How It's Made** — 5-step process with numbered cards
- **Product collection** — modal-based product viewer with color swatches and WhatsApp inquiry
- **Gallery** — masonry layout with lightbox preview (Escape key support)
- **Testimonials** — review carousel with rating stars
- **Sustainability** — eco-friendly messaging with animated counters
- **FAQ** — accordion with search and motion-reduce support
- **Dark mode** — persisted toggle with system preference detection
- **Language switcher** — toggles `<html lang>` attribute
- **Floating WhatsApp** — fixed bottom-right button with pre-filled inquiry message
- **Floating particles** — canvas-based leaf particle animation
- **404 & error pages** — custom `not-found.tsx` and `error.tsx`
- **JSON-LD structured data** — Store schema for SEO
- **Skip-to-content link** — keyboard navigation support
- **Full ARIA** — roles, labels, expanded states, and focus management
- **PWA manifest** — `manifest.json` with theme-color `#1F4D36`

## 🛠️ Getting Started

```bash
git clone <repo-url>
cd thenmozhi-korai-mats
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 + custom design tokens
│   ├── layout.tsx           # Root layout, fonts, skip-link, theme-color
│   ├── page.tsx             # Main landing page (all sections)
│   ├── not-found.tsx        # Custom 404 page
│   └── error.tsx            # Error boundary
├── components/
│   ├── Navbar.tsx           # Glass nav, scroll detection, mobile menu
│   ├── Hero.tsx             # Split-screen hero with stats
│   ├── TrustBadges.tsx      # 6 badges in glass card
│   ├── WhyChoose.tsx        # Benefits section
│   ├── HeritageStory.tsx    # Timeline section
│   ├── HowItsMade.tsx       # Process steps
│   ├── ArtisanSpotlight.tsx # Artisan feature
│   ├── ProductCollection.tsx# Product grid + modal + WhatsApp inquiry
│   ├── Gallery.tsx          # Masonry + lightbox
│   ├── Testimonials.tsx     # Reviews carousel
│   ├── Sustainability.tsx   # Eco-friendly messaging
│   ├── FAQ.tsx              # Searchable accordion
│   ├── CTABanner.tsx        # Call-to-action banner
│   ├── Footer.tsx           # Newsletter, links, WhatsApp CTA
│   ├── FloatingParticles.tsx# Canvas leaf animation
│   ├── FloatingWhatsApp.tsx # Fixed WhatsApp button
│   ├── MegaMenu.tsx         # Hover mega menu
│   ├── ThemeToggle.tsx      # Dark mode toggle
│   ├── LanguageSwitcher.tsx # Language selector
│   ├── PageTransition.tsx   # Framer Motion page wrapper
│   ├── Providers.tsx        # Lenis smooth scroll provider
│   └── JsonLd.tsx           # JSON-LD structured data
└── lib/
    ├── data.ts              # Products, reviews, FAQ, timeline data
    └── utils.ts             # cn() + formatPrice() utilities
```

## 🌐 Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used in JSON-LD and OG tags) |

## ♿ Accessibility

- Skip-to-content link
- ARIA roles: `dialog`, `radiogroup`, `tablist`, `presentation`
- `aria-expanded`, `aria-checked`, `aria-label`, `aria-modal`
- Keyboard navigation (Enter/Escape handlers)
- Reduced-motion support via `prefers-reduced-motion`
- `suppressHydrationWarning` on form inputs (extension compatibility)

## 📄 License

MIT

---

<p align="center">Made with ❤️ in Tamil Nadu</p>
