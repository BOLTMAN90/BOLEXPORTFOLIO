export type ProjectType = "web" | "mobile";

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  screenshots?: string[];
  stack: string[];
  type: ProjectType;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

const FLOWCOACH_PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.nuvint.flowcoachai";

const ASSISTANT_AI_PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.vibecoding.assistantai";

export const projects: Project[] = [
  {
    id: "flowcoach-ai",
    name: "FlowCoach AI",
    category: "AI Life OS · Mobile",
    description:
      "Personal AI Life Operating System — goals, habits, mood journaling, Second Brain notes, and proactive AI coaching in one unified app. Plan smarter. Live better.",
    image: "/images/projects/flowcoach-hero.png",
    screenshots: [
      "/images/projects/flowcoach-hero.png",
      "/images/projects/flowcoach-second-brain.png",
    ],
    stack: ["React Native", "AI Coaching", "Life OS", "Goals & Habits", "Second Brain"],
    type: "mobile",
    playStoreUrl: FLOWCOACH_PLAY_STORE,
  },
  {
    id: "urunn",
    name: "URUNN",
    category: "Running · Web & Mobile",
    description:
      "Personalised running plans from world-class coaches including Sir Mo Farah. 1:1 training, Stride AI companion, and a global running community — from 5K to marathon.",
    image: "/images/projects/urunn-hero.png",
    screenshots: ["/images/projects/urunn-hero.png"],
    stack: ["Next.js", "Stride AI", "Personalised Plans", "Strava Sync", "Elite Coaching"],
    type: "web",
    liveUrl: "https://www.urunn.com/",
    appStoreUrl:
      "https://apps.apple.com/gb/app/urunn-run-training-plans/id6740139117",
    playStoreUrl: "https://urunn-limited.app.link/JhfMRNVzrUb",
  },
  {
    id: "assistant-ai",
    name: "Assistant: App Builder",
    category: "AI App Builder · Mobile",
    description:
      "Prompt Code AI — a mobile-first app builder that turns ideas into live sites and tools. Describe your goal, generate versions, branch layouts, and export clean code. Built with Vibecode.",
    image: "/images/projects/assistant-ai-new-project.png",
    screenshots: [
      "/images/projects/assistant-ai-new-project.png",
      "/images/projects/assistant-ai-hotel.png",
    ],
    stack: ["React Native", "Prompt AI", "Vibecode", "Code Export", "Version Branching"],
    type: "mobile",
    playStoreUrl: ASSISTANT_AI_PLAY_STORE,
  },
];
