"use client";

import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Code2,
  MapPin,
  FolderKanban,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

const employmentStyles = {
  "Full-time": "bg-red-500/10 text-red-400 border-red-500/20",
  Internship: "bg-white/10 text-white border-white/20",
  Contract: "bg-red-500/10 text-red-300 border-red-500/30",
};

export function Experience() {
  const { experienceSection, experience } = portfolioData;

  return (
    <AnimatedSection id="experience" className="border-y border-card-border/40 bg-card/35">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeading
          title="Work Experience"
          subtitle="Professional growth across MERN stack and AI product development"
        />

        {/* Intro */}
        <TiltCard
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          maxTilt={6}
          className="mb-10 rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm sm:p-8"
        >
          <p className="mb-3 text-lg font-medium text-foreground">
            {experienceSection.tagline}
          </p>
          <p className="leading-relaxed text-muted">
            {experienceSection.description}
          </p>
        </TiltCard>

        {/* Timeline */}
        <div className="relative w-full">
          <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-red-600/40 via-red-500/20 to-transparent sm:left-8 sm:block" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute top-8 left-0 hidden h-4 w-4 rounded-full border-2 border-accent bg-background sm:left-[1.65rem] sm:block" />

                <TiltCard
                  maxTilt={8}
                  className="rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm sm:p-8"
                >
                  {/* Header */}
                  <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600/20 to-red-500/10">
                        <Building2 className="h-7 w-7 text-accent" />
                      </div>
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span
                            className={cn(
                              "rounded-lg border px-2.5 py-1 text-xs font-medium",
                              employmentStyles[exp.employmentType]
                            )}
                          >
                            {exp.employmentType}
                          </span>
                          <span className="rounded-lg bg-foreground/5 px-2.5 py-1 text-xs font-medium text-muted">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-accent">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-muted lg:items-end">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 shrink-0 text-accent" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0 text-accent" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mb-6 leading-relaxed text-muted">{exp.summary}</p>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
                      <Code2 className="h-4 w-4" />
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-card-border bg-foreground/5 px-3 py-1 text-sm text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 grid gap-6 lg:grid-cols-2">
                    {/* Responsibilities */}
                    <div>
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
                        <Briefcase className="h-4 w-4 text-accent" />
                        Responsibilities
                      </div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-red-600 to-red-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
                        <Award className="h-4 w-4 text-accent" />
                        Key Achievements
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 rounded-lg bg-foreground/5 px-3 py-2 text-sm text-muted"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Projects worked on */}
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
                      <FolderKanban className="h-4 w-4 text-accent" />
                      Projects & Products
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project) => (
                        <span
                          key={project}
                          className="rounded-lg bg-gradient-to-r from-red-600/10 to-red-500/5 px-3 py-1.5 text-sm font-medium text-foreground"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
