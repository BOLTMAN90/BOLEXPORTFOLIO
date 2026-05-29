# Phase 12 — QA & Launch `#qa-launch`

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
- [ ] Reduced motion disables heavy animations
- [ ] Loader skippable or fast on repeat visit (sessionStorage)

## Content QA
- [ ] All nav anchors work
- [ ] External project links open `target="_blank" rel="noopener"`
- [ ] BOLEXMAN name animates colors
- [ ] Typing effect cycles all tools

## Pre-launch
```bash
npm run build
npm run start
```

## Deploy targets (user choice)
- Vercel (recommended for Next.js)
- Set `NEXT_PUBLIC_SITE_URL` for OG URLs

## Post-launch ideas (v2)
- CMS for projects
- Contact form API (Resend / Formspree)
- Blog / case studies
- Analytics (Vercel Analytics)
