"use client";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, type ReactNode } from "react";
import type { Mesh } from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  scale?: number;
  speed?: [number, number];
  floatSpeed?: number;
  floatIntensity?: number;
  children: ReactNode;
}

export function FloatingShape({
  position,
  scale = 1,
  speed = [0.004, 0.006],
  floatSpeed = 1.5,
  floatIntensity = 0.6,
  children,
}: FloatingShapeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += speed[0];
    meshRef.current.rotation.y += speed[1];
  });

  return (
    <Float
      speed={floatSpeed}
      rotationIntensity={0.35}
      floatIntensity={floatIntensity}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {children}
      </mesh>
    </Float>
  );
}
