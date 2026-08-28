import { useId } from "react";

interface GrainProps {
  className?: string;
  opacity?: number;
  fixed?: boolean;
}

export function Grain({ className = "", opacity = 0.05, fixed = true }: GrainProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      aria-hidden
      className={`pointer-events-none ${fixed ? "fixed" : "absolute"} inset-0 z-[55] ${className}`}
      style={{ opacity, mixBlendMode: "overlay" }}
    >
      <filter id={`grain-${id}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.82"
          numOctaves="2"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter={`url(#grain-${id})`} />
    </svg>
  );
}
