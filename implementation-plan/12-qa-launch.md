# Phase 12 — QA & Launch `#qa-launch`

> **Status:** Build verified · Deploy pending Vercel account + Gmail App Password

## Automated QA (done)
- [x] `npm run build` — 18 routes, no errors
- [x] `npm run lint` — no warnings
- [x] All project routes static: flowcoach-ai, urunn, assistant-ai
- [x] Pushed to GitHub `main`

## Responsive checklist (manual in browser)
- [ ] 375px (iPhone SE)
- [ ] 768px (tablet)
- [ ] 1280px (laptop)
- [ ] 1920px (desktop)

## Cross-browser (manual)
- [ ] Chrome / Edge
- [ ] Firefox
- [ ] Safari (WebGL + smooth scroll)

## Motion QA
- [x] Reduced motion disables heavy animations
- [x] Loader skippable on repeat visit (sessionStorage)
- [x] Route change scroll-to-top fix

## Content QA
- [x] All nav routes work
- [x] Project external links open `target="_blank" rel="noopener"`
- [x] Real projects + screenshots in portfolio
- [ ] Contact form sends email (needs `GMAIL_APP_PASSWORD`)

## Deploy checklist
1. [ ] Import https://github.com/BOLTMAN90/BOLEXPORTFOLIO on Vercel
2. [ ] Add env vars: `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL`
3. [ ] Deploy and test live contact form
4. [ ] Optional: custom domain

```bash
npm run build
npm run start
```

## Post-launch (v2)
- CMS for projects
- Resend instead of Gmail SMTP
- Blog / case studies
- Vercel Analytics
