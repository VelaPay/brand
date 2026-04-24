/**
 * VelaPay Design System — Field (v1.0.0)
 *
 * Vertical wrapper composing .field + .input-label + children +
 * .input-helper (optional) + error helper (optional).
 *
 * Usage:
 *   import { Field, InputField } from "@vela/brand/react";
 *   <Field label="Email" helper="We'll never share it" htmlFor="email">
 *     <InputField id="email" type="email" />
 *   </Field>
 *
 *   <Field label="Password" error="Must be 8+ characters" htmlFor="password">
 *     <InputField id="password" type="password" error />
 *   </Field>
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";
import { InputHelper } from "./input";

export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  /** Points to the `id` of the wrapped input (for <label for>) */
  htmlFor?: string;
  helper?: ReactNode;
  error?: ReactNode;
  children: ReactNode;
}

export function Field({
  className,
  label,
  htmlFor,
  helper,
  error,
  children,
  ...props
}: FieldProps) {
  return (
    <div {...props} className={cn("field", className)}>
      {label && (
        <label className="input-label" htmlFor={htmlFor}>
          {label}
        </label>
      )}
      {children}
      {error ? (
        <InputHelper variant="error">{error}</InputHelper>
      ) : helper ? (
        <InputHelper>{helper}</InputHelper>
      ) : null}
    </div>
  );
}
