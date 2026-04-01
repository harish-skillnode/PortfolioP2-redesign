"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-12 xl:col-span-5 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative glass-card p-4 rounded-[2.5rem] overflow-hidden">
               <Image
                src="/images/about-light-02.png"
                alt="Illustration representing Sriharish's work"
                width={500}
                height={500}
                className="rounded-[2.2rem] w-full h-auto max-w-[400px] brightness-90 contrast-110 object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-12 xl:col-span-7"
        >
          <div className="glass-card p-8 md:p-12 rounded-[2rem] border-white/5 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground/90 leading-tight">
              Bridging the gap between <span className="text-primary text-glow-primary">Human Experience</span> and <span className="text-primary text-glow-primary">Intelligent Systems</span>.
            </h3>
            
            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              <p>
                I am a Computer Science student at the University of Guelph with a passion for building software that feels as good as it functions. My focus lies at the intersection of full-stack development and data-driven insights.
              </p>
              <p>
                I believe that technology should be intuitive and empowering. Whether I'm developing a React application or analyzing complex datasets, I strive to create solutions that are both technically robust and user-centric.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-1">
                <span className="text-primary font-bold text-3xl">3.7</span>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">GPA</p>
              </div>
              <div className="space-y-1">
                <span className="text-primary font-bold text-3xl">4+</span>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Research Proj</p>
              </div>
               <div className="space-y-1 hidden md:block">
                <span className="text-primary font-bold text-3xl">100+</span>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Users Impacted</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
