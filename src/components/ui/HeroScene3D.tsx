"use client";

import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  scale?: number;
  speed?: [number, number];
  children: React.ReactNode;
}

function FloatingShape({
  position,
  scale = 1,
  speed = [0.004, 0.006],
  children,
}: FloatingShapeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += speed[0];
    meshRef.current.rotation.y += speed[1];
  });

  return (
    <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {children}
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={0.8} color="#ef4444" />
      <pointLight position={[-4, -2, 2]} intensity={0.3} color="#ffffff" />

      <FloatingShape position={[-3.2, 1.2, -1]} scale={1.1} speed={[0.003, 0.005]}>
        <torusGeometry args={[0.9, 0.28, 20, 40]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.28} />
      </FloatingShape>

      <FloatingShape position={[3.4, -0.4, -2]} scale={0.95} speed={[0.005, 0.003]}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.22} />
      </FloatingShape>

      <FloatingShape position={[0.5, 2.2, -3]} scale={0.75} speed={[0.004, 0.007]}>
        <octahedronGeometry args={[0.85, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.12} />
      </FloatingShape>

      <FloatingShape position={[-1.5, -2, -2.5]} scale={0.65} speed={[0.006, 0.004]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.18} />
      </FloatingShape>

      <FloatingShape position={[2.2, 1.8, -4]} scale={0.55} speed={[0.003, 0.006]}>
        <dodecahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#ef4444"
          emissive="#7f1d1d"
          emissiveIntensity={0.35}
          metalness={0.6}
          roughness={0.35}
          transparent
          opacity={0.35}
        />
      </FloatingShape>
    </>
  );
}

export function HeroScene3D() {
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
      className="pointer-events-none absolute inset-0 opacity-80"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
