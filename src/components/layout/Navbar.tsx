"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const observers = sectionIds
      .map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(id);
          },
          { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        observer.observe(element);
        return observer;
      })
      .filter(Boolean);

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-card-border/60 bg-background/90 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="flex h-14 w-full items-center px-4 sm:h-16 sm:px-6 lg:px-10 xl:px-16">
          {/* Left: Logo */}
          <div className="flex flex-1 items-center">
            <a
              href="#home"
              className="group flex items-center gap-2.5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-600/20 to-red-500/10 text-xs font-bold text-accent transition-transform group-hover:scale-105 sm:h-10 sm:w-10 sm:rounded-xl sm:text-sm">
                AC
              </div>
              <div className="hidden min-w-0 lg:block">
                <p className="text-sm font-bold leading-tight text-foreground">
                  {portfolioData.name}
                </p>
                <p className="text-xs text-muted">{portfolioData.title}</p>
              </div>
            </a>
          </div>

          {/* Center: Desktop nav */}
          <ul className="hidden shrink-0 items-center md:flex">
            {navLinks.map((link, i) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href} className="flex items-center">
                  {i > 0 && (
                    <span className="mx-1 h-3 w-px bg-card-border/80 lg:mx-1.5" />
                  )}
                  <a
                    href={link.href}
                    className={cn(
                      "relative px-2 py-1 text-xs font-medium transition-colors lg:px-2.5 lg:text-sm",
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-red-600 to-red-500"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA + mobile toggle */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-red-600/25 transition-all hover:opacity-90 md:inline-flex"
            >
              Hire Me
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border/50 bg-card/40 text-foreground transition-colors hover:bg-card md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 flex h-full w-[min(100%,320px)] flex-col border-l border-card-border bg-background shadow-2xl md:hidden"
            >
              {/* Mobile header */}
              <div className="flex h-14 items-center justify-between border-b border-card-border/50 px-5">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="flex items-center gap-2"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-600/20 to-red-500/10 text-xs font-bold text-accent">
                    AC
                  </div>
                  <span className="text-sm font-bold text-foreground">
                    {portfolioData.name.split(" ")[0]}
                  </span>
                </a>
                <button
                  onClick={closeMenu}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile links */}
              <ul className="flex-1 overflow-y-auto px-4 py-4">
                {navLinks.map((link, i) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-gradient-to-r from-red-600/15 to-red-500/10 text-foreground"
                            : "text-muted hover:bg-foreground/5 hover:text-foreground"
                        )}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 shrink-0 rounded-full",
                            isActive
                              ? "bg-gradient-to-r from-red-600 to-red-500"
                              : "bg-card-border"
                          )}
                        />
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile footer */}
              <div className="border-t border-card-border/50 p-4">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-4 py-3 text-sm font-medium text-white"
                >
                  Hire Me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-center text-xs text-muted">
                  {portfolioData.title}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
