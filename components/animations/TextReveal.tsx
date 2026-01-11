"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function TextReveal({
  children,
  delay = 0,
  className = "",
}: TextRevealProps) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={{
          hidden: {
            y: "100%",
          },
          visible: {
            y: 0,
            transition: {
              duration: 0.8,
              delay,
              ease: [0.25, 0.25, 0, 1],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
