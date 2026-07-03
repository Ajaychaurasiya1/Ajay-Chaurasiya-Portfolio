"use client";

import { FloatingShape } from "@/components/ui/scene3d/FloatingShape";
import { Scene3DCanvas } from "@/components/ui/scene3d/Scene3DCanvas";

function HeroScene() {
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
  return (
    <Scene3DCanvas className="opacity-80">
      <HeroScene />
    </Scene3DCanvas>
  );
}
