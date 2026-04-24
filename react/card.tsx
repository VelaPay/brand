/**
 * VelaPay Design System — Card primitives (v1.0.0)
 *
 * SurfaceCard  → `.card`       — 20px radius, hover lift
 * PanelCard    → `.panel-card` — 24px radius, subtle gradient
 *
 * Pass `interactive` to SurfaceCard to signal clickability
 * (adds `cursor: pointer` + `:focus-within` ring).
 *
 * Usage:
 *   import { SurfaceCard, PanelCard } from "@vela/brand/react";
 *   <SurfaceCard>…</SurfaceCard>
 *   <SurfaceCard interactive onClick={…}>…</SurfaceCard>
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface SurfaceCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
}

export function SurfaceCard({
  className,
  children,
  interactive = false,
  ...props
}: SurfaceCardProps) {
  return (
    <div
      {...props}
      className={cn("card", interactive && "card--interactive", className)}
    >
      {children}
    </div>
  );
}

export interface PanelCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function PanelCard({ className, children, ...props }: PanelCardProps) {
  return (
    <div {...props} className={cn("panel-card", className)}>
      {children}
    </div>
  );
}
