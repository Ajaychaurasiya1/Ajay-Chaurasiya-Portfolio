"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

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
        <div className="grid items-center lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl text-left xl:max-w-3xl">
            {/* Meta */}
            <motion.div
              {...fadeUp(0)}
              className="mb-8 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {hero.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
                {hero.location}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="gradient-text mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {hero.greeting} {name}
            </motion.h1>

            <motion.p
              {...fadeUp(0.15)}
              className="mb-6 text-2xl font-semibold text-foreground sm:text-3xl"
            >
              {title}
            </motion.p>

            {/* Description */}
            <motion.div
              {...fadeUp(0.2)}
              className="mb-8 space-y-3"
            >
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                {subtitle}
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {hero.tagline}
              </p>
            </motion.div>

            {/* Focus areas */}
            <motion.div
              {...fadeUp(0.25)}
              className="mb-6 inline-flex rounded-full border border-card-border bg-card/50 px-4 py-2 text-sm text-muted backdrop-blur-sm"
            >
              {hero.badge}
            </motion.div>

            {/* Tech stack */}
            <motion.div
              {...fadeUp(0.3)}
              className="mb-10 flex flex-wrap gap-2"
            >
              {hero.techPills.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-card-border bg-card/40 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.35)}
              className="mb-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button href={hero.ctaPrimary.href} size="lg">
                <Code2 className="h-5 w-5" />
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary" size="lg">
                {hero.ctaSecondary.label}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.4)}
              className="grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-card-border bg-card/40 px-3 py-4 backdrop-blur-sm"
                >
                  <p className="text-lg font-bold gradient-text sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 flex justify-start lg:mt-12"
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
