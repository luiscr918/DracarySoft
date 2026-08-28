import { useId, type ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";

interface BrandIconProps {
  icon: ComponentType<IconProps>;
  from?: string;
  to?: string;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
}

export function BrandIcon({
  icon: Icon,
  from = "#5DADE2",
  to = "var(--color-text)",
  size = 24,
  weight = "regular",
  className,
}: BrandIconProps) {
  const id = useId().replace(/:/g, "");
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
        <defs>
          <linearGradient id={`bi-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
      </svg>
      <Icon
        size={size}
        weight={weight}
        color={`url(#bi-${id})`}
        className={className}
      />
    </>
  );
}
