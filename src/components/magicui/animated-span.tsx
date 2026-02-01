
"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSpanProps {
  children: ReactNode;
  className?: string;
}

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export function AnimatedSpan({ children, className }: AnimatedSpanProps) {
  return (
    <motion.span
      variants={lineVariants}
      className={cn("block", className)}
    >
      {children}
    </motion.span>
  );
}
