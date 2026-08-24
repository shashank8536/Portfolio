"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FadeInProps {
  children: React.ReactNode;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Animation direction */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Distance to travel (pixels) */
  distance?: number;
  /** Duration of animation (seconds) */
  duration?: number;
  /** CSS class names */
  className?: string;
  /** Viewport amount visible before triggering (0-1) */
  threshold?: number;
  /** Whether to animate only once */
  once?: boolean;
}

/**
 * Scroll-triggered fade-in animation wrapper.
 * Respects prefers-reduced-motion.
 */
export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  distance = 20,
  duration = 0.5,
  className,
  threshold = 0.2,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const prefersReduced = useReducedMotion();

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionMap[direction] }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
