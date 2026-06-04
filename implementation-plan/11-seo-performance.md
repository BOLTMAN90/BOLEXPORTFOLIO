# Phase 11 — SEO & Performance `#seo-perf`

> **Status:** ✅ Complete

## SEO
- [x] `metadata` in `layout.tsx` (title, description, OG, Twitter)
- [x] `robots.ts` + `sitemap.ts`
- [x] Semantic HTML (`main` in layout, `section` + `h2` per section, single `h1` on hero)
- [x] JSON-LD Person schema in `layout.tsx`

## Performance
- [x] Dynamic import Three.js bundle (`particle-field-lazy.tsx`)
- [x] `loading.tsx` skeleton
- [x] `next/image` sizes + priority on active project card
- [x] Font `display: swap` (Geist in layout)
- [x] `cdn.simpleicons.org` in `next.config.ts` remotePatterns

## Favicon
- [x] `app/icon.tsx` (generated “B” icon)
- [ ] `public/favicon.ico` — optional; `icon.tsx` is sufficient for Next.js

## Theme
- [x] `next-themes` with CSS transition class on toggle
- [x] `defaultTheme="dark"`

## Exit criteria
- [ ] Lighthouse performance > 80 mobile — run in Phase 12
- [x] Build passes with no type errors
