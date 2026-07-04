"use client";

import type { ReactNode } from "react";
import { FloatingShape } from "@/components/ui/scene3d/FloatingShape";
import { Scene3DCanvas } from "@/components/ui/scene3d/Scene3DCanvas";

export type SectionSceneVariant =
  | "about"
  | "skills"
  | "experience"
  | "education"
  | "contact";

interface SectionScene3DProps {
  variant: SectionSceneVariant;
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 2, 4]} intensity={0.5} color="#ef4444" />
      <pointLight position={[-3, -2, 3]} intensity={0.2} color="#ffffff" />
    </>
  );
}

const scenes: Record<SectionSceneVariant, ReactNode> = {
  about: (
    <>
      <SceneLights />
      <FloatingShape
        position={[-4, 1.5, -2]}
        scale={0.55}
        speed={[0.002, 0.003]}
        floatSpeed={1.1}
      >
        <octahedronGeometry args={[0.85, 0]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.16} />
      </FloatingShape>
      <FloatingShape
        position={[4.2, -1.8, -3]}
        scale={0.45}
        speed={[0.003, 0.002]}
        floatIntensity={0.4}
      >
        <torusGeometry args={[0.65, 0.18, 12, 24]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.08} />
      </FloatingShape>
    </>
  ),
  skills: (
    <>
      <SceneLights />
      <FloatingShape
        position={[3.8, 2, -2.5]}
        scale={0.5}
        speed={[0.002, 0.004]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.14} />
      </FloatingShape>
      <FloatingShape
        position={[-3.5, -2.2, -3]}
        scale={0.42}
        speed={[0.004, 0.002]}
        floatSpeed={1.2}
      >
        <icosahedronGeometry args={[0.75, 0]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.12} />
      </FloatingShape>
    </>
  ),
  experience: (
    <>
      <SceneLights />
      <FloatingShape
        position={[-4.5, 0.5, -2]}
        scale={0.48}
        speed={[0.003, 0.002]}
      >
        <dodecahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.13} />
      </FloatingShape>
      <FloatingShape
        position={[3.6, 2.2, -3.5]}
        scale={0.4}
        speed={[0.002, 0.003]}
        floatIntensity={0.35}
      >
        <torusGeometry args={[0.55, 0.15, 12, 24]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.07} />
      </FloatingShape>
    </>
  ),
  education: (
    <>
      <SceneLights />
      <FloatingShape
        position={[4, -1.5, -2.5]}
        scale={0.46}
        speed={[0.002, 0.003]}
        floatSpeed={1}
      >
        <octahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.14} />
      </FloatingShape>
      <FloatingShape
        position={[-3.2, 2.5, -3]}
        scale={0.38}
        speed={[0.003, 0.002]}
      >
        <icosahedronGeometry args={[0.65, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.08} />
      </FloatingShape>
    </>
  ),
  contact: (
    <>
      <SceneLights />
      <FloatingShape
        position={[-3.8, -1.2, -2]}
        scale={0.44}
        speed={[0.002, 0.004]}
        floatSpeed={1.3}
      >
        <torusKnotGeometry args={[0.4, 0.12, 48, 8]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.11} />
      </FloatingShape>
      <FloatingShape
        position={[4.2, 1.8, -3]}
        scale={0.36}
        speed={[0.003, 0.002]}
      >
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.1} />
      </FloatingShape>
    </>
  ),
};

export function SectionScene3D({ variant }: SectionScene3DProps) {
  return (
    <Scene3DCanvas className="opacity-45" viewportOnly>
      {scenes[variant]}
    </Scene3DCanvas>
  );
}
