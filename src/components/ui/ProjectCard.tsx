"use client";

import { ArrowUpRight, Briefcase, User } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  className?: string;
}

const statusStyles = {
  Live: "bg-red-500/10 text-red-400 border-red-500/20",
  Completed: "bg-white/10 text-white border-white/20",
  "In Progress": "bg-red-500/10 text-red-300 border-red-500/30",
};

export function ProjectCard({
  project,
  index,
  onClick,
  className,
}: ProjectCardProps) {
  const CategoryIcon = project.category === "work" ? Briefcase : User;

  return (
    <TiltCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      maxTilt={12}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group relative flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-card-border bg-card/50 p-4 backdrop-blur-sm transition-colors hover:border-red-500/40 hover:bg-card sm:p-6",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-600/20 to-red-500/10 text-lg font-bold text-accent">
            {project.title.charAt(0)}
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-lg bg-foreground/5 px-2.5 py-1 text-xs font-medium text-muted">
            <CategoryIcon className="h-3 w-3" />
            {project.category === "work" ? "Work" : "Side Project"}
          </span>
          <span
            className={cn(
              "rounded-lg border px-2.5 py-1 text-xs font-medium",
              statusStyles[project.status]
            )}
          >
            {project.status}
          </span>
        </div>

        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
          {project.type}
        </p>

        <h3 className="mb-2 text-base font-semibold text-foreground sm:text-xl">
          {project.title}
        </h3>

        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mb-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted/70">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-foreground/5 px-2 py-0.5 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="rounded-md bg-foreground/5 px-2 py-0.5 text-xs text-muted">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-card-border/50 pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-foreground/5 px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
