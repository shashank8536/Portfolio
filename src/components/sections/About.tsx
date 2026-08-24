"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { Layers, Lightbulb, Sparkles, Code, Server, ArrowRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function About() {
  const pillars = [
    {
      icon: Server,
      title: "Full-Stack Architecture",
      description:
        "Building clean, maintainable backend pipelines with robust data validation, secure auth flows, and well-modeled databases.",
      color: "text-cyan-400",
      border: "hover:border-cyan-500/30",
    },
    {
      icon: Lightbulb,
      title: "Problem-First Mindset",
      description:
        "Focusing on the actual human need before writing code. Prioritizing edge cases, real user workflows, and dependable UX.",
      color: "text-amber-400",
      border: "hover:border-amber-500/30",
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      description:
        "Leveraging LLMs and intelligent APIs not as gimmicks, but to augment products with smart assistance, search, and workflows.",
      color: "text-indigo-400",
      border: "hover:border-indigo-500/30",
    },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background Accent glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 items-start">
          
          {/* Left Column — Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
                <span>01 //</span>
                <span>Philosophy &amp; Background</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl leading-[1.15]">
                Engineering software with purpose &amp; precision.
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="space-y-4 text-base md:text-lg text-slate-300 font-normal leading-relaxed">
                <p>
                  I&apos;m a BTech Computer Science student preparing for Full Stack Developer &amp; Software Engineer roles.
                  Rather than building superficial tutorial clones, I build <strong className="text-slate-100 font-semibold">real-world software</strong> that solves genuine operational and community challenges.
                </p>
                <p>
                  My work balances full-stack fundamentals — from structuring relational &amp; NoSQL databases to engineering reliable REST APIs, role-based authentication, and responsive modern interfaces.
                </p>
                <p className="text-slate-400 text-base">
                  When I am not coding, I am experimenting with modern AI workflows, tuning backend architectures, and exploring how intelligent systems can make daily tools dramatically better.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  <span>See how this philosophy translates into projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column — 3 Engineering Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} direction="up" delay={0.15 * (idx + 1)}>
                  <div
                    className={`group relative rounded-2xl border border-white/[0.06] bg-slate-900/60 p-6 md:p-8 backdrop-blur-md transition-all duration-300 ${pillar.border} hover:bg-slate-900/90 hover:translate-y-[-2px] shadow-sm`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`rounded-xl border border-white/[0.08] bg-slate-800/80 p-3 ${pillar.color} shadow-inner`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
