export type ProjectType = "web" | "mobile";

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  stack: string[];
  type: ProjectType;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ai-saas-dashboard",
    name: "Nexus AI Dashboard",
    category: "AI SaaS",
    description:
      "Enterprise analytics dashboard with AI insights, team workspaces, and real-time metrics visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    stack: ["Next.js", "Supabase", "OpenAI", "Tailwind", "Framer Motion"],
    type: "web",
    liveUrl: "https://vercel.com",
  },
  {
    id: "ai-chat",
    name: "PulseChat AI",
    category: "AI Chat",
    description:
      "Multi-model conversational interface with memory, file uploads, and collaborative team threads.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop",
    stack: ["React", "Claude API", "Supabase", "Vercel"],
    type: "web",
    liveUrl: "https://openai.com",
  },
  {
    id: "productivity-mobile",
    name: "FlowState",
    category: "Productivity",
    description:
      "Minimal task and focus app with AI daily planning, habit streaks, and widget support.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop",
    stack: ["React Native", "Supabase", "Gemini", "Expo"],
    type: "mobile",
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
  },
  {
    id: "finance-app",
    name: "Vault Finance",
    category: "Fintech",
    description:
      "Personal finance tracker with AI spending insights, budgets, and investment snapshots.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80&auto=format&fit=crop",
    stack: ["Flutter", "Firebase", "Plaid API", "Charts"],
    type: "mobile",
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
  },
  {
    id: "ai-image-gen",
    name: "DreamForge Studio",
    category: "AI Creative",
    description:
      "Generative image studio with style presets, batch generation, and gallery export.",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80&auto=format&fit=crop",
    stack: ["Next.js", "OpenAI", "Replicate", "Stripe"],
    type: "web",
    liveUrl: "https://replicate.com",
  },
  {
    id: "startup-landing",
    name: "Aether Launch",
    category: "Startup",
    description:
      "Cinematic SaaS landing page with WebGL hero, conversion-optimized sections, and waitlist.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
    stack: ["Next.js", "Three.js", "GSAP", "Lenis"],
    type: "web",
    liveUrl: "https://stripe.com",
  },
  {
    id: "restaurant-app",
    name: "BiteRush",
    category: "Food Tech",
    description:
      "Restaurant ordering platform with live kitchen tracking, loyalty rewards, and payments.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop",
    stack: ["React Native", "Supabase", "Stripe", "Maps API"],
    type: "mobile",
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
  },
  {
    id: "real-estate",
    name: "Horizon Estates",
    category: "Real Estate",
    description:
      "Property discovery platform with AI valuations, virtual tours, and agent CRM tools.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop",
    stack: ["Next.js", "Supabase", "Mapbox", "OpenAI"],
    type: "web",
    liveUrl: "https://supabase.com",
  },
  {
    id: "elearning",
    name: "MindPath Academy",
    category: "E-Learning",
    description:
      "Adaptive learning platform with AI tutors, progress analytics, and certificate paths.",
    image:
      "https://images.unsplash.com/photo-1501504900139-461fcdf8610f?w=1200&q=80&auto=format&fit=crop",
    stack: ["Next.js", "PostgreSQL", "Claude", "Mux Video"],
    type: "web",
    liveUrl: "https://anthropic.com",
  },
  {
    id: "automation-dashboard",
    name: "AutoPilot HQ",
    category: "Automation",
    description:
      "Operations dashboard for AI agent workflows, logs, triggers, and integration health.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80&auto=format&fit=crop",
    stack: ["Next.js", "n8n", "OpenAI", "Supabase"],
    type: "web",
    liveUrl: "https://github.com/BOLTMAN90",
  },
];
