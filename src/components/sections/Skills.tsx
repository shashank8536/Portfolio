"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { skills } from "@/data/skills";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  GraduationCap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  GraduationCap,
  Sparkles,
};

const categoryAccent: Record<string, { badge: string; glow: string; text: string }> = {
  Languages: {
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    glow: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]",
    text: "text-cyan-400",
  },
  Frontend: {
    badge: "border-teal-500/30 bg-teal-500/10 text-teal-400",
    glow: "group-hover:border-teal-500/40 group-hover:shadow-[0_0_25px_rgba(20,184,166,0.12)]",
    text: "text-teal-400",
  },
  Backend: {
    badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    glow: "group-hover:border-indigo-500/40 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.12)]",
    text: "text-indigo-400",
  },
  Database: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    glow: "group-hover:border-emerald-500/40 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.12)]",
    text: "text-emerald-400",
  },
  Tools: {
    badge: "border-slate-500/30 bg-slate-500/10 text-slate-300",
    glow: "group-hover:border-slate-500/40 group-hover:shadow-[0_0_25px_rgba(148,163,184,0.12)]",
    text: "text-slate-300",
  },
  "Core CS": {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    glow: "group-hover:border-violet-500/40 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]",
    text: "text-violet-400",
  },
  AI: {
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    glow: "group-hover:border-amber-500/40 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
    text: "text-amber-400",
  },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden bg-slate-950/40">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[150px]"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
              <span>02 //</span>
              <span>Technical Capabilities</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
              Skills &amp; Architecture Stack
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-base md:text-lg text-slate-400">
              A verified overview of languages, frameworks, databases, and computer science foundations I use to build production-grade applications.
            </p>
          </FadeIn>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code2;
            const style = categoryAccent[category.title] || categoryAccent.Languages;

            return (
              <FadeIn key={category.title} direction="up" delay={0.06 * (idx + 1)}>
                <div
                  className={`group relative h-full rounded-2xl border border-white/[0.07] bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 ${style.glow} hover:bg-slate-900/90 hover:translate-y-[-3px] flex flex-col justify-between`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border bg-slate-800/80 ${style.badge}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-100 group-hover:text-white transition-colors">
                          {category.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded-full border border-white/[0.05]">
                        {category.skills.length}
                      </span>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs text-slate-300 bg-slate-800/50 hover:bg-slate-700/60 hover:text-white px-3 py-1.5 rounded-lg border border-white/[0.06] transition-all duration-150 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
