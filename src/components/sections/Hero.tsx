"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
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
        <div className="mx-auto max-w-3xl">
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
