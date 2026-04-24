/**
 * VelaPay Design System — Input primitive.
 *
 * Zero-dependency input component matching `.input-field` in
 * `@vela/brand/components.css`.
 *
 * Usage:
 *   import { InputField } from "@vela/brand/react/input";
 *   <InputField placeholder="Enter amount..." />
 */
import { cn } from "./cn";
import type { InputHTMLAttributes } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputField({ className, ...props }: InputFieldProps) {
  return (
    <input
      {...props}
      className={cn("input-field", className)}
    />
  );
}
