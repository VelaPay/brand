/**
 * VelaPay Design System — Tooltip (v1.0.0)
 *
 * Visual-only tooltip shell. No positioning engine — compose with
 * Floating UI / Radix Tooltip in the consuming app for anchor
 * logic + show/hide semantics.
 *
 * Usage:
 *   import { Tooltip } from "@vela/brand/react";
 *   <div role="tooltip" id="t1"><Tooltip>Copy to clipboard</Tooltip></div>
 *   <button aria-describedby="t1">Copy</button>
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Tooltip({ className, children, ...props }: TooltipProps) {
  return (
    <div {...props} role="tooltip" className={cn("tooltip", className)}>
      {children}
    </div>
  );
}
