"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleOnTapProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export default function ScaleOnTap({
  children,
  className = "",
  scale = 1.05,
}: ScaleOnTapProps) {
  return (
    <motion.div className={className} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.div>
  );
}
