"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const directionOffset = {
    up: 40,
    down: -40,
    left: 40,
    right: -40,
  };

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        [axis]: directionOffset[direction] 
      }}
      animate={isInView ? { 
        opacity: 1, 
        [axis]: 0 
      } : {}}
      transition={{
        type: "spring",
        stiffness: 100, // Spring Physics custom curve
        damping: 20,
        mass: 1,
        delay: delay,
      }}
      // GPU Acceleration: will-change is handled by framer-motion automatically when animating transform,
      // mas podemos forçar para garantir
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
