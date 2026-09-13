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

const categoryAccent: Record<string, { badge: string; text: string }> = {
  LANGUAGES: {
    badge: "border-cyan-500/25 bg-cyan-500/10 text-cyan-400",
    text: "text-cyan-400",
  },
  FRONTEND: {
    badge: "border-white/[0.08] bg-white/[0.04] text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/30",
    text: "text-slate-300",
  },
  BACKEND: {
    badge: "border-cyan-500/25 bg-cyan-500/10 text-cyan-400",
    text: "text-cyan-400",
  },
  DATABASES: {
    badge: "border-white/[0.08] bg-white/[0.04] text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/30",
    text: "text-slate-300",
  },
  "TOOLS & SERVICES": {
    badge: "border-white/[0.08] bg-white/[0.04] text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/30",
    text: "text-slate-300",
  },
  "CORE CS": {
    badge: "border-white/[0.08] bg-white/[0.04] text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/30",
    text: "text-slate-300",
  },
  AI: {
    badge: "border-cyan-500/25 bg-cyan-500/10 text-cyan-400",
    text: "text-cyan-400",
  },
};

export function Skills() {
  return (
    <section id="skills" className="relative pt-12 pb-12 md:pt-16 md:pb-14 overflow-hidden border-b border-white/[0.06]">
      <Container>
        {/* Section Header - Editorial Left-Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div>
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
                <span>03 //</span>
                <span>Technical Skills</span>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
                Technical Skills
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
              Languages, frameworks, databases, and computer science fundamentals I&apos;ve used while building projects and learning software engineering.
            </p>
          </FadeIn>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code2;
            const style = categoryAccent[category.title] || categoryAccent.LANGUAGES;

            return (
              <FadeIn key={category.title} direction="up" delay={0.05 * (idx + 1)}>
                <div className="group relative h-full rounded-xl border border-white/[0.07] bg-[#0c111c]/80 p-6 backdrop-blur-sm transition-all duration-200 hover:border-slate-700 hover:bg-[#0c111c] flex flex-col justify-between text-left">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg border bg-slate-800/80 ${style.badge}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-bold text-base text-slate-100 group-hover:text-white transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs text-slate-300 bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.05] transition-colors hover:text-white hover:border-white/[0.12] cursor-default"
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
