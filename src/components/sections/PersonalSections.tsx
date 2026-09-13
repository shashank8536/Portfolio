"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { portfolio } from "@/data/portfolio";
import { Compass, BookOpen, Coffee } from "lucide-react";

export function PersonalSections() {
  return (
    <section className="relative pt-12 pb-12 md:pt-16 md:pb-14 border-b border-white/[0.06] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left: Currently Learning */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Ongoing Exploration</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h3 className="text-2xl font-bold tracking-tight text-slate-100">
                What I&apos;m currently learning
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Topics and engineering problems I am actively digging into right now.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {portfolio.currentlyLearning.map((item, idx) => (
                <FadeIn key={item.topic} direction="up" delay={0.15 * (idx + 1)}>
                  <div className="h-full rounded-xl border border-white/[0.07] bg-[#0c111c]/80 p-5 space-y-2 backdrop-blur-sm transition-all hover:border-slate-700">
                    <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{item.topic}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: Outside the Code */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-teal-400 uppercase">
                  <Coffee className="h-3.5 w-3.5" />
                  <span>Outside The Code</span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h3 className="text-2xl font-bold tracking-tight text-slate-100">
                  Off the terminal
                </h3>
              </FadeIn>

              <FadeIn direction="up" delay={0.15}>
                <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 space-y-3 text-sm text-slate-300 leading-relaxed font-sans">
                  <p>
                    {portfolio.outsideTheCode}
                  </p>
                  <p className="text-xs text-slate-400 font-mono pt-2 border-t border-white/[0.06] flex items-center gap-1.5">
                    <Compass className="h-3.5 w-3.5 text-teal-400" />
                    <span>Curiosity-driven · Learning in public</span>
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
