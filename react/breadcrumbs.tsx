/**
 * VelaPay Design System — Breadcrumbs (v1.0.0)
 *
 * Navigation trail. Last item is marked `aria-current="page"`.
 *
 * Usage:
 *   import { Breadcrumbs } from "@vela/brand/react";
 *   <Breadcrumbs
 *     items={[
 *       { label: "Dashboard", href: "/" },
 *       { label: "Invoices", href: "/invoices" },
 *       { label: "INV-2043" },
 *     ]}
 *   />
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: ReactNode;
}

export function Breadcrumbs({
  className,
  items,
  separator = "/",
  ...props
}: BreadcrumbsProps) {
  return (
    <nav {...props} aria-label="Breadcrumb" className={className}>
      <ol className={cn("breadcrumbs")}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={i}
              className="breadcrumbs__item"
              {...(isLast ? { "aria-current": "page" } : {})}
            >
              {item.href && !isLast ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
              {!isLast && <span className="breadcrumbs__separator" aria-hidden="true">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
