import {
  Bot,
  Smartphone,
  Globe,
  Database,
  Zap,
  Sparkles,
  Rocket,
  Bug,
  Cloud,
  Palette,
  Layers,
  Code2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Specialty {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const specialties: Specialty[] = [
  {
    title: "AI Coding",
    description: "Ship production features with Cursor, Claude, and GPT-powered workflows.",
    icon: Bot,
  },
  {
    title: "Vibe Coding",
    description: "Rapid creative builds where speed meets polish and product intuition.",
    icon: Sparkles,
  },
  {
    title: "AI-Generated SaaS",
    description: "Turn prompts into scalable subscription products with clean architecture.",
    icon: Layers,
  },
  {
    title: "Mobile App Development",
    description: "Native-feel cross-platform apps with modern UI and smooth animations.",
    icon: Smartphone,
  },
  {
    title: "Web App Development",
    description: "High-performance Next.js apps with premium motion and UX.",
    icon: Globe,
  },
  {
    title: "Supabase Integration",
    description: "Auth, realtime, storage, and edge functions wired for growth.",
    icon: Database,
  },
  {
    title: "AI Automation",
    description: "Workflows that connect APIs, agents, and business logic end-to-end.",
    icon: Zap,
  },
  {
    title: "Frontend Animations",
    description: "GSAP, Framer Motion, and WebGL experiences that feel cinematic.",
    icon: Palette,
  },
  {
    title: "Rapid MVP Building",
    description: "Launch investor-ready demos in days, not months.",
    icon: Rocket,
  },
  {
    title: "Debugging AI Apps",
    description: "Fix hallucinated code, broken deploys, and integration edge cases.",
    icon: Bug,
  },
  {
    title: "Scalable Deployment",
    description: "Vercel, CI/CD, and production hardening for real users.",
    icon: Cloud,
  },
  {
    title: "Full-Stack Delivery",
    description: "From idea to live product with cohesive design and backend.",
    icon: Code2,
  },
];
