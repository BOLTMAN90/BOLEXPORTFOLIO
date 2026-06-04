# Phase 06 — Hero Section `#hero`

> **Status:** ✅ Complete

## Content
- **Heading:** AI Coding Engineer & Vibe Coder
- **Subheading:** AI-powered web/mobile/SaaS/automation builds
- **CTAs:** View Projects · Hire Me
- **Typing cycle:** from `siteConfig.typingWords`

## Components
| File | Purpose |
|------|---------|
| `hero-section.tsx` | Main section |
| `animated-name.tsx` | BOLEXMAN color animation |
| `typing-effect.tsx` | Tool name rotator |
| CTAs | Inline via `MagneticButton` + `Button` (no separate `hero-cta.tsx`) |

## Animations
- [x] Stagger entrance (title → sub → CTAs → typing)
- [x] Scroll indicator bounce at bottom (links to `/about`)
- [x] Full viewport `min-h-screen`

## Exit criteria
- [x] CTAs link to `/projects` and `/contact` (multi-page; plan originally said `#projects` / `#contact`)
- [ ] First paint under 3s on fast 3G — verify in Lighthouse (Phase 12)
