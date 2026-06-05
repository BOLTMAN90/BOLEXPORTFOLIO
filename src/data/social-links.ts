import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Briefcase,
  DollarSign,
  FolderKanban,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/data/site";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  subtitle?: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.github.url,
    icon: Github,
    subtitle: siteConfig.github.username,
  },
  {
    label: "Portfolio",
    href: siteConfig.url,
    icon: FolderKanban,
    subtitle: "Live site",
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/search/gigs?query=bolexman",
    icon: DollarSign,
    subtitle: "Hire on Fiverr",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/nx/search/talent/?q=bolexman",
    icon: Briefcase,
    subtitle: "Hire on Upwork",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/search/results/people/?keywords=bolexman%20developer",
    icon: Linkedin,
    subtitle: "Find on LinkedIn",
  },
  {
    label: "Discord",
    href: siteConfig.discord.url,
    icon: MessageCircle,
    subtitle: `@${siteConfig.discord.username}`,
  },
  {
    label: "Gmail",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    subtitle: siteConfig.email,
  },
];
