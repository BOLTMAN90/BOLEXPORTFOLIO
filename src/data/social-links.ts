import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Briefcase,
  DollarSign,
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
  { label: "Fiverr", href: "https://fiverr.com", icon: DollarSign },
  { label: "Upwork", href: "https://upwork.com", icon: Briefcase },
  {
    label: "GitHub",
    href: siteConfig.github.url,
    icon: Github,
    subtitle: siteConfig.github.username,
  },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
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
