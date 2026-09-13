import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import Image from "next/image";
import {
  ArrowLeft,
  Sparkles,
  Shield,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  Code2,
  CalendarCheck,
  MapPin,
  Clock,
  Search,
  Cloud,
  MailCheck,
  CloudSun,
  MessageSquare,
  ShoppingBag,
  Bell,
  MessageCircle,
  KeyRound,
  Mail,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Mail,
  KeyRound,
  CalendarCheck,
  Clock,
  Search,
  MapPin,
  Cloud,
  MailCheck,
  Sparkles,
  CloudSun,
  MessageSquare,
  ShoppingBag,
  Bell,
  MessageCircle,
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study | Shashank Shekhar`,
    description: project.subtitle,
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project for bottom navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="flex-1 pt-28 pb-32 overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-cyan-500/5 blur-[150px]" />
      </div>

      <Container size="lg" className="relative z-10 space-y-16 md:space-y-24">
        
        {/* ============================================================
            01. Case Study Header & Hero
           ============================================================ */}
        <div className="space-y-6">
          {/* Back Button */}
          <div>
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 font-mono text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>BACK TO ALL PROJECTS</span>
            </Link>
          </div>

          {/* Category Pill & Flagship badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-cyan-300">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
            {project.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {project.subtitle}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.08] bg-slate-900/80 px-3 py-1 font-mono text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          {(project.links?.live || project.links?.github) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-mono font-semibold text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>LIVE DEMO ↗</span>
                </a>
              )}

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-xs font-mono font-semibold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200"
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>GITHUB ↗</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* ============================================================
            02. Problem & Context Section
           ============================================================ */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/[0.08] pt-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs font-semibold uppercase text-cyan-400 tracking-widest block mb-2">
              01 // The Problem
            </span>
            <h2 className="text-2xl font-bold text-slate-100">
              Why was this built?
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-6 text-slate-200">
              <p className="font-medium text-rose-300 mb-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" /> Core Problem Statement:
              </p>
              {project.problem}
            </div>
            <p className="text-slate-400 text-base">
              {project.context}
            </p>
          </div>
        </section>

        {/* ============================================================
            03. Technical Architecture & Approach
           ============================================================ */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/[0.08] pt-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs font-semibold uppercase text-cyan-400 tracking-widest block mb-2">
              02 // System Design
            </span>
            <h2 className="text-2xl font-bold text-slate-100">
              Architecture &amp; Approach
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {project.approach}
            </p>

            {/* Architecture Box */}
            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/90 p-6 md:p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 border-b border-white/[0.06] pb-3">
                <Code2 className="h-4 w-4" />
                <span>ARCHITECTURAL SPECIFICATION</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {project.architecture}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            04. Key Features Breakdown
           ============================================================ */}
        <section className="border-t border-white/[0.08] pt-12 space-y-8">
          <div>
            <span className="font-mono text-xs font-semibold uppercase text-cyan-400 tracking-widest block mb-2">
              03 // Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Core Engineered Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.features.map((feature, i) => {
              const Icon = (feature.icon && iconMap[feature.icon]) || CheckCircle2;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.07] bg-slate-900/60 p-6 backdrop-blur-md hover:border-cyan-500/30 hover:bg-slate-900/90 transition-all duration-200 space-y-3"
                >
                  <div className="p-2.5 rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================
            Visual Showcase / Screenshots (Rendered when project has real screenshots)
           ============================================================ */}
        {project.images && project.images.length > 0 && (
          <section className="border-t border-white/[0.08] pt-12 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-semibold uppercase text-cyan-400 tracking-widest block mb-2">
                  Application Screenshots
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                  Visual Interface &amp; Workflows
                </h2>
              </div>
              <span className="font-mono text-xs text-slate-400">
                {project.images.length} VERIFIED WORKFLOWS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((img, i) => {
                const captions: Record<string, { title: string; desc: string }> = {
                  "/images/wandernest/home.png": {
                    title: "Explore Catalog & Filter System",
                    desc: "Explore stays, filter by trending categories & calculate totals with taxes.",
                  },
                  "/images/wandernest/booking.png": {
                    title: "Listing Details & Reservation Flow",
                    desc: "Property details, dynamic night pricing, reservation date picker & user reviews.",
                  },
                  "/images/wandernest/ai.png": {
                    title: "AI Travel Assistant",
                    desc: "AI trip planner with custom itineraries, live weather insights & packing checklists.",
                  },
                  "/images/wandernest/listings.png": {
                    title: "Host Dashboard: Create Listing",
                    desc: "Property host submission form with Cloudinary image upload & location geocoding.",
                  },
                  "/images/campus/home.png": {
                    title: "Marketplace Feed & Multi-Filter System",
                    desc: "Browse verified campus items, filter by For Sale, Looking to Buy, or Barter Exchange.",
                  },
                  "/images/campus/chat.png": {
                    title: "Real-Time 1-on-1 Messaging",
                    desc: "Socket.io real-time chat threads for price negotiation and campus meetup coordination.",
                  },
                  "/images/campus/profile.png": {
                    title: "Student Identity & Campus Verification",
                    desc: "Domain-restricted @gla.ac.in authentication and student verification profile.",
                  },
                  "/images/campus/listings.png": {
                    title: "Student Identity & Campus Verification",
                    desc: "Domain-restricted @gla.ac.in authentication and student verification profile.",
                  },
                };
                const caption = captions[img];

                return (
                  <div
                    key={i}
                    className="group rounded-2xl border border-white/[0.08] bg-slate-900/60 p-3 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-3"
                  >
                    <div className="relative aspect-[16/9] w-full rounded-xl bg-[#070a10] overflow-hidden border border-white/[0.04]">
                      <Image
                        src={img}
                        alt={caption?.title || `${project.title} screenshot ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-1 group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    {caption && (
                      <div className="px-2 pb-1">
                        <h4 className="text-sm font-semibold text-slate-200">
                          {caption.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                          {caption.desc}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ============================================================
            05. Engineering Challenges & Decisions
           ============================================================ */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/[0.08] pt-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs font-semibold uppercase text-cyan-400 tracking-widest block mb-2">
              04 // Engineering Tradeoffs
            </span>
            <h2 className="text-2xl font-bold text-slate-100">
              Challenges &amp; Decisions
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            {/* Challenges */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-200">Key Technical Hurdles Solved:</h3>
              <div className="space-y-2.5">
                {project.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-slate-900/50 p-4 text-sm text-slate-300"
                  >
                    <span className="font-mono text-cyan-400 font-bold shrink-0">0{i + 1}.</span>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decisions */}
            {project.decisions.length > 0 && (
              <div className="space-y-3 pt-4">
                <h3 className="text-base font-semibold text-slate-200">Technical Decision Rationale:</h3>
                <div className="space-y-3">
                  {project.decisions.map((dec, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-indigo-500/20 bg-indigo-500/[0.03] p-4 text-sm space-y-1.5"
                    >
                      <p className="font-bold text-indigo-300 font-mono text-xs uppercase tracking-wider">
                        Decision: {dec.decision}
                      </p>
                      <p className="text-slate-300 leading-relaxed font-sans">
                        {dec.reasoning}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            06. Results & Outcome
           ============================================================ */}
        <section className="border-t border-white/[0.08] pt-12">
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8 md:p-12 space-y-4">
            <span className="font-mono text-xs font-semibold uppercase text-emerald-400 tracking-widest flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" /> 05 // Outcome &amp; Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              The Result
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {project.result}
            </p>
          </div>
        </section>

        {/* ============================================================
            07. Bottom Next Project Navigation
           ============================================================ */}
        {nextProject && (
          <div className="border-t border-white/[0.08] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/#projects"
              className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
            >
              ← Back to Overview
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-slate-900/80 px-6 py-4 transition-all duration-200 hover:border-cyan-500/40 hover:bg-slate-800"
            >
              <div className="text-right">
                <span className="font-mono text-xs text-slate-400 block">Next Project</span>
                <span className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="h-5 w-5 text-cyan-400 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        )}

      </Container>
    </main>
  );
}
