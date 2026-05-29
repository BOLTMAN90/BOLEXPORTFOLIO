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
      "BOLEXMAN turned our AI prototype into a production SaaS in two weeks. The motion design alone made investors stop scrolling.",
    author: "Sarah Chen",
    role: "Founder",
    company: "Nexus Labs",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Best vibe coder I've hired on Upwork. Fast communication, clean code, and he actually understands Supabase RLS.",
    author: "Marcus Webb",
    role: "CTO",
    company: "FlowStack",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Our Lovable MVP had bugs everywhere. He debugged, refactored, and deployed a stable Vercel build in days.",
    author: "Elena Rodriguez",
    role: "Product Lead",
    company: "PulseAI",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "The WebGL portfolio he built for us won design praise from our entire team. Premium doesn't begin to cover it.",
    author: "James Okonkwo",
    role: "Creative Director",
    company: "Aether Studio",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "Firebase to Supabase migration was seamless. Zero downtime and our auth flows work flawlessly now.",
    author: "Priya Nair",
    role: "Engineering Manager",
    company: "Vault Finance",
    rating: 5,
  },
  {
    id: "6",
    quote:
      "Hired for a Rork mobile app — shipped to both stores with polish I didn't think was possible on our timeline.",
    author: "Tom Bradley",
    role: "Startup Founder",
    company: "BiteRush",
    rating: 5,
  },
];
