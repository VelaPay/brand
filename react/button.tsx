/**
 * VelaPay Design System — Button primitive (v1.0.0)
 *
 * Pill button (999px radius) in vela-web's visual language.
 * All sizes enforce WCAG-safe min-height via --control-* tokens.
 * Maps to `.btn-*` classes in `@vela/brand/components.css`.
 *
 * Usage:
 *   import { Button } from "@vela/brand/react";
 *   <Button variant="primary">Start building</Button>
 *   <Button variant="brand" size="lg">Subscribe</Button>
 *   <Button variant="danger" disabled>Delete</Button>
 */
import { cn } from "./cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"       // ink-950 → brand-600 on hover (default)
  | "brand"         // brand-700 solid fill, for brand-forward CTAs
  | "ghost"         // transparent + border
  | "danger"        // destructive fill
  | "text"          // underlined text link styled as button
  | "text-danger";

export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:       "btn-primary",
  brand:         "btn-brand",
  ghost:         "btn-ghost",
  danger:        "btn-danger",
  text:          "btn-text",
  "text-danger": "btn-text-danger",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn("btn", variantClasses[variant], sizeClasses[size], className)}
    >
      {children}
    </button>
  );
}
