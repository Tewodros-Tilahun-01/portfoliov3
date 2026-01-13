"use client";

import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#stacks", label: "Stacks" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNavLinks() {
  return (
    <motion.ul
      className="py-2"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {NAV_LINKS.map((l, index) => (
        <motion.li
          key={l.href}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.2, ease: "easeOut" },
            },
          }}
        >
          <a
            href={l.href}
            className="block px-4 py-3 text-primary hover:bg-accent hover:text-accent-secondary transition-colors"
          >
            {l.label}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
