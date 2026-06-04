# Phase 12 — QA & Launch `#qa-launch`

> **Status:** ⏳ **YOU run this checklist** before deploy. Code phases 01–11 are complete.

## Responsive checklist
- [ ] 375px (iPhone SE)
- [ ] 768px (tablet)
- [ ] 1280px (laptop)
- [ ] 1920px (desktop)

## Cross-browser
- [ ] Chrome / Edge
- [ ] Firefox
- [ ] Safari (WebGL + smooth scroll)

## Motion QA
- [ ] Reduced motion disables heavy animations (OS setting)
- [x] Loader skippable on repeat visit (sessionStorage `bolex-loaded`)
- [x] Loader skipped immediately when `prefers-reduced-motion`

## Content QA
- [x] All nav routes exist (`/`, `/about`, … `/contact`)
- [x] External project links use `target="_blank" rel="noopener"`
- [x] BOLEXMAN name animates colors
- [x] Typing effect cycles `siteConfig.typingWords`
- [ ] Replace placeholder projects/testimonials with real copy
- [ ] Contact form sends email (requires `.env.local`)

## Pre-launch
```bash
npm install
npm run build
npm run start
```

## Deploy targets (user choice)
- Vercel (recommended for Next.js)
- Set env vars: `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL`

## Post-launch ideas (v2)
- CMS for projects
- Resend instead of Gmail SMTP
- Blog / case studies
- Vercel Analytics
- Text split GSAP reveals
- Section pin on projects
