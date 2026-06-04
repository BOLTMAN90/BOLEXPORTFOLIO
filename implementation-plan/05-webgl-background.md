# Phase 05 — WebGL Background `#webgl`

> **Status:** ✅ Complete

## Component: `ParticleField`
- Path: `src/components/three/particle-field.tsx`
- [x] Dynamic import with `next/dynamic` + `ssr: false` (`particle-field-lazy.tsx`)
- [x] Thousands of points with additive blending (~4000)
- [x] Mouse parallax via `useFrame` + pointer on points
- [x] Purple/cyan color mix matching brand
- [x] Low GPU fallback: gradient mesh if WebGL fails or reduced motion (`WebGLErrorBoundary`)

## Hero integration
- [x] Canvas absolute positioned behind content
- [x] `pointer-events-none` on canvas wrapper
- [x] z-index: hero content `z-10`, particles `-z-10`

## Floating objects (CSS/Framer)
- [x] Blurred orbs with slow drift (`floating-orbs.tsx`)
- [ ] Optional drei `Float` icosahedron — skipped (CSS orbs sufficient)

## Exit criteria
- [x] Readable hero text (gradient overlay on hero)
- [ ] 60fps on all devices — verify in Phase 12 QA
