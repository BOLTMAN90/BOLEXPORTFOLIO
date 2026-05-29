# BOLEXMAN — AI Developer Portfolio

Premium futuristic portfolio for **BOLEXMAN**, AI Coding Engineer & Vibe Coder.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP + ScrollTrigger
- Three.js / React Three Fiber
- Lenis smooth scroll
- shadcn/ui components
- next-themes (dark default)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Implementation Plan

Step-by-step build guide with tags lives in [`implementation-plan/`](./implementation-plan/00-README.md).

## Pages

| Route | Content |
|-------|---------|
| `/` | Hero + navigation cards |
| `/about` | About & specialties |
| `/services` | Services |
| `/projects` | Project showcase |
| `/stack` | Tech stack |
| `/process` | Workflow timeline |
| `/testimonials` | Client reviews |
| `/contact` | Contact form |

## Contact form (email delivery)

Copy `.env.example` to `.env.local` and add a [Gmail App Password](https://myaccount.google.com/apppasswords):

```
CONTACT_TO_EMAIL=belrender000@gmail.com
GMAIL_USER=belrender000@gmail.com
GMAIL_APP_PASSWORD=your_app_password
```

Messages from the contact form are sent to **belrender000@gmail.com**.

## Customize

- Profile links: `src/data/site.ts` (GitHub, Discord, email)
- Social links: `src/data/social-links.ts`
- Projects: `src/data/projects.ts`
- `NEXT_PUBLIC_SITE_URL` for production OG metadata

## Deploy

Optimized for [Vercel](https://vercel.com).
