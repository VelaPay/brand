/**
 * VelaPay Design System — Pagination (v1.0.0)
 *
 * Page navigation. Renders prev, page buttons, ellipses, next.
 * Caller drives state.
 *
 * Usage:
 *   import { Pagination } from "@vela/brand/react";
 *   <Pagination page={page} pageCount={total} onChange={setPage} />
 */
import { cn } from "./cn";
import type { HTMLAttributes } from "react";

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  siblingCount?: number;
}

function range(from: number, to: number): number[] {
  const out: number[] = [];
  for (let i = from; i <= to; i++) out.push(i);
  return out;
}

function buildPages(page: number, pageCount: number, siblings: number): (number | "…")[] {
  const first = 1;
  const last = pageCount;
  const left = Math.max(page - siblings, first);
  const right = Math.min(page + siblings, last);
  const showLeftEllipsis = left > first + 1;
  const showRightEllipsis = right < last - 1;

  if (pageCount <= 7) return range(first, last);

  const pages: (number | "…")[] = [first];
  if (showLeftEllipsis) pages.push("…");
  pages.push(...range(Math.max(left, first + 1), Math.min(right, last - 1)));
  if (showRightEllipsis) pages.push("…");
  pages.push(last);
  return pages;
}

export function Pagination({
  className,
  page,
  pageCount,
  onChange,
  siblingCount = 1,
  ...props
}: PaginationProps) {
  const pages = buildPages(page, pageCount, siblingCount);
  return (
    <nav {...props} aria-label="Pagination" className={cn("pagination", className)}>
      <button
        type="button"
        className="pagination__btn"
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        ‹
      </button>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`e-${i}`} className="pagination__ellipsis" aria-hidden="true">…</span>
        ) : (
          <button
            key={p}
            type="button"
            className="pagination__btn"
            aria-current={p === page ? "page" : undefined}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        ),
      )}
      <button
        type="button"
        className="pagination__btn"
        onClick={() => onChange(page + 1)}
        disabled={page >= pageCount}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}
