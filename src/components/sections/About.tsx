"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  CheckCircle2,
  Globe,
  Hammer,
  Layers,
  Rocket,
  Shield,
  Sparkles,
  Store,
  Zap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const highlightIcons = [Layers, Rocket, Shield];
const focusIcons = [Store, Brain, BarChart3, Globe];

export function About() {
  const { about } = portfolioData;

  return (
    <AnimatedSection id="about">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeading
          title="About Me"
          subtitle="Developer, problem-solver, and builder of modern web products"
        />

        {/* Intro block */}
        <TiltCard
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          maxTilt={6}
          className="mb-12 rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600/20 to-red-500/10 text-2xl font-bold text-accent">
                AC
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  {portfolioData.name}
                </h3>
                <p className="text-accent">{portfolioData.title}</p>
              </div>
            </div>
          </div>

          <p className="mb-6 text-lg font-medium leading-relaxed text-foreground">
            {about.tagline}
          </p>

          <div className="space-y-4">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </TiltCard>

        {/* What I build */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-accent">
            What I Build
          </h3>

          {/* What I build intro */}
          <TiltCard
            maxTilt={6}
            className="mb-8 rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="mb-4 flex items-center gap-2 text-accent">
              <Hammer className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-widest">
                Build Domains
              </span>
            </div>
            <p className="mb-3 text-lg font-medium text-foreground">
              {about.whatIBuild.tagline}
            </p>
            <p className="leading-relaxed text-muted">
              {about.whatIBuild.description}
            </p>
          </TiltCard>

          {/* Focus area cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {about.focusAreas.map((area, i) => {
              const Icon = focusIcons[i] ?? Globe;
              return (
                <TiltCard
                  key={area.id}
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
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-1 text-lg font-semibold text-foreground sm:text-xl">
                        {area.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {area.longDescription}
                  </p>

                  <div className="mb-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
                      Capabilities
                    </p>
                    <ul className="space-y-2">
                      {area.capabilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                      Example Projects
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-lg bg-gradient-to-r from-red-600/10 to-red-500/5 px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto border-t border-card-border/50 pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-card-border bg-foreground/5 px-2.5 py-1 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </motion.div>

        {/* Core strengths */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-accent">
            Core Strengths
          </h3>

          {/* Core strengths intro */}
          <TiltCard
            maxTilt={6}
            className="mb-8 rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="mb-4 flex items-center gap-2 text-accent">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-widest">
                How I Work
              </span>
            </div>
            <p className="mb-3 text-lg font-medium text-foreground">
              {about.coreStrengths.tagline}
            </p>
            <p className="leading-relaxed text-muted">
              {about.coreStrengths.description}
            </p>
          </TiltCard>

          {/* Strength cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {about.highlights.map((item, i) => {
              const Icon = highlightIcons[i] ?? Layers;
              return (
                <TiltCard
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  maxTilt={8}
                  className="group flex min-w-0 flex-col rounded-2xl border border-card-border bg-card/50 p-4 transition-colors hover:border-red-500/40 sm:p-7"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600/20 to-red-500/10 transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-1 text-lg font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {item.longDescription}
                  </p>

                  <div className="mb-5">
                    <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                      <Zap className="h-3.5 w-3.5" />
                      Key Points
                    </p>
                    <ul className="space-y-2">
                      {item.keyPoints.map((point) => (
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
                      Applied In
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.appliedIn.map((project) => (
                        <span
                          key={project}
                          className="rounded-lg bg-gradient-to-r from-red-600/10 to-red-500/5 px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {project}
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
