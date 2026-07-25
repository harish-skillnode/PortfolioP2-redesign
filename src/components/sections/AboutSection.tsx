"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
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
                alt="Pixel-art portrait of Sriharish coding beside his dog"
                width={500}
                height={500}
                className="rounded-[2.2rem] w-full h-auto max-w-[400px] brightness-90 contrast-110 object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-12 xl:col-span-7"
        >
          <div className="glass-card p-8 md:p-12 rounded-[2rem] border-white/5 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground/90 leading-tight">
              I build systems, study how people bend them, and{" "}
              <span className="text-primary text-glow-primary">
                teach others to make them better.
              </span>
            </h3>
            
            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              <p>
                I&apos;m Sriharish — a Computer Science student at Guelph, a
                software developer at Criteo, and an HCI researcher. My work
                moves between production code, AI and creativity studies, and
                a smartwatch project about how an “imperfect” stress avatar
                becomes a joke, companion, or game.
              </p>
              <p>
                That range is what keeps me curious. I care about what happens
                after software leaves the editor — where people hesitate,
                invent workarounds, or make a tool their own. I turn those
                moments into clearer interfaces, stronger systems, and better
                questions.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                What I&apos;m working on now
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-primary/60">
                    At Criteo
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-5 text-foreground/75">
                    Ad Validation &amp; Activations
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-primary/60">
                    In the lab
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-5 text-foreground/75">
                    AI, creativity &amp; wearable HCI
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-primary/60">
                    At Guelph
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-5 text-foreground/75">
                    Teaching UI design &amp; discrete structures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
