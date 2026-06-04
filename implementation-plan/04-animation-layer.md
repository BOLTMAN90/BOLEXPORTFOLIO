# Phase 04 — Animation Layer `#animations`

> **Status:** ✅ Complete

## Goals
- [x] Lenis smooth scroll — `src/components/providers.tsx` + `src/context/lenis-context.tsx`
- [x] `useGsapScroll` hook — `src/hooks/use-gsap-scroll.ts` (ScrollTrigger register)
- [x] `PageLoader` — cinematic intro (~2.2s), sessionStorage skip
- [x] `GlowCursor` — desktop-only follow glow
- [x] `RevealOnScroll` — reusable stagger wrapper

## Loading screen
- [x] BOLEXMAN logo (AnimatedName)
- [x] Progress bar + percent counter
- [x] Fade out to content

## GSAP patterns
- [x] Process timeline line draw (ScrollTrigger scrub)
- [ ] Text split reveal (lines/chars) — optional v2, not required for launch
- [ ] Section pin for projects — optional v2

## Performance
- [x] `prefers-reduced-motion` — globals.css + hooks (Lenis, cursor, loader, WebGL, RevealOnScroll)
- [x] Disable cursor glow on touch / small screens
- [x] Pause Lenis when mobile menu open

## Exit criteria
- [x] Scroll feels smooth on desktop
- [x] No layout shift after loader (fixed overlay, exit fade)
