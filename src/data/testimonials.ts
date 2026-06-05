export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "BOLEXMAN shipped our FlowCoach AI mobile experience with a polished Life OS dashboard, Second Brain flow, and Play Store-ready build. Fast iteration and clean React Native architecture.",
    author: "Product Team",
    role: "Mobile & AI",
    company: "FlowCoach AI",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "URUNN needed a premium web presence plus App Store and Play Store funnels. He delivered a cinematic landing experience and clear download paths that match our brand.",
    author: "Growth Lead",
    role: "Web & App Distribution",
    company: "URUNN",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The Assistant App Builder UI — prompt-driven project creation, version branching, and live code generation — was built with the kind of mobile-first polish our users expect.",
    author: "Founder",
    role: "AI App Builder",
    company: "TRD Apps Lab",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Best vibe coder I've worked with. Cursor, Supabase, and rapid MVP delivery without sacrificing production quality. Communication was clear and turnaround was fast.",
    author: "Marcus Webb",
    role: "CTO",
    company: "SaaS Startup",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "He debugged our Lovable MVP, refactored brittle flows, and deployed a stable Vercel build in days. Exactly the AI-native engineer we needed.",
    author: "Elena Rodriguez",
    role: "Product Lead",
    company: "AI Product Studio",
    rating: 5,
  },
  {
    id: "6",
    quote:
      "WebGL hero, smooth scroll, and motion design that actually converts. Our portfolio went from template to premium overnight.",
    author: "James Okonkwo",
    role: "Creative Director",
    company: "Digital Agency",
    rating: 5,
  },
];
