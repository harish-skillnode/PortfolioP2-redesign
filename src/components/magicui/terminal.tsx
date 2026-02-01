
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  children: ReactNode;
  className?: string;
}

export function Terminal({ children, className }: TerminalProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div
      className={cn(
        "w-full max-w-lg mx-auto bg-[#1E1E1E] rounded-lg shadow-2xl overflow-hidden border border-zinc-700",
        className
      )}
    >
      <div className="bg-[#333] flex items-center p-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="flex-grow text-center text-sm text-zinc-400 font-mono">
          bash
        </div>
      </div>
      <motion.div
        className="p-4 font-mono text-sm text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </div>
  );
}
