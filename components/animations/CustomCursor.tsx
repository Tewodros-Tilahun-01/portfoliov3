"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CustomCursorProps {
  size?: number;
  expandWidth?: number;
}

export default function CustomCursor({
  size = 30,
  expandWidth = 55,
}: CustomCursorProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 });

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) return;

      const cursorStyle = window.getComputedStyle(e.target).cursor;
      setIsPointer(cursorStyle === "pointer");

      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className={`
    fixed top-0 left-0 z-[9999]
    pointer-events-none
    rounded-full
    box-border
    border border-cyan-300
    
   
  `}
      style={{
        translateX: smoothX,
        translateY: smoothY,
        x: "-50%",
        y: "-50%",
      }}
      animate={{
        width: isPointer ? expandWidth : size,
        height: isPointer ? expandWidth : size,
        borderRadius: "50%",
        backgroundColor: isPointer ? "" : "#78cc6d",
        opacity: 0.3,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    />
  );
}
