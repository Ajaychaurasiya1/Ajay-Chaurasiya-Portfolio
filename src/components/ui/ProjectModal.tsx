"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Lightbulb, Target, User, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const statusStyles = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Completed: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "In Progress": "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-card-border bg-card p-6 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-2 text-muted transition-colors hover:bg-white/10 hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-2xl font-bold text-accent">
              {project.title.charAt(0)}
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-muted">
                {project.category === "work" ? (
                  <Briefcase className="h-3.5 w-3.5" />
                ) : (
                  <User className="h-3.5 w-3.5" />
                )}
                {project.category === "work" ? "Work Project" : "Side Project"}
              </span>
              <span
                className={cn(
                  "rounded-lg border px-3 py-1 text-xs font-medium",
                  statusStyles[project.status]
                )}
              >
                {project.status}
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-accent">
                {project.type}
              </span>
            </div>

            <h3
              id="project-modal-title"
              className="mb-2 text-2xl font-bold text-foreground sm:text-3xl"
            >
              {project.title}
            </h3>

            <p className="mb-6 text-sm text-muted">
              <span className="font-medium text-foreground">Role:</span>{" "}
              {project.role}
            </p>

            <p className="mb-8 leading-relaxed text-muted">
              {project.longDescription}
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-card-border bg-background/30 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Target className="h-4 w-4 text-accent" />
                  Problem
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {project.problem}
                </p>
              </div>
              <div className="rounded-xl border border-card-border bg-background/30 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Lightbulb className="h-4 w-4 text-accent" />
                  Solution
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-card-border bg-white/5 px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                Key Features
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-muted"
                  >
                    <span className="mt-0.5 font-bold text-accent">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-white/5 px-3 py-1.5 text-sm font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
