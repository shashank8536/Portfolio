"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface StaggerChildrenProps {
  children: React.ReactNode;
  /** Delay between each child (seconds) */
  stagger?: number;
  /** CSS class names */
  className?: string;
}

/**
 * Container that staggers the entrance animations of its children.
 * Each child should be wrapped in a motion component or FadeIn.
 */
export function StaggerChildren({
  children,
  stagger = 0.06,
  className,
}: StaggerChildrenProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
