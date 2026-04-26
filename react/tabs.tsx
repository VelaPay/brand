/**
 * VelaPay Design System — Tabs (v1.0.0)
 *
 * Headless tablist with `role="tablist"` + keyboard arrow-key
 * navigation. Caller drives controlled state.
 *
 * Usage:
 *   import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@vela/brand/react";
 *   const [tab, setTab] = useState("overview");
 *   <Tabs value={tab} onChange={setTab}>
 *     <TabList>
 *       <Tab value="overview">Overview</Tab>
 *       <Tab value="activity">Activity</Tab>
 *     </TabList>
 *     <TabPanels>
 *       <TabPanel value="overview">…</TabPanel>
 *       <TabPanel value="activity">…</TabPanel>
 *     </TabPanels>
 *   </Tabs>
 */
import { cn } from "./cn";
import {
  createContext,
  useContext,
  useId,
  useRef,
  type HTMLAttributes,
  type ReactNode,
  type KeyboardEvent,
} from "react";

interface TabsContextValue {
  value: string;
  onChange: (value: string) => void;
  orientation: "horizontal" | "vertical";
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tab primitives must be used inside <Tabs>");
  return ctx;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  children: ReactNode;
}

export function Tabs({
  value,
  onChange,
  orientation = "horizontal",
  className,
  children,
  ...props
}: TabsProps) {
  const baseId = useId();
  return (
    <TabsContext.Provider value={{ value, onChange, orientation, baseId }}>
      <div {...props} className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function TabList({ className, children, ...props }: TabListProps) {
  const { orientation } = useTabs();
  const ref = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const isHoriz = orientation === "horizontal";
    const next = isHoriz ? "ArrowRight" : "ArrowDown";
    const prev = isHoriz ? "ArrowLeft" : "ArrowUp";
    if (e.key !== next && e.key !== prev) return;
    const tabs = Array.from(ref.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? []);
    const currentIdx = tabs.findIndex((t) => t === document.activeElement);
    if (currentIdx === -1) return;
    const dir = e.key === next ? 1 : -1;
    const nextEl = tabs[(currentIdx + dir + tabs.length) % tabs.length];
    nextEl?.focus();
    e.preventDefault();
  };

  return (
    <div
      {...props}
      ref={ref}
      role="tablist"
      aria-orientation={orientation}
      onKeyDown={onKeyDown}
      className={cn("tabs", orientation === "vertical" && "tabs--vertical", className)}
    >
      {children}
    </div>
  );
}

export interface TabProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onSelect"> {
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

export function Tab({ value, className, children, disabled, ...props }: TabProps) {
  const { value: active, onChange, baseId } = useTabs();
  const selected = active === value;
  return (
    <button
      {...props}
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-selected={selected}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={selected ? 0 : -1}
      disabled={disabled}
      onClick={() => onChange(value)}
      className={cn("tab", className)}
    >
      {children}
    </button>
  );
}

export interface TabPanelsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function TabPanels({ className, children, ...props }: TabPanelsProps) {
  return <div {...props} className={className}>{children}</div>;
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

export function TabPanel({ value, className, children, ...props }: TabPanelProps) {
  const { value: active, baseId } = useTabs();
  if (active !== value) return null;
  return (
    <div
      {...props}
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      tabIndex={0}
      className={className}
    >
      {children}
    </div>
  );
}
