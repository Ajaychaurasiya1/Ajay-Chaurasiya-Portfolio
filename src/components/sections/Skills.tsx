"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Layers,
  Rocket,
  Search,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { TiltCard } from "@/components/ui/TiltCard";

const categoryIcons = [Layers, Server, Database, Wrench];
const practiceIcons = [Code2, Server, Database, GitBranch, Search, Rocket];

export function Skills() {
  const { skillsSection, skillCategories } = portfolioData;

  return (
    <AnimatedSection id="skills" className="border-y border-card-border/40 bg-card/35">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeading
          title="Skills & Development"
          subtitle="Technologies and practices I use to build production-ready products"
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
            {skillsSection.tagline}
          </p>
          <p className="leading-relaxed text-muted">
            {skillsSection.description}
          </p>
        </TiltCard>

        {/* Skill categories */}
        <div className="mb-14">
          <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-accent">
            Technical Skills
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            {skillCategories.map((category, catIndex) => {
              const Icon = categoryIcons[catIndex] ?? Layers;
              return (
                <TiltCard
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  maxTilt={8}
                  className="group min-w-0 rounded-2xl border border-card-border bg-card/50 p-4 backdrop-blur-sm transition-colors hover:border-red-500/40 sm:p-7"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600/20 to-red-500/10 transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-foreground">
                        <span className="gradient-text">{category.title}</span>
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-5 space-y-4">
                    {category.skills.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        index={i}
                      />
                    ))}
                  </div>

                  <div className="border-t border-card-border/50 pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                      Highlights
                    </p>
                    <ul className="space-y-1.5">
                      {category.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Development approach */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-accent">
            Development Approach
          </h3>

          {/* Intro */}
          <TiltCard
            maxTilt={6}
            className="mb-8 rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm sm:p-8"
          >
            <p className="mb-3 text-lg font-medium text-foreground">
              {skillsSection.development.tagline}
            </p>
            <p className="leading-relaxed text-muted">
              {skillsSection.development.description}
            </p>
          </TiltCard>

          {/* Workflow pipeline */}
          <div className="mb-12">
            <h4 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted">
              My Workflow
            </h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {skillsSection.development.workflow.map((item, i) => (
                <TiltCard
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  maxTilt={7}
                  className="relative rounded-2xl border border-card-border bg-card/50 p-4 text-center backdrop-blur-sm sm:p-5"
                >
                  <p className="mb-2 text-2xl font-bold gradient-text">
                    {item.step}
                  </p>
                  <h5 className="mb-2 font-semibold text-foreground">
                    {item.label}
                  </h5>
                  <p className="text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                  {i < skillsSection.development.workflow.length - 1 && (
                    <ArrowRight className="absolute top-1/2 -right-3 hidden h-5 w-5 -translate-y-1/2 text-accent lg:block" />
                  )}
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Practice cards */}
          <h4 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted">
            Core Practices
          </h4>
          <div className="grid gap-6 lg:grid-cols-2">
            {skillsSection.development.practices.map((practice, i) => {
              const Icon = practiceIcons[i] ?? Code2;
              return (
                <TiltCard
                  key={practice.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  maxTilt={8}
                  className="group flex min-w-0 flex-col rounded-2xl border border-card-border bg-card/50 p-4 transition-colors hover:border-red-500/40 sm:p-7"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600/20 to-red-500/10 transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h5 className="mb-1 text-lg font-semibold text-foreground">
                        {practice.title}
                      </h5>
                      <p className="text-sm leading-relaxed text-muted">
                        {practice.description}
                      </p>
                    </div>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {practice.longDescription}
                  </p>

                  <div className="mb-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
                      Key Points
                    </p>
                    <ul className="space-y-2">
                      {practice.keyPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto border-t border-card-border/50 pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                      Tools Used
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {practice.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md border border-card-border bg-foreground/5 px-2.5 py-1 text-xs text-muted"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
