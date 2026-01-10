import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
}

export function Progress({ value, className, ...props }: ProgressProps) {
  return (
    <div
      {...props}
      className={cn("h-0.5 w-full rounded-full bg-tertiary", className)}
    >
      <div
        className="h-0.5 rounded-full bg-accent"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
