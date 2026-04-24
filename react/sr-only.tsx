/**
 * VelaPay Design System — SrOnly (v1.0.0)
 *
 * Visually-hidden screen-reader text. Use for icon-button labels,
 * live-region announcements, and skip-link affordances.
 *
 * Usage:
 *   import { SrOnly } from "@vela/brand/react";
 *   <span className="badge-dot badge-dot-failed" aria-hidden="true" />
 *   <SrOnly>Payment failed</SrOnly>
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface SrOnlyProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function SrOnly({ className, children, ...props }: SrOnlyProps) {
  return (
    <span {...props} className={cn("sr-only", className)}>
      {children}
    </span>
  );
}
