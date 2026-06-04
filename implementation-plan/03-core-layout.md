# Phase 03 — Core Layout `#core-layout`

> **Status:** ✅ Complete · Nav uses **page routes** (`/about`, `/projects`, …) not `#` section anchors.

## Components

| Component | Path | Status |
|-----------|------|--------|
| `RootLayout` | `src/app/layout.tsx` | [x] |
| `Providers` | `src/components/providers.tsx` | [x] |
| `Navbar` | `src/components/layout/navbar.tsx` | [x] |
| `Footer` | `src/components/layout/footer.tsx` | [x] |
| `SectionWrapper` | `src/components/shared/section-wrapper.tsx` | [x] |
| `MagneticButton` | `src/components/shared/magnetic-button.tsx` | [x] |
| `PageShell` | `src/components/layout/page-shell.tsx` | [x] |

## Navbar features
- [x] Sticky glass navbar on scroll
- [x] Animated BOLEXMAN logo (color cycle)
- [x] Nav links (multi-page routes)
- [x] Theme toggle (dark default)
- [x] Mobile hamburger with slide menu
- [x] Lenis paused while mobile menu open (`lenis-context.tsx`)

## Footer features
- [x] Particle accent (CSS animated dots)
- [x] Social links row
- [x] Copyright + tagline

## Exit criteria
- [x] Smooth scroll via Lenis (desktop; disabled when `prefers-reduced-motion`)
- [x] All nav `href`s match real routes in `siteConfig.nav`
