"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSkillBarProps {
  name: string;
  percent: number;
  icon: ReactNode;
}

export default function AnimatedSkillBar({
  name,
  percent,
  icon,
}: AnimatedSkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between py-2 px-4 rounded-lg bg-tertiary/50"
    >
      <div className="flex items-center gap-3">
        <div className="text-accent-primary">{icon}</div>
        <span className="text-primary font-medium">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-20 h-2 bg-border-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent-primary rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: `${percent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
          />
        </div>
        <span className="text-sm text-secondary w-10 text-right">
          {percent}%
        </span>
      </div>
    </motion.div>
  );
}
