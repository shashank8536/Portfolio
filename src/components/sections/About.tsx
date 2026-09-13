"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { Server, Sparkles, Code2, ArrowRight, Terminal } from "lucide-react";

export function About() {
  const perspectives = [
    {
      icon: Server,
      title: "What I pay attention to",
      subtitle: "CODE & ARCHITECTURE",
      description:
        "Input validation, clean database schemas, authentication flows, useful error handling, and what happens when an API or network request fails.",
      accent: "text-cyan-400",
      tag: "PRACTICAL ENGINEERING",
    },
    {
      icon: Sparkles,
      title: "What I'm currently learning",
      subtitle: "ACTIVE EXPLORATION",
      description:
        "Exploring AI agent workflows, tool calling, memory, and how backend architecture needs to evolve as applications become more complex.",
      accent: "text-teal-400",
      tag: "GROWTH & EXPERIMENTATION",
    },
    {
      icon: Code2,
      title: "How I approach building",
      subtitle: "ENGINEERING MINDSET",
      description:
        "I prefer straightforward, readable implementations that are easy to understand and debug rather than adding complexity before it's actually needed.",
      accent: "text-indigo-400",
      tag: "MAINTAINABILITY",
    },
  ];

  return (
    <section id="about" className="relative pt-16 pb-12 md:pt-24 md:pb-14 overflow-hidden border-b border-white/[0.06]">
      {/* Subtle Restrained Ambient Light */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.02] blur-[120px]" />
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 items-start">
          
          {/* Left Column — Narrative & Personal Approach */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
                <span>01 //</span>
                <span>About &amp; Approach</span>
              </div>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-100 leading-[1.2]">
                I like building software that works beyond the happy path.
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="space-y-4 text-base md:text-lg text-slate-300 font-normal leading-relaxed">
                <p>
                  I&apos;m a software engineer focused on full-stack development, backend systems, and AI-powered features. I enjoy taking an idea from something that sounds useful to something people can actually use.
                </p>
                <p>
                  Most of my learning has come through building projects — working with authentication, APIs, databases, cloud services, and the parts of an application that aren&apos;t always visible on the screen.
                </p>
                <p>
                  What interests me most is what happens underneath: why an API fails, how different parts of a system interact, what happens when users do unexpected things, and how a simple application can be improved as it grows.
                </p>
                <p className="text-slate-400 text-sm md:text-base font-mono pt-1">
                  Right now, I&apos;m focused on getting better at backend engineering, system design, and building useful AI features.
                </p>
              </div>
            </FadeIn>

            {/* Personal Engineering Philosophy Callout */}
            <FadeIn direction="up" delay={0.25}>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 font-mono text-xs leading-relaxed text-slate-300">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>MY APPROACH</span>
                </div>
                <p className="text-slate-200 text-sm font-sans italic">
                  &ldquo;I don&apos;t just want to know that it works. I want to understand why it works, where it can break, and what I&apos;d need to change when the application grows.&rdquo;
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  <span>See how I put this into practice in my projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column — 3 Structured Perspectives */}
          <div className="lg:col-span-6 space-y-4">
            {perspectives.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} direction="up" delay={0.12 * (idx + 1)}>
                  <div className="group relative rounded-xl border border-white/[0.07] bg-[#0c111c]/80 p-6 backdrop-blur-sm transition-all duration-200 hover:border-slate-700 hover:bg-[#0c111c]">
                    <div className="flex items-start gap-4">
                      <div className={`rounded-lg border border-white/[0.08] bg-slate-800/80 p-2.5 ${item.accent} shrink-0`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1.5 flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                            {item.subtitle}
                          </span>
                          <span className="font-mono text-[10px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.04]">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                          {item.description}
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
