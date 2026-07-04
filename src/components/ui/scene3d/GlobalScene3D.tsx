"use client";

import { FloatingShape } from "@/components/ui/scene3d/FloatingShape";
import { Scene3DCanvas } from "@/components/ui/scene3d/Scene3DCanvas";

function GlobalScene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 4]} intensity={0.7} color="#ef4444" />
      <pointLight position={[-4, -2, 2]} intensity={0.25} color="#ffffff" />

      <FloatingShape position={[-3.5, 1.5, -1.5]} scale={1} speed={[0.003, 0.005]}>
        <torusGeometry args={[0.85, 0.26, 18, 36]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.22} />
      </FloatingShape>

      <FloatingShape position={[3.8, -0.6, -2.5]} scale={0.9} speed={[0.004, 0.003]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.18} />
      </FloatingShape>

      <FloatingShape position={[0.8, 2.4, -3.5]} scale={0.7} speed={[0.003, 0.006]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.1} />
      </FloatingShape>

      <FloatingShape position={[-2, -2.2, -3]} scale={0.6} speed={[0.005, 0.004]}>
        <boxGeometry args={[1.1, 1.1, 1.1]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.15} />
      </FloatingShape>

      <FloatingShape position={[2.5, 2, -4.5]} scale={0.5} speed={[0.003, 0.005]}>
        <dodecahedronGeometry args={[0.65, 0]} />
        <meshStandardMaterial
          color="#ef4444"
          emissive="#7f1d1d"
          emissiveIntensity={0.3}
          metalness={0.55}
          roughness={0.4}
          transparent
          opacity={0.3}
        />
      </FloatingShape>

      <FloatingShape
        position={[-4.2, -1.8, -5]}
        scale={0.45}
        speed={[0.002, 0.004]}
        floatSpeed={1.2}
      >
        <torusKnotGeometry args={[0.45, 0.13, 48, 8]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.07} />
      </FloatingShape>
    </>
  );
}

export function GlobalScene3D() {
  return (
    <Scene3DCanvas fixed className="opacity-55">
      <GlobalScene />
    </Scene3DCanvas>
  );
}
