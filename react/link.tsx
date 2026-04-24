/**
 * VelaPay Design System — Link (v1.0.0)
 *
 * Inline body-copy link with underline affordance.
 * Restores the link affordance that the global `a { text-decoration: none }`
 * reset strips. Use for any inline text link in body copy.
 *
 * Usage:
 *   import { Link } from "@vela/brand/react";
 *   <Link href="/docs">Read the docs</Link>
 */
import { cn } from "./cn";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  subtle?: boolean;
  children: ReactNode;
}

export function Link({ className, subtle, children, ...props }: LinkProps) {
  return (
    <a {...props} className={cn("link", subtle && "link--subtle", className)}>
      {children}
    </a>
  );
}
