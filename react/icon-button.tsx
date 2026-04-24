/**
 * VelaPay Design System — IconButton (v1.0.0)
 *
 * Icon-only button that REQUIRES `aria-label` at the type level.
 * Maps to `.btn-icon` in `@vela/brand/components.css`.
 *
 * Usage:
 *   import { IconButton } from "@vela/brand/react";
 *   <IconButton aria-label="Close dialog"><XIcon /></IconButton>
 */
import { cn } from "./cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required — describes the button's action for screen readers. */
  "aria-label": string;
  children: ReactNode;
}

export function IconButton({
  className,
  children,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn("btn-icon", className)}
    >
      {children}
    </button>
  );
}
