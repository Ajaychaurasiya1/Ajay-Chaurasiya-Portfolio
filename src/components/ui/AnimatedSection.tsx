"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { SectionSceneVariant } from "@/components/ui/scene3d/SectionScene3D";

const SectionScene3D = dynamic(
  () =>
    import("@/components/ui/scene3d/SectionScene3D").then(
      (mod) => mod.SectionScene3D
    ),
  { ssr: false }
);

interface AnimatedSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  scene?: SectionSceneVariant;
}

export function AnimatedSection({
  id,
  children,
  className,
  scene,
}: AnimatedSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-14 sm:py-20",
        scene && "overflow-hidden",
        className
      )}
    >
      {scene && <SectionScene3D variant={scene} />}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className={cn(scene && "relative z-10")}
        style={scene ? { perspective: "1200px" } : undefined}
      >
        {children}
      </motion.div>
    </section>
  );
}
