# Phase 01 — Project Setup `#setup`

## Goals
- [x] Initialize Next.js (App Router) with TypeScript
- [x] Configure Tailwind CSS v4
- [x] Install animation & 3D dependencies
- [x] Initialize shadcn/ui
- [x] Set up path aliases (`@/`)

## Commands (reference)

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npm install framer-motion gsap @gsap/react lenis three @react-three/fiber @react-three/drei @types/three
npx shadcn@latest init
```

## Dependencies checklist

| Package | Purpose |
|---------|---------|
| `framer-motion` | Section reveals, UI motion |
| `gsap` + `@gsap/react` | ScrollTrigger, timelines |
| `lenis` | Smooth scroll |
| `three` + R3F + drei | WebGL hero |
| `lucide-react` | Icons (via shadcn) |
| `next-themes` | Dark/light toggle |

## shadcn components to add

- [x] `button`
- [x] `card`
- [x] `input`
- [x] `textarea`
- [x] `label`
- [x] `badge`
- [x] `separator`

## Exit criteria
- `npm run dev` starts without errors
- `src/` directory exists with clean imports
