"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LineByLineRevealProps {
  children: string;
  delay?: number;
  className?: string;
  staggerDelay?: number;
  insideClass?: string;
}

export default function LineByLineReveal({
  children,
  delay = 0,
  className = "tracking-tight",
  staggerDelay = 0.1,
  insideClass,
}: LineByLineRevealProps) {
  // Split text into words and group them into lines based on screen size
  const words = children.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block overflow-hidden"
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          <motion.span
            className={`inline-block  ${insideClass}`}
            variants={{
              hidden: {
                y: "100%",
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.1,
                  ease: [0.25, 0.25, 0, 1],
                },
              },
            }}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
          </motion.span>
        </motion.span>
      ))}
    </motion.span>
  );
}
