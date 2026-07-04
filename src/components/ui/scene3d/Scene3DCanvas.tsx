"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Scene3DCanvasProps {
  children: ReactNode;
  className?: string;
  camera?: {
    position: [number, number, number];
    fov: number;
  };
  fixed?: boolean;
  viewportOnly?: boolean;
}

export function Scene3DCanvas({
  children,
  className,
  camera = { position: [0, 0, 8], fov: 42 },
  fixed = false,
  viewportOnly = false,
}: Scene3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(true);
  const [inView, setInView] = useState(!viewportOnly);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setEnabled(!prefersReducedMotion);
  }, []);

  useEffect(() => {
    if (!viewportOnly || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [viewportOnly]);

  if (!enabled) return null;

  const showCanvas = !viewportOnly || inView;

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none inset-0",
        fixed ? "fixed -z-10" : "absolute",
        className
      )}
      aria-hidden="true"
    >
      {showCanvas && (
        <Canvas
          camera={camera}
          dpr={[1, 1.25]}
          gl={{ alpha: true, antialias: true }}
        >
          {children}
        </Canvas>
      )}
    </div>
  );
}
