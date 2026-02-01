
"use client";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { TypeAnimation } from 'react-type-animation';

interface TypingAnimationProps {
    children: string;
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

export function TypingAnimation({ children, className }: TypingAnimationProps) {
    return (
        <motion.div variants={lineVariants}>
            <TypeAnimation
                sequence={[children]}
                wrapper="span"
                speed={80}
                className={cn(className)}
                cursor={false}
            />
        </motion.div>
    );
}
