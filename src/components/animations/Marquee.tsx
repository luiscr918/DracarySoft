import type { CSSProperties, ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  gap?: string;
}

export function Marquee({
  children,
  speed = 32,
  className,
  gap = "2.5rem",
}: MarqueeProps) {
  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${speed}s` } as CSSProperties}
      >
        <div className="flex shrink-0" style={{ gap, paddingRight: gap }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap, paddingRight: gap }}>
          {children}
        </div>
      </div>
    </div>
  );
}
