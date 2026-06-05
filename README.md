# BOLEXMAN — AI Developer Portfolio

Premium futuristic portfolio for **BOLEXMAN**, AI Coding Engineer & Vibe Coder.

**Live repo:** [github.com/BOLTMAN90/BOLEXPORTFOLIO](https://github.com/BOLTMAN90/BOLEXPORTFOLIO)

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion, GSAP, Three.js / R3F, Lenis
- shadcn/ui, next-themes (dark default)

## Getting Started

```bash
npm install
npm run clean   # if you see Turbopack/HMR chunk errors
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Pages

| Route | Content |
|-------|---------|
| `/` | Hero + navigation cards |
| `/about` | About & specialties |
| `/services` | Services |
| `/projects` | Project index |
| `/projects/flowcoach-ai` | FlowCoach AI |
| `/projects/urunn` | URUNN |
| `/projects/assistant-ai` | Assistant App Builder |
| `/stack` | Tech stack |
| `/process` | Workflow timeline |
| `/testimonials` | Client reviews |
| `/contact` | Contact form |

## Environment variables

Copy `.env.example` → `.env.local`:

```
CONTACT_TO_EMAIL=belrender000@gmail.com
GMAIL_USER=belrender000@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
```

Get a Gmail App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

**Contact form requires `GMAIL_APP_PASSWORD`** — without it, submissions return a 503 error.

## Deploy on Vercel

1. Import [BOLEXPORTFOLIO](https://github.com/BOLTMAN90/BOLEXPORTFOLIO) on [vercel.com](https://vercel.com)
2. Add the env vars above in **Project → Settings → Environment Variables**
3. Deploy — Vercel auto-builds on every `main` push
4. Update `NEXT_PUBLIC_SITE_URL` to your Vercel URL (or custom domain)

## Customize

- Projects: `src/data/projects.ts` + `public/images/projects/`
- Profile: `src/data/site.ts`
- Social links: `src/data/social-links.ts`
- Testimonials: `src/data/testimonials.ts`

## Implementation Plan

Build phases: [`implementation-plan/`](./implementation-plan/00-README.md)
