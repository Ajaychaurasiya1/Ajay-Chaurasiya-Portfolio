"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, User } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  className?: string;
}

const statusStyles = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Completed: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "In Progress": "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

export function ProjectCard({
  project,
  index,
  onClick,
  className,
}: ProjectCardProps) {
  const CategoryIcon = project.category === "work" ? Briefcase : User;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className={cn(
        "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:bg-card",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-lg font-bold text-accent">
            {project.title.charAt(0)}
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-muted">
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

        <h3 className="mb-2 text-xl font-semibold text-foreground">
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
                className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-card-border/50 pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
