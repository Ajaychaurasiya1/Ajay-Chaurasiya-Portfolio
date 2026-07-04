"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedSection({
  id,
  children,
  className,
}: AnimatedSectionProps) {
  return (
    <section id={id} className={cn("relative py-14 sm:py-20", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
