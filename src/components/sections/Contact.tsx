"use client";

import { motion } from "framer-motion";
import {
  Handshake,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/ui/SocialIcons";

const iconMap = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
  email: MailIcon,
};

export function Contact() {
  const { contactSection, socialLinks } = portfolioData;

  return (
    <AnimatedSection id="contact">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeading
          title="Get In Touch"
          subtitle="Available for roles, projects, and meaningful collaborations"
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
            {contactSection.tagline}
          </p>
          <p className="leading-relaxed text-muted">
            {contactSection.description}
          </p>
        </TiltCard>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-4 gap-2 sm:gap-4">
          {contactSection.stats.map((stat, i) => (
            <TiltCard
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              maxTilt={8}
              className="flex min-h-[88px] flex-col items-center justify-center rounded-2xl border border-card-border bg-card/30 p-4 text-center backdrop-blur-sm sm:min-h-[96px] sm:p-5"
            >
              <p className="text-xl font-bold gradient-text sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </TiltCard>
          ))}
        </div>

        {/* Main contact grid */}
        <div className="mb-12 grid grid-cols-2 items-stretch gap-4 lg:gap-8">
          {/* Left: social */}
          <div className="flex flex-col gap-6">
            <TiltCard
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              maxTilt={8}
              className="flex flex-1 flex-col rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm sm:p-7"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {socialLinks.map((link, i) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target={link.icon !== "email" ? "_blank" : undefined}
                      rel={
                        link.icon !== "email"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex h-full min-h-[68px] items-center gap-2 rounded-xl border border-card-border bg-background/30 p-3 transition-colors hover:border-red-500/40 hover:bg-card sm:min-h-[76px] sm:gap-3 sm:p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600/20 to-red-500/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground">{link.name}</p>
                        <p className="truncate text-xs text-muted sm:text-sm">
                          {link.handle}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </TiltCard>
          </div>

          {/* Right: contact form */}
          <TiltCard
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            maxTilt={8}
            className="h-full"
          >
            <div className="flex h-full flex-col rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm sm:p-7">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">
                  Send a Message
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Fill out the form below and I&apos;ll get back to you as soon as
                  possible. For quicker responses, reach me via email or LinkedIn.
                </p>
              </div>
              <ContactForm />
            </div>
          </TiltCard>
        </div>

        {/* Open to: full width, uniform cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-6 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <Handshake className="h-4 w-4" />
            Open To
          </h3>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {contactSection.reasons.map((reason, i) => (
              <TiltCard
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                maxTilt={7}
                className="flex h-full min-h-[140px] flex-col rounded-2xl border border-card-border bg-card/50 p-5 backdrop-blur-sm"
              >
                <h4 className="mb-2 font-semibold text-foreground">
                  {reason.title}
                </h4>
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {reason.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
