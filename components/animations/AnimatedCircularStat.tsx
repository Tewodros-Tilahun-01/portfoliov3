"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { ReactNode } from "react";

interface AnimatedCircularStatProps {
  name: string;
  percent: number;
  icon: ReactNode;
  color?: string;
}

export default function AnimatedCircularStat({
  name,
  percent,
  icon,
  color,
}: AnimatedCircularStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="aspect-square p-0">
        <div className="h-full w-full flex flex-col items-center justify-center gap-1">
          <div className="relative size-16">
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{
                background: `conic-gradient(#61CE78 0deg, transparent 0)`,
              }}
              whileInView={{
                background: `conic-gradient(#61CE78 ${
                  percent * 3.6
                }deg, transparent 0)`,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            />
            <div
              className="absolute inset-1 p-2 rounded-full bg-tertiary flex flex-col justify-center items-center"
              style={{ color: color }}
            >
              {icon}
              <motion.div
                className="text-xs text-primary relative top-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.4 }}
              >
                {percent}%
              </motion.div>
            </div>
          </div>
          <motion.div
            className="text-sm text-primary sm:mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            {name}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
