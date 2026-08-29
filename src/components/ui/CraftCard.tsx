import type { HTMLAttributes } from "react";
import { Grain } from "./Grain";

function CornerTicks() {
  const base =
    "pointer-events-none absolute w-3.5 h-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100";
  const c = "rgba(93,173,226,0.55)";
  return (
    <>
      <span
        className={`${base} top-3 left-3 border-t border-l`}
        style={{ borderColor: c }}
      />
      <span
        className={`${base} top-3 right-3 border-t border-r`}
        style={{ borderColor: c }}
      />
      <span
        className={`${base} bottom-3 left-3 border-b border-l`}
        style={{ borderColor: c }}
      />
      <span
        className={`${base} bottom-3 right-3 border-b border-r`}
        style={{ borderColor: c }}
      />
    </>
  );
}

interface CraftCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: string;
  hover?: boolean;
}

export function CraftCard({
  children,
  className,
  glow,
  hover = true,
  ...rest
}: CraftCardProps) {
  return (
    <div
      {...rest}
      className={`glass group relative overflow-hidden rounded-[var(--radius-card)] ${
        hover ? "transition-all duration-300 hover:-translate-y-1" : ""
      } ${className ?? ""}`}
      onMouseEnter={
        hover && glow
          ? (e) => {
              const el = e.currentTarget;
              el.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px ${glow}`;
              el.style.borderColor = "rgba(255,255,255,0.16)";
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
      <Grain opacity={0.05} fixed={false} />
      <CornerTicks />
      {children}
    </div>
  );
}
