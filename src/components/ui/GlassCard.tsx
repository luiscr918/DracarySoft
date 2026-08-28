import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  glow,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass rounded-[var(--radius-card)] ${
        hover ? "transition-all duration-300" : ""
      } ${className ?? ""}`}
      onMouseEnter={
        hover && glow
          ? (e) => {
              const el = e.currentTarget;
              el.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 48px ${glow}`;
              el.style.borderColor = "var(--color-line-strong)";
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? (e) => {
              const el = e.currentTarget;
              el.style.boxShadow = "";
              el.style.borderColor = "";
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
