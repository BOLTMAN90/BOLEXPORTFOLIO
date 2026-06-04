# BOLEXMAN Portfolio — Implementation Plan

> **Owner:** BOLEXMAN · **Role:** AI Coding Engineer & Vibe Coder  
> **Stack:** Next.js · TypeScript · Tailwind · Framer Motion · GSAP · R3F · Lenis · shadcn/ui

**Last synced:** 2026-06-01 · `npm run build` passes

## Progress snapshot

| Phase | Tag | Status | Notes |
|-------|-----|--------|-------|
| 01 | `#setup` | ✅ Complete | |
| 02 | `#design-system` | ✅ Complete | |
| 03 | `#core-layout` | ✅ Complete | Multi-page routes (not single-page `#` anchors) |
| 04 | `#animations` | ✅ Complete | Lenis in `providers.tsx` + `lenis-context.tsx` |
| 05 | `#webgl` | ✅ Complete | Error boundary + reduced-motion fallback |
| 06 | `#hero` | ✅ Complete | CTAs → `/projects`, `/contact` |
| 07 | `#about-services` | ✅ Complete | 12 specialties, 14 services |
| 08 | `#projects` | ✅ Mostly | Sample data + Unsplash; swap for `public/images/projects/` |
| 09 | `#stack-process` | ✅ Complete | Mobile horizontal process timeline added |
| 10 | `#social-proof` | ✅ Complete | Gmail API (not toast-only v1) |
| 11 | `#seo-perf` | ✅ Complete | `sitemap.ts`, `robots.ts`, `icon.tsx` |
| 12 | `#qa-launch` | ⏳ Manual | Run checklist before deploy |

## Architecture updates (plan was written for single-page)

The original plan assumed one long page with `#about`, `#projects`, etc. **The app uses separate routes** instead:

| Plan assumed | Actual |
|--------------|--------|
| `#projects` anchor | `/projects` page |
| `#contact` anchor | `/contact` page |
| `hero-cta.tsx` | CTAs inline in `hero-section.tsx` |
| `SmoothScrollProvider` | `Providers` + `LenisProvider` |
| `ServiceCard.tsx` | Cards inline in `services-section.tsx` |

This is intentional — better SEO and shareable URLs.

## What YOU still need to do (not code)

1. **`.env.local`** — copy from `.env.example`; Gmail App Password for contact form  
2. **`NEXT_PUBLIC_SITE_URL`** — your production domain (OG + sitemap)  
3. **Real content** — `src/data/projects.ts`, testimonials, social URLs  
4. **Project images** — add to `public/images/projects/` and update paths  
5. **Phase 12 QA** — test 375 / 768 / 1280 / 1920, Safari WebGL, deploy Vercel  

## How to use this folder

Each file is a **tagged phase**. Phases `01`–`11` are implemented in code; use `12-qa-launch.md` before going live.

| Tag | File | Phase |
|-----|------|-------|
| `#setup` | [01-project-setup.md](./01-project-setup.md) | Scaffold & deps |
| `#design-system` | [02-design-system.md](./02-design-system.md) | Colors, tokens, globals |
| `#core-layout` | [03-core-layout.md](./03-core-layout.md) | Layout, nav, footer, providers |
| `#animations` | [04-animation-layer.md](./04-animation-layer.md) | Lenis, GSAP, cursor, loader |
| `#webgl` | [05-webgl-background.md](./05-webgl-background.md) | R3F particles & hero BG |
| `#hero` | [06-hero-section.md](./06-hero-section.md) | Hero + typing + CTAs |
| `#about-services` | [07-about-services.md](./07-about-services.md) | About + Services |
| `#projects` | [08-projects-section.md](./08-projects-section.md) | Carousel showcase |
| `#stack-process` | [09-stack-process.md](./09-stack-process.md) | Tech stack + timeline |
| `#social-proof` | [10-testimonials-contact.md](./10-testimonials-contact.md) | Testimonials + Contact |
| `#seo-perf` | [11-seo-performance.md](./11-seo-performance.md) | SEO, lazy load, a11y |
| `#qa-launch` | [12-qa-launch.md](./12-qa-launch.md) | QA checklist |

## Color system (reference)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0B0F19` | Page background |
| `--accent-purple` | `#7C3AED` | Primary accent |
| `--glow-cyan` | `#00E5FF` | Glow highlights |

## Folder structure (current)

```
bolexportfolio/
├── implementation-plan/
├── public/
│   └── images/projects/     ← add real screenshots here
├── src/
│   ├── app/                 ← pages + api/contact + robots + sitemap
│   ├── components/
│   ├── context/             ← lenis-context.tsx
│   ├── data/
│   └── hooks/               ← use-gsap-scroll, use-reduced-motion
└── ...
```

## Build order (summary) — DONE

1. ~~Setup~~ · ~~Design~~ · ~~Providers~~ · ~~WebGL~~ · ~~Sections~~ · ~~Polish~~  
2. **Next:** Content swap + QA + deploy
