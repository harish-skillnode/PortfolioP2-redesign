import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

export default function SectionWrapper({ id, children, className, title }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 min-h-[60vh]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
