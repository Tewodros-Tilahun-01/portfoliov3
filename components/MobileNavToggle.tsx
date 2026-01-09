"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileNavLinks from "./MobileNavLinks";

export default function MobileNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="size-10 grid place-items-center rounded-full bg-tertiary text-primary"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div
          className="absolute top-full left-4 right-4 mt-2 rounded-2xl bg-secondary border border-custom overflow-hidden"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) {
              setOpen(false);
            }
          }}
        >
          <MobileNavLinks />
        </div>
      )}
    </>
  );
}
