import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const SKILLNODE_URL = "https://skillnode.ca";

export default function SkillNodeSection() {
  return (
    <SectionWrapper
      id="skillnode"
      className="relative min-h-0 overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3278e6]/[0.07] blur-[120px]" />

      <article className="glass-card relative z-10 overflow-hidden rounded-[2rem] border-white/10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#4b8bf4]/30 bg-[#3278e6]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ab5ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#65a0ff] shadow-[0_0_10px_#65a0ff]" />
                Live platform
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                A project I&apos;m building
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_12px_32px_rgba(50,120,230,0.16)]">
                <Image
                  src="/images/project-logos/skillnode-logo.png"
                  alt="SkillNode logo"
                  width={72}
                  height={72}
                  className="h-14 w-14 sm:h-16 sm:w-16"
                />
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                SkillNode
              </h2>
            </div>

            <h3 className="mt-8 max-w-xl text-2xl font-semibold leading-tight text-foreground/90 sm:text-3xl">
              Matching people to opportunities through more than a list of
              keywords.
            </h3>

            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8">
              I&apos;m building SkillNode to help students and employers find
              a better fit through AI-powered compatibility — connecting
              skills, real project work, and room to grow.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SKILLNODE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65a0ff] focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
                aria-label="Visit SkillNode in a new tab"
              >
                Visit SkillNode
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>
              <span className="font-mono text-xs text-white/35">
                skillnode.ca
              </span>
            </div>
          </div>

          <a
            href={SKILLNODE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[25rem] items-center justify-center overflow-hidden border-t border-white/10 bg-[#0b0f17] p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#65a0ff] sm:p-10 lg:min-h-[35rem] lg:border-l lg:border-t-0"
            aria-label="Visit SkillNode in a new tab"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(50,120,230,0.15),transparent_52%)]" />
            <div className="absolute inset-x-[12%] top-[18%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-x-[12%] bottom-[18%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative w-full max-w-xl">
              <div className="mb-10 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                <Sparkles
                  className="h-3.5 w-3.5 text-[#65a0ff]"
                  aria-hidden="true"
                />
                Compatibility in context
              </div>

              <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6">
                <div className="absolute left-[18%] right-[18%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#65a0ff]/10 via-[#65a0ff]/60 to-[#65a0ff]/10" />

                <div className="relative z-10 rounded-2xl border border-white/10 bg-[#10151f]/95 p-4 text-center shadow-xl sm:p-5">
                  <GraduationCap
                    className="mx-auto h-5 w-5 text-[#77aaff]"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-xs font-bold text-white/80 sm:text-sm">
                    Student
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/35 sm:text-[10px]">
                    Skills + projects
                  </p>
                </div>

                <div className="relative z-20 flex h-24 w-24 items-center justify-center rounded-[1.8rem] border border-[#65a0ff]/25 bg-[#111a2a] shadow-[0_0_50px_rgba(50,120,230,0.24)] transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none sm:h-32 sm:w-32">
                  <div className="overflow-hidden rounded-[1.25rem] bg-white shadow-2xl sm:rounded-[1.5rem]">
                    <Image
                      src="/images/project-logos/skillnode-logo.png"
                      alt=""
                      width={96}
                      height={96}
                      className="h-16 w-16 sm:h-20 sm:w-20"
                    />
                  </div>
                </div>

                <div className="relative z-10 rounded-2xl border border-white/10 bg-[#10151f]/95 p-4 text-center shadow-xl sm:p-5">
                  <BriefcaseBusiness
                    className="mx-auto h-5 w-5 text-[#77aaff]"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-xs font-bold text-white/80 sm:text-sm">
                    Employer
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/35 sm:text-[10px]">
                    Role + potential
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-10 flex max-w-sm items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 sm:px-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#77aaff]">
                    The SkillNode idea
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/55 sm:text-sm">
                    Find the fit beyond the resume.
                  </p>
                </div>
                <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#77aaff] transition-colors group-hover:border-[#65a0ff]/40 group-hover:bg-[#3278e6]/10">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </article>
    </SectionWrapper>
  );
}
