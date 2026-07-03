"use client";

import { FloatingShape } from "@/components/ui/scene3d/FloatingShape";
import { Scene3DCanvas } from "@/components/ui/scene3d/Scene3DCanvas";

function ProjectsScene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 3, 4]} intensity={0.65} color="#ef4444" />
      <pointLight position={[-5, -3, 3]} intensity={0.25} color="#ffffff" />

      <FloatingShape
        position={[-4.5, 2.5, -1.5]}
        scale={0.85}
        speed={[0.002, 0.004]}
        floatSpeed={1.2}
      >
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.2} />
      </FloatingShape>

      <FloatingShape
        position={[4.2, 1.8, -2]}
        scale={0.7}
        speed={[0.003, 0.002]}
        floatSpeed={1.4}
      >
        <torusGeometry args={[0.75, 0.22, 16, 32]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.18} />
      </FloatingShape>

      <FloatingShape
        position={[-2.8, -2.2, -2.5]}
        scale={0.6}
        speed={[0.004, 0.003]}
      >
        <octahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.1} />
      </FloatingShape>

      <FloatingShape
        position={[1.5, -2.8, -3]}
        scale={0.55}
        speed={[0.002, 0.005]}
        floatSpeed={1.1}
      >
        <icosahedronGeometry args={[0.95, 0]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.15} />
      </FloatingShape>

      <FloatingShape
        position={[3.8, -1.2, -4]}
        scale={0.5}
        speed={[0.003, 0.004]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#ef4444"
          emissive="#7f1d1d"
          emissiveIntensity={0.3}
          metalness={0.55}
          roughness={0.4}
          transparent
          opacity={0.28}
        />
      </FloatingShape>

      <FloatingShape
        position={[-1.2, 3, -3.5]}
        scale={0.45}
        speed={[0.005, 0.002]}
        floatIntensity={0.45}
      >
        <dodecahedronGeometry args={[0.65, 0]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.12} />
      </FloatingShape>

      <FloatingShape
        position={[0.2, 0.5, -5]}
        scale={0.4}
        speed={[0.002, 0.003]}
        floatSpeed={0.9}
      >
        <torusKnotGeometry args={[0.5, 0.14, 64, 8]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.08} />
      </FloatingShape>
    </>
  );
}

export function ProjectsScene3D() {
  return (
    <Scene3DCanvas className="opacity-60">
      <ProjectsScene />
    </Scene3DCanvas>
  );
}
