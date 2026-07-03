"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
  className?: string;
}

export function SkillBar({ name, level, index, className }: SkillBarProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-card-border/50">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
