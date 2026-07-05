"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  GraduationCap,
  Medal,
  Star,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function Education() {
  const { educationSection, education } = portfolioData;

  return (
    <AnimatedSection id="education" className="border-y border-card-border/40 bg-card/35">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation in computer science and engineering"
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
            {educationSection.tagline}
          </p>
          <p className="leading-relaxed text-muted">
            {educationSection.description}
          </p>
        </TiltCard>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-4 gap-2 sm:gap-4">
          {educationSection.stats.map((stat, i) => (
            <TiltCard
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              maxTilt={8}
              className="rounded-2xl border border-card-border bg-card/30 p-4 text-center backdrop-blur-sm sm:p-5"
            >
              <p className="text-xl font-bold gradient-text sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </TiltCard>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative w-full">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-red-600/40 via-red-500/20 to-transparent sm:left-8" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.article
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                <div className="absolute top-8 left-2.5 h-3 w-3 rounded-full border-2 border-accent bg-background sm:left-[1.65rem] sm:h-4 sm:w-4" />

                <TiltCard
                  maxTilt={8}
                  className="rounded-2xl border border-card-border bg-card/50 p-4 backdrop-blur-sm sm:p-8"
                >
                  <div className="mb-6 flex flex-row flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600/20 to-red-500/10">
                        <GraduationCap className="h-7 w-7 text-accent" />
                      </div>
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-lg border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-400">
                            {edu.period}
                          </span>
                          <span className="rounded-lg bg-foreground/5 px-2.5 py-1 text-xs font-medium text-muted">
                            {edu.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-accent">{edu.field}</p>
                        <p className="mt-1 text-muted">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 shrink-0 text-accent" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 shrink-0 text-accent" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Medal className="h-4 w-4 shrink-0 text-accent" />
                        <span>{edu.honors}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
                      <Award className="h-4 w-4 text-accent" />
                      Highlights
                    </div>
                    <ul className="space-y-2">
                      {edu.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 rounded-lg bg-foreground/5 px-3 py-2 text-sm text-muted"
                        >
                          <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
