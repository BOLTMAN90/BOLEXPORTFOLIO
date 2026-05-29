# BOLEXMAN Portfolio — Implementation Plan

> **Owner:** BOLEXMAN · **Role:** AI Coding Engineer & Vibe Coder  
> **Stack:** Next.js · TypeScript · Tailwind · Framer Motion · GSAP · R3F · Lenis · shadcn/ui

## How to use this folder

Each file is a **tagged phase**. Work in order (`01` → `12`). Check off items in each file as you complete them.

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

## Folder structure (target)

```
bolexportfolio/
├── implementation-plan/     ← you are here
├── public/
│   ├── favicon.ico
│   └── images/projects/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/              ← shadcn
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── three/
│   │   └── shared/
│   ├── data/
│   ├── hooks/
│   └── lib/
└── ...
```

## Build order (summary)

1. **Setup** — Next.js 15, Tailwind, shadcn, install motion libs  
2. **Design** — CSS variables, fonts, glass utilities  
3. **Providers** — Theme, Lenis, GSAP ScrollTrigger  
4. **WebGL** — Lazy-loaded particle field (hero)  
5. **Sections** — Hero → About → Services → Projects → Stack → Process → Testimonials → Contact → Footer  
6. **Polish** — Loader, magnetic buttons, SEO, responsive pass  

**Estimated phases:** 12 · **Priority:** Hero + Projects first for wow factor
