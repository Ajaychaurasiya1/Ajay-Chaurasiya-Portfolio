"use client";

import dynamic from "next/dynamic";

const GlobalScene3D = dynamic(
  () =>
    import("@/components/ui/scene3d/GlobalScene3D").then(
      (mod) => mod.GlobalScene3D
    ),
  { ssr: false }
);

export function PageBackground() {
  return (
    <>
      <GlobalScene3D />
      <div
        className="pointer-events-none fixed inset-0 -z-10 grid-pattern opacity-30"
        aria-hidden="true"
      />
    </>
  );
}
