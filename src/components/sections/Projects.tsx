"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Check,
  Image as ImageIcon,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { ProjectGalleryModal } from "@/components/ui/ProjectGalleryModal";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Projects() {
  const [galleryProject, setGalleryProject] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const featuredProject = projects.find((p) => p.isFeatured) || projects[0];
  const secondaryProjects = projects.filter((p) => !p.isFeatured);

  const handleRepoClick = (url: string | undefined, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!url || url === "[I WILL PROVIDE THIS]") {
      e.preventDefault();
      alert("Repository URL placeholder: Please update repository links in src/data/portfolio.ts.");
    }
  };

  return (
    <section id="projects" className="relative pt-12 pb-10 md:pt-16 md:pb-12 overflow-hidden border-b border-white/[0.06]">
      {/* Subtle restrained glow */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/4 h-[400px] w-[500px] rounded-full bg-cyan-500/[0.02] blur-[150px]"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div>
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
                <span>02 //</span>
                <span>Selected Work</span>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
                Featured Projects
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
              Software I&apos;ve built to solve actual problems, explore complete workflows, and understand how systems behave when things don&apos;t go according to plan.
            </p>
          </FadeIn>
        </div>

        {/* 01 // Signature Project: WanderNest (Compact Showcase Card) */}
        {featuredProject && (
          <FadeIn direction="up" delay={0.1}>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c111c]/90 p-5 sm:p-7 backdrop-blur-md mb-16 text-left space-y-5">
              
              {/* Header: Label, Actions, Title, Description, Stack */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-cyan-400">01</span>
                    <span className="h-4 w-px bg-white/[0.12]" />
                    <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      SIGNATURE PROJECT
                    </span>
                  </div>

                  {/* Primary Actions */}
                  <div className="flex items-center gap-2.5">
                    {featuredProject.links.live && (
                      <a
                        href={featuredProject.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 transition-all duration-200 hover:bg-emerald-500/20 hover:border-emerald-500/50 cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
                      </a>
                    )}

                    {featuredProject.links.github && (
                      <a
                        href={featuredProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleRepoClick(featuredProject.links.github, e)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-slate-500 hover:text-white cursor-pointer"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                        <ArrowUpRight className="h-3 w-3 text-slate-500" />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-300/90 font-medium mt-1 max-w-3xl leading-relaxed">
                    A full-stack travel and accommodation platform with authentication, bookings, media uploads, maps, and an AI-assisted trip planner.
                  </p>
                </div>

                {/* Stack Line */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5 font-mono text-xs text-slate-300">
                  <span className="text-slate-400 font-medium">Stack:</span>
                  {["Node.js", "Express.js", "MongoDB", "Passport.js", "Cloudinary", "Gemini AI"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-white/[0.04] px-2 py-0.5 text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle divider */}
              <div className="border-t border-white/[0.06]" />

              {/* Middle: What I Built & Key Challenges (Side-by-Side) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* WHAT I BUILT (5 Compact Items) */}
                <div className="md:col-span-6 space-y-2.5">
                  <h4 className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>WHAT I BUILT</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {[
                      "Session-based authentication",
                      "Email OTP + password reset",
                      "Booking date-conflict validation",
                      "Maps + Cloudinary media",
                      "AI travel planner with listing context",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* KEY ENGINEERING CHALLENGES (3 Compact Items) */}
                <div className="md:col-span-6 space-y-2.5">
                  <h4 className="font-mono text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                    <span>KEY ENGINEERING CHALLENGES</span>
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {[
                      {
                        title: "01 — Booking conflicts",
                        desc: "Handling overlapping reservation dates.",
                      },
                      {
                        title: "02 — Authentication flow",
                        desc: "OTP verification and Passport.js session management.",
                      },
                      {
                        title: "03 — AI + application data",
                        desc: "Connecting relevant listing context to the AI assistant.",
                      },
                    ].map((ch) => (
                      <div key={ch.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                        <span className="font-mono text-xs font-semibold text-amber-300/90 shrink-0">
                          {ch.title}:
                        </span>
                        <span className="text-slate-400 text-xs leading-relaxed">
                          {ch.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Subtle divider */}
              <div className="border-t border-white/[0.06]" />

              {/* Bottom Row: What I Learned & Secondary Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-0.5">
                <div className="space-y-0.5 max-w-xl">
                  <span className="font-mono text-xs font-semibold text-teal-400 flex items-center gap-1.5">
                    <Lightbulb className="h-3 w-3" />
                    <span>WHAT I LEARNED</span>
                  </span>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    &ldquo;Making individual features work was one thing; making different parts of the application behave correctly when they interacted was the harder part.&rdquo;
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  {featuredProject.images && featuredProject.images.length > 0 && (
                    <button
                      onClick={() =>
                        setGalleryProject({
                          title: featuredProject.title,
                          images: featuredProject.images || [],
                        })
                      }
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-mono font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-colors cursor-pointer"
                    >
                      <ImageIcon className="h-3.5 w-3.5 text-cyan-400" />
                      <span>View Screenshots ({featuredProject.images.length})</span>
                    </button>
                  )}

                  <Link
                    href={`/projects/${featuredProject.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-400 px-3 py-1.5 text-xs font-semibold text-slate-950 transition-all duration-200 hover:bg-cyan-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Read Deep Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </FadeIn>
        )}

        {/* 02 // Secondary Project: Campus Marketplace (Compact Showcase Card) */}
        {secondaryProjects.map((project, idx) => (
          <FadeIn key={project.slug} direction="up" delay={0.15 * (idx + 1)}>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c111c]/90 p-5 sm:p-7 backdrop-blur-md mb-0 text-left space-y-5">
              
              {/* Header: Label, Actions, Title, Description, Stack */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-indigo-400">02</span>
                    <span className="h-4 w-px bg-white/[0.12]" />
                    <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Primary Actions */}
                  <div className="flex items-center gap-2.5">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 transition-all duration-200 hover:bg-emerald-500/20 hover:border-emerald-500/50 cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
                      </a>
                    )}

                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleRepoClick(project.links.github, e)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-slate-500 hover:text-white cursor-pointer"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                        <ArrowUpRight className="h-3 w-3 text-slate-500" />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-300/90 font-medium mt-1 max-w-3xl leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Stack Line */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5 font-mono text-xs text-slate-300">
                  <span className="text-slate-400 font-medium">Stack:</span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-white/[0.04] px-2 py-0.5 text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle divider */}
              <div className="border-t border-white/[0.06]" />

              {/* Middle: What I Built & Key Challenges (Side-by-Side) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* WHAT I ACTUALLY BUILT (6 Compact Items) */}
                <div className="md:col-span-6 space-y-2.5">
                  <h4 className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>WHAT I ACTUALLY BUILT</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {(project.whatIActuallyBuilt || []).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* KEY ENGINEERING CHALLENGES (2 Compact Items) */}
                <div className="md:col-span-6 space-y-2.5">
                  <h4 className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="h-3.5 w-3.5 text-indigo-400" />
                    <span>KEY ENGINEERING CHALLENGES</span>
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {(project.engineeringChallenges || []).map((ch) => (
                      <div key={ch.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                        <span className="font-mono text-xs font-semibold text-indigo-300/90 shrink-0">
                          {ch.title}:
                        </span>
                        <span className="text-slate-400 text-xs leading-relaxed">
                          {ch.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Subtle divider */}
              <div className="border-t border-white/[0.06]" />

              {/* Bottom Row: What I Learned & Secondary Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-0.5">
                <div className="space-y-0.5 max-w-xl">
                  <span className="font-mono text-xs font-semibold text-teal-400 flex items-center gap-1.5">
                    <Lightbulb className="h-3 w-3" />
                    <span>WHAT I LEARNED</span>
                  </span>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    &ldquo;{project.whatILearned}&rdquo;
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  {project.images && project.images.length > 0 && (
                    <button
                      onClick={() =>
                        setGalleryProject({
                          title: project.title,
                          images: project.images || [],
                        })
                      }
                      className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-mono font-semibold text-indigo-300 hover:bg-indigo-500/20 transition-colors cursor-pointer"
                    >
                      <ImageIcon className="h-3.5 w-3.5 text-indigo-400" />
                      <span>View Screenshots ({project.images.length})</span>
                    </button>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-indigo-400 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </FadeIn>
        ))}

      </Container>

      {/* Lightbox Gallery Modal */}
      {galleryProject && (
        <ProjectGalleryModal
          isOpen={true}
          projectTitle={galleryProject.title}
          images={galleryProject.images}
          onClose={() => setGalleryProject(null)}
        />
      )}
    </section>
  );
}
