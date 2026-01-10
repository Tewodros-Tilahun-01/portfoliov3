import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center gap-2 text-lg mb-4 tracking-wider uppercase bg-transparent text-secondary border border-custom px-3 py-1 rounded-full",
        className
      )}
    />
  );
}
