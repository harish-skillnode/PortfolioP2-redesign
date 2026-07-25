import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  FileText,
  MessageCircleMore,
  Users,
} from "lucide-react";
import Image from "next/image";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  status: string;
  pageCount: number;
  doi: string;
  summary: string;
  pdfUrl: string;
  coverImage: string;
  coverAlt: string;
  methods: Array<{
    value: string;
    label: string;
  }>;
};

const publication: Publication = {
  title:
    'Ludic Ambiguity on the Wrist: How an "Imperfect" Stress Avatar Becomes a Social Play Mechanic',
  authors: "Sriharish Eswarathas and Zhao Zhao",
  venue:
    "Proceedings of the ACM on Human-Computer Interaction, Vol. 10, No. 7, Article GAMES046",
  status: "Forthcoming November 2026",
  pageCount: 28,
  doi: "10.1145/3831349",
  summary:
    "This multi-method HCI study examines how people turn an ambiguous smartwatch stress avatar into a performative cue, companion, game piece, and reflective prompt. The work identifies a playable gap between system inference and lived experience, then translates it into design guidance for legible uncertainty and consentful sharing.",
  pdfUrl: "/papers/ludic-ambiguity-on-the-wrist.pdf",
  coverImage: "/images/research/ludic-ambiguity-cover.jpg",
  coverAlt:
    'First page of "Ludic Ambiguity on the Wrist," including its illustrated stress-watch study overview',
  methods: [
    { value: "238", label: "App Store reviews" },
    { value: "174", label: "Public RED posts" },
    { value: "18", label: "Interviews" },
  ],
};

export default function ResearchSection() {
  return (
    <SectionWrapper
      id="research"
      title="Research"
      className="relative overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-10" />
      <div className="pointer-events-none absolute -right-48 top-12 h-[34rem] w-[34rem] rounded-full bg-primary/[0.04] blur-3xl" />

      <article className="glass-card relative z-10 grid overflow-hidden rounded-[2rem] border-white/10 bg-[#111114]/95 p-3 shadow-2xl sm:p-4 lg:grid-cols-[minmax(20rem,0.78fr)_minmax(0,1.22fr)]">
        <a
          href={publication.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${publication.title} as a PDF`}
          className="group relative flex min-h-[32rem] items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%),#09090b] p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:min-h-[38rem] sm:p-8 lg:min-h-[44rem]"
        >
          <div className="relative aspect-[743/1100] w-full max-w-[29.5rem] overflow-hidden rounded-sm bg-white shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-0.5deg]">
            <Image
              src={publication.coverImage}
              alt={publication.coverAlt}
              fill
              sizes="(max-width: 1024px) 80vw, 38vw"
              className="object-contain"
              priority={false}
            />
          </div>
          <span className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
            Open PDF
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>

        <div className="flex flex-col p-6 sm:p-9 lg:p-12">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              <BookOpen className="h-3.5 w-3.5" />
              Publication
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/50">
              <CalendarDays className="h-3.5 w-3.5" />
              {publication.status}
            </span>
          </div>

          <h3 className="max-w-3xl text-3xl font-black leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {publication.title}
          </h3>

          <div className="mt-6 space-y-2 border-l border-primary/30 pl-4">
            <p className="text-sm font-bold text-foreground/80 sm:text-base">
              {publication.authors}
            </p>
            <p className="max-w-2xl text-xs leading-5 text-foreground/45 sm:text-sm">
              {publication.venue}
            </p>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-foreground/60 sm:text-base">
            {publication.summary}
          </p>

          <div className="mt-9 grid grid-cols-3 gap-2 sm:gap-3">
            {publication.methods.map((method) => (
              <div
                key={method.label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:p-4"
              >
                <div className="text-2xl font-black text-foreground sm:text-3xl">
                  {method.value}
                </div>
                <div className="mt-1 text-[8px] font-bold uppercase leading-4 tracking-[0.13em] text-foreground/35 sm:text-[9px]">
                  {method.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 text-xs text-foreground/45 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary/60" />
              Multi-region qualitative study
            </div>
            <div className="flex items-center gap-2">
              <MessageCircleMore className="h-4 w-4 text-primary/60" />
              Social play and wearable HCI
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-4 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <a
              href={publication.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-background transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Read full paper
              <FileText className="h-4 w-4" />
            </a>

            <div className="text-left sm:text-right">
              <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-foreground/30">
                DOI
              </div>
              <code className="mt-1 block text-xs text-foreground/55">
                {publication.doi}
              </code>
              <div className="mt-1 text-[9px] uppercase tracking-[0.1em] text-foreground/25">
                {publication.pageCount} pages · CC BY 4.0
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionWrapper>
  );
}
