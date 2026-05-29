# Phase 08 — Projects Section `#projects` ⭐ HIGH PRIORITY

## UX requirements
- [ ] Cinematic carousel with drag/swipe
- [ ] Floating card depth (shadow + translateZ feel)
- [ ] Hover expansion (scale + glow)
- [ ] Parallax on scroll
- [ ] Device mockups for mobile projects

## Data: 10 sample projects
1. AI SaaS Dashboard
2. AI Chat Application
3. Productivity Mobile App
4. Finance Tracking App
5. AI Image Generator
6. Startup Landing Page
7. Restaurant Ordering App
8. Real Estate Platform
9. E-learning Platform
10. AI Automation Dashboard

## Each project object
```ts
{
  id, name, category, description, image, stack[],
  type: 'web' | 'mobile',
  liveUrl?, appStoreUrl?, playStoreUrl?
}
```

## Images
- Use high-quality Unsplash / placeholder SaaS UI style images
- Store in `public/images/projects/`
- `next/image` with lazy loading + blur placeholder

## CTAs
- Web: **Visit Website**
- Mobile: **App Store** + **Play Store**

## Exit criteria
- Carousel keyboard accessible
- Images optimized (webp where possible)
