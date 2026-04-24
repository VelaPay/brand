/**
 * VelaPay Design System — Slider (v1.0.2)
 *
 * Custom-styled range input with label + value display.
 * Track fill color follows --accent (flips inside .theme-privacy).
 *
 * Usage:
 *   import { Slider } from "@vela/brand/react";
 *   <Slider
 *     label="Amount per pull"
 *     value={amount}
 *     min={1}
 *     max={1000}
 *     step={1}
 *     onChange={setAmount}
 *     format={(n) => `$${n.toFixed(2)}`}
 *     unit="USDC"
 *   />
 */
import { cn } from "./cn";
import type { CSSProperties, ReactNode, InputHTMLAttributes } from "react";

export interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "type" | "value" | "min" | "max" | "step"> {
  label?: ReactNode;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  format?: (value: number) => string;
  unit?: ReactNode;
}

export function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  format,
  unit,
  className,
  id,
  ...inputProps
}: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  const style = { "--pct": `${pct}%` } as CSSProperties;
  const display = format ? format(value) : String(value);

  return (
    <div className={cn("range-slider-wrap", className)}>
      {(label || unit || format) && (
        <div className="range-slider-wrap__row">
          {label && <label className="range-slider-wrap__label" htmlFor={id}>{label}</label>}
          <div className="range-slider-wrap__value">
            {display}
            {unit && <span className="range-slider-wrap__value-unit">{unit}</span>}
          </div>
        </div>
      )}
      <input
        {...inputProps}
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-slider"
        style={style}
      />
    </div>
  );
}
