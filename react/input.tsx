/**
 * VelaPay Design System — Form primitives (v1.0.0)
 *
 * InputField / Textarea / Select — all map to `.input-field`
 * in `@vela/brand/components.css`, which adapts via semantic
 * tokens (light/dark) and applies the shared focus ring.
 *
 * Pass `error={true}` to apply `.input-field--error`. Consumer
 * should also add `aria-invalid` + `aria-describedby` pointing
 * to the `<InputHelper variant="error">` node.
 *
 * Usage:
 *   import { InputField, Textarea, Select, InputHelper } from "@vela/brand/react";
 *   <InputField placeholder="Amount…" />
 *   <Textarea rows={4} placeholder="Notes…" />
 *   <Select><option>…</option></Select>
 *   <InputHelper variant="error">Required field</InputHelper>
 */
import { cn } from "./cn";
import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function InputField({ className, error, ...props }: InputFieldProps) {
  return (
    <input
      {...props}
      aria-invalid={error ? true : props["aria-invalid"]}
      className={cn("input-field", error && "input-field--error", className)}
    />
  );
}

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      aria-invalid={error ? true : props["aria-invalid"]}
      className={cn("input-field", error && "input-field--error", className)}
    />
  );
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  children: ReactNode;
}

export function Select({ className, error, children, ...props }: SelectProps) {
  return (
    <select
      {...props}
      aria-invalid={error ? true : props["aria-invalid"]}
      className={cn("input-field", error && "input-field--error", className)}
    >
      {children}
    </select>
  );
}

export interface InputHelperProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "error";
  children: ReactNode;
}

export function InputHelper({
  className,
  variant = "default",
  children,
  ...props
}: InputHelperProps) {
  return (
    <p
      {...props}
      className={cn(
        "input-helper",
        variant === "error" && "input-helper--error",
        className,
      )}
    >
      {children}
    </p>
  );
}
