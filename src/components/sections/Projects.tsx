"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import type { Project, ProjectCategory } from "@/types/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type FilterOption = "all" | ProjectCategory;

const filters: { id: FilterOption; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "work", label: "Work" },
  { id: "side", label: "Side Projects" },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const { projectsSection, projects } = portfolioData;

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter, projects]
  );

  return (
    <AnimatedSection id="projects">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeading
          title="Featured Projects"
          subtitle="Professional work and personal builds across the full stack"
        />

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm sm:p-8"
        >
          <p className="mb-3 text-lg font-medium text-foreground">
            {projectsSection.tagline}
          </p>
          <p className="leading-relaxed text-muted">
            {projectsSection.description}
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {projectsSection.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-card-border bg-card/30 p-4 text-center backdrop-blur-sm sm:p-5"
            >
              <p className="text-xl font-bold gradient-text sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition-all",
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/25"
                  : "border border-card-border bg-card/50 text-muted hover:border-red-500/40 hover:text-foreground"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-muted">
            No projects in this category yet.
          </p>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </AnimatedSection>
  );
}
