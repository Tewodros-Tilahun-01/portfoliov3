"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileNavLinks from "./MobileNavLinks";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-3 items-center">
      <ThemeToggle />
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="size-13 grid place-items-center rounded-full bg-tertiary text-primary"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-2 rounded-2xl bg-secondary border border-custom overflow-hidden bg-[linear-gradient(120deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0))]"
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) {
                setOpen(false);
              }
            }}
          >
            <MobileNavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
