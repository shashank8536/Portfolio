"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, ChevronRight, Sparkles, Terminal } from "lucide-react";
import { SITE } from "@/lib/utils/constants";
import { Container } from "@/components/layout/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const STAGGER_DELAY = 0.12;

export function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.6,
            delay,
            ease: "easeOut" as const,
          },
        };

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* === High-End Background Layers === */}

      {/* Cyberpunk & Studio ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Central Cyan Spotlight */}
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-cyan-500/10 blur-[130px]" />
        
        {/* Indigo / Purple ambient glow */}
        <div className="absolute left-[25%] top-[25%] h-[400px] w-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
        
        {/* Warm amber accent highlight */}
        <div className="absolute right-[20%] top-[45%] h-[300px] w-[350px] rounded-full bg-amber-500/5 blur-[120px]" />
      </div>

      {/* Subtle modern Grid Overlay with radial fade */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Top and Bottom soft fades */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B0F19] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0F19] to-transparent"
        aria-hidden="true"
      />

      {/* === Hero Content === */}
      <Container className="relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
          
          {/* Top Status & Role Pill */}
          <motion.div {...fadeUp(0.2)} className="mb-6 inline-flex items-center">
            <div className="group relative inline-flex items-center gap-2.5 rounded-full border border-cyan-500/20 bg-slate-900/80 px-4 py-1.5 shadow-[0_0_15px_rgba(34,211,238,0.08)] backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs font-medium tracking-wider text-slate-300 flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                FULL STACK DEVELOPER <span className="text-slate-600">|</span> AI ENTHUSIAST
              </span>
            </div>
          </motion.div>

          {/* Main Title - Dramatic Display Typography */}
          <motion.h1
            {...fadeUp(0.2 + STAGGER_DELAY)}
            className="mb-6 select-none font-sans font-extrabold tracking-tight"
          >
            <span className="block text-[clamp(2.75rem,7.5vw,5.25rem)] leading-[1.05] text-slate-100 drop-shadow-sm">
              SHASHANK
            </span>
            <span className="relative inline-block text-[clamp(2.75rem,7.5vw,5.25rem)] leading-[1.05]">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.25)]">
                SHEKHAR
              </span>
            </span>
          </motion.h1>

          {/* Tagline / Subtitle */}
          <motion.p
            {...fadeUp(0.2 + STAGGER_DELAY * 2)}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300 md:text-xl font-normal"
          >
            Engineering robust web architectures, scalable backend systems, and thoughtful AI-assisted applications.
          </motion.p>

          {/* Quick Tech Highlights Pills */}
          <motion.div
            {...fadeUp(0.2 + STAGGER_DELAY * 2.5)}
            className="mb-10 flex flex-wrap items-center justify-center gap-2"
          >
            {["Next.js / React", "Node.js & Express", "MongoDB", "Java & Python", "AI Integration"].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.06] bg-slate-900/60 px-3 py-1 font-mono text-xs text-slate-400 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            {...fadeUp(0.2 + STAGGER_DELAY * 3)}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Primary Action Button */}
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Secondary Action Button */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700/60 bg-slate-900/60 px-8 py-3.5 text-sm font-semibold text-slate-200 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-800/80 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="h-4 w-4 text-slate-400 transition-colors group-hover:text-cyan-400" />
              <span>Get In Touch</span>
            </a>
          </motion.div>

          {/* Interactive Ghost Link */}
          <motion.div {...fadeUp(0.2 + STAGGER_DELAY * 4)} className="mt-12">
            <a
              href="#about"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-cyan-400"
            >
              <span>Read Shashank&apos;s story &amp; design philosophy</span>
              <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 text-cyan-400" />
            </a>
          </motion.div>

        </div>
      </Container>

      {/* Decorative Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" aria-hidden="true" />
    </section>
  );
}
