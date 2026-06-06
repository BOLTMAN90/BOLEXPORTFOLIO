import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Briefcase,
  DollarSign,
  FolderKanban,
  Facebook,
  Instagram,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/data/site";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  subtitle?: string;
  brand?: "x" | "fiverr" | "upwork";
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
    brand: "fiverr",
    subtitle: "Hire on Fiverr",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/nx/search/talent/?q=bolexman",
    icon: Briefcase,
    brand: "upwork",
    subtitle: "Hire on Upwork",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/search/results/people/?keywords=bolexman%20developer",
    icon: Linkedin,
    subtitle: "Find on LinkedIn",
  },
  {
    label: "X",
    href: siteConfig.twitter.url,
    icon: MessageCircle,
    brand: "x",
    subtitle: `@${siteConfig.twitter.username}`,
  },
  {
    label: "Facebook",
    href: siteConfig.facebook.url,
    icon: Facebook,
    subtitle: "Find on Facebook",
  },
  {
    label: "Instagram",
    href: siteConfig.instagram.url,
    icon: Instagram,
    subtitle: `@${siteConfig.instagram.username}`,
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
