import {
  Globe,
  Smartphone,
  Box,
  Heart,
  Bolt,
  MousePointer2,
  Database,
  ArrowRightLeft,
  Rocket,
  Cuboid,
  Workflow,
  Paintbrush,
  Wrench,
  Plug,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "AI Web App Development",
    description: "Next.js SaaS dashboards and landing pages built with AI-first velocity.",
    icon: Globe,
  },
  {
    title: "AI Mobile App Development",
    description: "Cross-platform mobile products with premium UI and store-ready polish.",
    icon: Smartphone,
  },
  {
    title: "Rork App Development",
    description: "Ship mobile experiences crafted in the Rork AI app builder ecosystem.",
    icon: Box,
  },
  {
    title: "Lovable App Development",
    description: "Transform Lovable prototypes into production-grade web applications.",
    icon: Heart,
  },
  {
    title: "Bolt.new Development",
    description: "Extend Bolt-generated stacks with custom features and integrations.",
    icon: Bolt,
  },
  {
    title: "Cursor AI Coding",
    description: "Expert pair-programming workflows for fast, maintainable codebases.",
    icon: MousePointer2,
  },
  {
    title: "Supabase Backend Setup",
    description: "Database design, RLS policies, auth flows, and realtime subscriptions.",
    icon: Database,
  },
  {
    title: "Firebase to Supabase Migration",
    description: "Seamless data and auth migration with zero-downtime strategies.",
    icon: ArrowRightLeft,
  },
  {
    title: "AI SaaS MVP Development",
    description: "Subscription-ready MVPs with billing, onboarding, and admin panels.",
    icon: Rocket,
  },
  {
    title: "WebGL Interactive Websites",
    description: "Three.js experiences that react to scroll, cursor, and user input.",
    icon: Cuboid,
  },
  {
    title: "AI Automation Systems",
    description: "Agent pipelines, webhooks, and scheduled jobs that run your business.",
    icon: Workflow,
  },
  {
    title: "UI/UX for AI Products",
    description: "Interfaces that feel human, trustworthy, and unmistakably premium.",
    icon: Paintbrush,
  },
  {
    title: "Debugging & Deployment",
    description: "Rescue broken builds and ship stable releases to production.",
    icon: Wrench,
  },
  {
    title: "API Integration",
    description: "OpenAI, Stripe, Twilio, and custom REST/GraphQL connections.",
    icon: Plug,
  },
];
