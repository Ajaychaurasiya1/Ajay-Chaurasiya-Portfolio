"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Briefcase,
  Code2,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { name, title, subtitle, hero } = portfolioData;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 -left-20 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-4 py-2 text-sm text-muted backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 shrink-0 text-accent" />
              <span>{hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {hero.greeting}{" "}
              <span className="gradient-text">{name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-3 text-2xl font-semibold text-foreground sm:text-3xl"
            >
              {title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-4 text-base leading-relaxed text-muted sm:text-lg"
            >
              {subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted/90 lg:mx-0"
            >
              {hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button href={hero.ctaPrimary.href} size="lg">
                <Code2 className="h-5 w-5" />
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary" size="lg">
                {hero.ctaSecondary.label}
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-lg"
            >
              {hero.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-card-border bg-card/40 px-3 py-3 text-center backdrop-blur-sm"
                >
                  <p className="text-lg font-bold gradient-text sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right profile card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <div className="relative rounded-2xl border border-card-border bg-card/60 p-6 backdrop-blur-md sm:p-8">
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

              {/* Card header */}
              <div className="mb-6 flex items-center gap-2 border-b border-card-border/50 pb-4">
                <Terminal className="h-4 w-4 text-accent" />
                <span className="font-mono text-sm text-muted">developer.tsx</span>
                <div className="ml-auto flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/60" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <span className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>
              </div>

              {/* Profile */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30 text-3xl font-bold text-accent">
                  AC
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-xl font-bold text-foreground">
                    {name}
                  </h2>
                  <p className="text-sm text-accent">{title}</p>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {hero.availability}
                  </div>
                </div>
              </div>

              {/* Info rows */}
              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-background/40 px-4 py-3">
                  <MapPin className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-muted">{hero.location}</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-background/40 px-4 py-3">
                  <Briefcase className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-muted">
                    Jupiter AI Labs · Mar 2026 - Jun 2026
                  </span>
                </div>
              </div>

              {/* Code snippet style */}
              <div className="mb-6 overflow-hidden rounded-xl border border-card-border bg-background/50 p-4 font-mono text-xs sm:text-sm">
                <p className="text-muted">
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span> = {"{"}
                </p>
                <p className="pl-4 text-muted">
                  name: <span className="text-emerald-400">&quot;{name}&quot;</span>,
                </p>
                <p className="pl-4 text-muted">
                  role: <span className="text-emerald-400">&quot;{title}&quot;</span>,
                </p>
                <p className="pl-4 text-muted">
                  stack: <span className="text-emerald-400">&quot;MERN&quot;</span>,
                </p>
                <p className="pl-4 text-muted">
                  passion: <span className="text-emerald-400">&quot;Building Products&quot;</span>
                </p>
                <p className="text-muted">{"}"}</p>
              </div>

              {/* Tech pills */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {hero.techPills.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                      className="rounded-lg border border-card-border bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 flex justify-center lg:mt-12"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
