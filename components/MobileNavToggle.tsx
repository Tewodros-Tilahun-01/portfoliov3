"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileNavLinks from "./MobileNavLinks";
import ThemeToggle from "./ThemeToggle";

export default function MobileNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-0 items-center">
      <ThemeToggle />
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="size-15 grid place-items-center rounded-full bg-tertiary text-primary"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div
          className="absolute top-full left-4 right-4 mt-2 rounded-2xl bg-secondary border border-custom overflow-hidden bg-[linear-gradient(120deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0))] "
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) {
              setOpen(false);
            }
          }}
        >
          <MobileNavLinks />
        </div>
      )}
    </div>
  );
}
