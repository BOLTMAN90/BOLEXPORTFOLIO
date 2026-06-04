import { projects, type Project } from "@/data/projects";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.id);
}

export function projectHref(project: Project): string {
  return project.liveUrl ?? project.playStoreUrl ?? project.appStoreUrl ?? "#";
}

/** Link used for website / preview screenshots */
export function projectPreviewHref(project: Project): string {
  return project.liveUrl ?? projectHref(project);
}

export function projectLinkLabel(project: Project): string {
  if (project.liveUrl) return "Visit website";
  if (project.playStoreUrl) return "View on Google Play";
  if (project.appStoreUrl) return "View on App Store";
  return "Open project";
}

export function projectCtaLabel(project: Project): string {
  if (project.playStoreUrl) return "Get it on Google Play";
  if (project.liveUrl) return "Visit Website";
  return "Open project";
}
