"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { SITE } from "@/lib/utils/constants";
import { Container } from "@/components/layout/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { TerminalWidget } from "@/components/ui/TerminalWidget";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="18"
      height="18"
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

export function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.5,
            delay,
            ease: "easeOut" as const,
          },
        };

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (SITE.resume === "[I WILL PROVIDE THIS]") {
      e.preventDefault();
      alert("Resume URL placeholder: Please update RESUME_URL in src/data/portfolio.ts with your resume link or file path.");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-20 border-b border-white/[0.06]"
    >
      {/* Asymmetric Hero Content */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bold Editorial Typography & Authentic Voice */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Minimal Status & Role Line */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase">
                SOFTWARE ENGINEER · FULL-STACK &amp; AI SYSTEMS · OPEN TO OPPORTUNITIES
              </span>
            </motion.div>

            {/* Main Name — Crisp Off-White, No Gradient */}
            <motion.div {...fadeUp(0.18)}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 uppercase">
                {SITE.name}
              </h1>
              <div className="mt-3 flex items-center gap-3 text-slate-400 font-mono text-sm">
                <span className="text-cyan-400">~/fullstack-engineer</span>
                <span className="text-slate-600">·</span>
                <span>India / Remote</span>
              </div>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              {...fadeUp(0.26)}
              className="text-xl sm:text-2xl font-medium text-slate-200 leading-snug max-w-2xl text-balance"
            >
              {SITE.tagline}
            </motion.p>

            {/* Human Narrative Copy */}
            <motion.p
              {...fadeUp(0.32)}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal"
            >
              I build full-stack applications, backend systems, and AI-powered features. I enjoy turning useful ideas into products people can actually use — while thinking through the edge cases and messy parts of real software.
            </motion.p>

            {/* Action Buttons: View Projects, GitHub, Resume */}
            <motion.div
              {...fadeUp(0.38)}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-200 hover:bg-cyan-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-slate-500 hover:bg-slate-800 hover:text-white cursor-pointer"
              >
                <GithubIcon className="h-4 w-4 text-slate-400" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" />
              </a>

              <a
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-cyan-400/50 hover:bg-slate-800 hover:text-cyan-300 cursor-pointer"
                title="View or download resume"
              >
                <FileText className="h-4 w-4 text-slate-400" />
                <span>Resume</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" />
              </a>
            </motion.div>

            {/* Working With — Clean human line */}
            <motion.div
              {...fadeUp(0.44)}
              className="pt-2 text-xs font-mono text-slate-400 flex flex-wrap gap-x-1.5 gap-y-1"
            >
              <span className="text-slate-400">Working with:</span>
              <span className="text-slate-200">Next.js</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-200">React</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-200">Node.js</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-200">Express</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-200">MongoDB</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-200">JavaScript</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-200">Java</span>
            </motion.div>

            {/* Currently Exploring */}
            <motion.div
              {...fadeUp(0.5)}
              className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono"
            >
              <span className="text-cyan-400 font-medium">Currently exploring:</span>
              <span className="text-slate-300">AI agents</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">system design</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">scalable backend architecture</span>
            </motion.div>

          </div>

          {/* Right Column: Interactive Engineering Console / Real System Artifact */}
          <motion.div
            {...fadeUp(0.3)}
            className="lg:col-span-5 relative w-full max-w-lg lg:max-w-none mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 blur-lg opacity-30" />
              
              <div className="relative">
                <TerminalWidget />
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Live Build &amp; Architecture Spec
                </span>
                <span>Flagship: WanderNest</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
