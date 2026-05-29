# Phase 02 — Design System `#design-system`

## Goals
- [x] Define CSS variables in `globals.css`
- [x] Configure Tailwind theme extensions (colors, fonts, animations)
- [x] Create utility classes: `glass`, `glow-border`, `gradient-text`
- [x] Load premium fonts (Geist via next/font)

## Tokens

```css
--background: #0B0F19;
--foreground: #f8fafc;
--accent: #7C3AED;
--glow: #00E5FF;
```

## Utility classes

| Class | Effect |
|-------|--------|
| `.glass` | backdrop-blur + semi-transparent bg |
| `.glow-purple` | box-shadow purple |
| `.glow-cyan` | text-shadow / border cyan |
| `.gradient-mesh` | animated radial gradients |

## BOLEXMAN name animation
- [x] Split letters into spans
- [x] Cycle hue / gradient per letter with Framer Motion
- [x] Subtle float + shimmer on hover

## Exit criteria
- Dark mode is default; light mode variables defined
- All sections use consistent spacing scale (section-py: 24/32)
