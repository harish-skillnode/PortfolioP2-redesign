
"use client"

import { motion, useScroll, type MotionProps } from "framer-motion"
import * as React from "react"

import { cn } from "@/lib/utils"

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className={cn(
        "absolute inset-x-0 bottom-0 z-50 h-1 origin-left bg-gradient-to-r from-primary to-accent",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  )
}
