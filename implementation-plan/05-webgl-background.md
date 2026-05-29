# Phase 05 — WebGL Background `#webgl`

## Component: `ParticleField`
- Path: `src/components/three/particle-field.tsx`
- [ ] Dynamic import with `next/dynamic` + `ssr: false`
- [ ] Thousands of points with additive blending
- [ ] Mouse parallax via `useFrame` + pointer normalized coords
- [ ] Purple/cyan color mix matching brand
- [ ] Low GPU fallback: static gradient if WebGL fails

## Hero integration
- [ ] Canvas absolute positioned behind content
- [ ] `pointer-events-none` on canvas
- [ ] z-index layering documented

## Floating objects (CSS/Framer)
- [ ] 3–5 blurred orbs with slow drift
- [ ] Optional drei `Float` on simple icosahedron (lite)

## Exit criteria
- 60fps target on mid-range laptop
- Hero text remains readable (contrast overlay)
