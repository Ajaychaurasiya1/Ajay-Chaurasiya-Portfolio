export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  skills: Skill[];
}

export interface DevelopmentPractice {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  keyPoints: string[];
  tools: string[];
}

export interface DevelopmentWorkflowStep {
  step: string;
  label: string;
  description: string;
}

export interface DevelopmentSectionData {
  tagline: string;
  description: string;
  stats: AboutStat[];
  workflow: DevelopmentWorkflowStep[];
  practices: DevelopmentPractice[];
}

export interface SkillsSectionData {
  tagline: string;
  description: string;
  stats: AboutStat[];
  development: DevelopmentSectionData;
}

export type ProjectCategory = "work" | "side";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  type: string;
  role: string;
  status: "Live" | "Completed" | "In Progress";
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  techStack: string[];
  tags: string[];
  features: string[];
  highlights: string[];
}

export interface ProjectsSectionData {
  tagline: string;
  description: string;
  stats: AboutStat[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  employmentType: "Full-time" | "Internship" | "Contract";
  duration: string;
  period: string;
  location: string;
  summary: string;
  techStack: string[];
  responsibilities: string[];
  achievements: string[];
  projects: string[];
}

export interface ExperienceSectionData {
  tagline: string;
  description: string;
  stats: AboutStat[];
}

export interface SocialLink {
  name: string;
  href: string;
  handle: string;
  icon: "linkedin" | "github" | "email" | "instagram";
}

export interface ContactReason {
  title: string;
  description: string;
}

export interface ContactSectionData {
  tagline: string;
  description: string;
  availability: string;
  responseTime: string;
  location: string;
  stats: AboutStat[];
  reasons: ContactReason[];
}

export interface AboutHighlight {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  keyPoints: string[];
  appliedIn: string[];
}

export interface CoreStrengthsSectionData {
  tagline: string;
  description: string;
  stats: AboutStat[];
}

export interface AboutFocus {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  capabilities: string[];
  examples: string[];
  techStack: string[];
}

export interface WhatIBuildSectionData {
  tagline: string;
  description: string;
  stats: AboutStat[];
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutData {
  tagline: string;
  paragraphs: string[];
  coreStrengths: CoreStrengthsSectionData;
  highlights: AboutHighlight[];
  whatIBuild: WhatIBuildSectionData;
  focusAreas: AboutFocus[];
  stats: AboutStat[];
}

export interface HeroSectionData {
  greeting: string;
  badge: string;
  tagline: string;
  location: string;
  availability: string;
  stats: AboutStat[];
  techPills: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  hero: HeroSectionData;
  about: AboutData;
  skillsSection: SkillsSectionData;
  skillCategories: SkillCategory[];
  projectsSection: ProjectsSectionData;
  projects: Project[];
  experienceSection: ExperienceSectionData;
  experience: Experience[];
  contactSection: ContactSectionData;
  socialLinks: SocialLink[];
  email: string;
}
