
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
}) => {
  const cardContent = (
    <motion.div
      key={name}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-[2rem] h-full",
        "glass-card hover:border-white/20 transition-all duration-300 shadow-xl",
        className
      )}
    >
      {background}
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-8 transition-all duration-500 group-hover:-translate-y-2">
        <Icon className="h-12 w-12 origin-left transform-gpu text-primary/60 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:text-primary" />
        <h3 className="text-2xl md:text-3xl font-bold text-foreground/90 mt-4 group-hover:text-glow-primary transition-all leading-tight">
          {name}
        </h3>
        <p className="max-w-lg text-foreground/60 leading-relaxed mt-3 text-sm md:text-base">{description}</p>
      </div>

      <div className="absolute bottom-8 right-8 z-20 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
        <div className="h-10 w-10 rounded-full glass-card flex items-center justify-center border-white/20">
          <ArrowRight className="h-5 w-5 text-primary" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[0.03]" />
    </motion.div>
  );

  if (href && href !== "#") {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="h-full">
            {cardContent}
        </Link>
    )
  }
  return cardContent;
};

export { BentoCard, BentoGrid };
