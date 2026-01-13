"use client";

import { motion } from "framer-motion";

interface AnimatedLanguageRowProps {
  name: string;
  percent: number;
  flag: string;
}

function DotsProgress({
  percent,
  total = 6,
}: {
  percent: number;
  total?: number;
}) {
  const filled = Math.floor((percent / 100) * total);
  const dots = Array.from({ length: total }, (_, i) => i < filled);
  return (
    <div className="flex items-center gap-2">
      {dots.map((isFilled, i) => (
        <motion.span
          key={i}
          className="inline-block size-3 rounded-full"
          initial={{
            backgroundColor: "var(--border-secondary)",
            scale: 0.8,
          }}
          whileInView={{
            backgroundColor: isFilled ? "#61CE78" : "var(--border-secondary)",
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: i * 0.1 + 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function AnimatedLanguageRow({
  name,
  percent,
  flag,
}: AnimatedLanguageRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-2 gap-8 py-1 w-full max-w-md"
    >
      <div className="flex items-center gap-4">
        <div className="grid place-items-center size-10 rounded-xl text-lg">
          <span aria-hidden>{flag}</span>
        </div>
        <div className="text-primary">{name}</div>
      </div>
      <div className="flex items-center gap-2 col-span-2">
        <DotsProgress percent={percent} />
        <div className="w-10 text-right text-secondary text-sm">{percent}%</div>
      </div>
    </motion.div>
  );
}
