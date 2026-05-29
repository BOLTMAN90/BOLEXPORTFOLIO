import { Lightbulb, Brain, Layers, Code2, Database, TestTube, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Idea",
    description: "Define the vision, users, and core value in a focused discovery sprint.",
    icon: Lightbulb,
  },
  {
    step: 2,
    title: "AI Planning",
    description: "Architect features, data models, and prompts with AI-assisted specs.",
    icon: Brain,
  },
  {
    step: 3,
    title: "Rapid Prototyping",
    description: "Ship clickable flows in Lovable, Bolt, or Rork for fast validation.",
    icon: Layers,
  },
  {
    step: 4,
    title: "AI Coding",
    description: "Build production code with Cursor, refining quality and patterns.",
    icon: Code2,
  },
  {
    step: 5,
    title: "Backend Integration",
    description: "Wire Supabase auth, APIs, webhooks, and third-party services.",
    icon: Database,
  },
  {
    step: 6,
    title: "Testing",
    description: "QA flows, fix AI edge cases, and optimize performance.",
    icon: TestTube,
  },
  {
    step: 7,
    title: "Deployment",
    description: "Launch on Vercel or app stores with monitoring and analytics.",
    icon: Rocket,
  },
];
