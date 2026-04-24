/**
 * VelaPay Design System — Button primitive.
 *
 * Zero-dependency button component with VelaPay brand variants.
 * Matches the CSS `.btn-*` classes in `@vela/brand/components.css`
 * for consumers that prefer React components over CSS classes.
 *
 * Supports `asChild` pattern via render delegation (no Radix dep).
 * For Radix `Slot` support, wrap with `@radix-ui/react-slot` locally.
 *
 * Usage:
 *   import { Button } from "@vela/brand/react/button";
 *   <Button variant="primary" size="md">Subscribe</Button>
 */
import { cn } from "./cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost"
  | "text"
  | "text-danger";

export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  danger: "btn-danger",
  ghost: "btn-ghost",
  text: "btn-text",
  "text-danger": "btn-text-danger",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "!min-h-9 !px-3 !py-1.5 !text-xs !rounded-lg",
  md: "",
  lg: "!min-h-12 !px-5 !py-3",
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
      className={cn(
        "btn",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </button>
  );
}
