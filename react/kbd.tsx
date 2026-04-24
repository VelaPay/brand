/**
 * VelaPay Design System — Kbd (v1.0.0)
 *
 * Styled keyboard key hint.
 *
 * Usage:
 *   import { Kbd } from "@vela/brand/react";
 *   Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open search.
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd {...props} className={cn("kbd", className)}>
      {children}
    </kbd>
  );
}
