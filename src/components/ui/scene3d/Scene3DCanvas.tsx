"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Scene3DCanvasProps {
  children: ReactNode;
  className?: string;
  camera?: {
    position: [number, number, number];
    fov: number;
  };
}

export function Scene3DCanvas({
  children,
  className,
  camera = { position: [0, 0, 8], fov: 42 },
}: Scene3DCanvasProps) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setEnabled(!prefersReducedMotion);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0",
        className
      )}
      aria-hidden="true"
    >
      <Canvas
        camera={camera}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        {children}
      </Canvas>
    </div>
  );
}
