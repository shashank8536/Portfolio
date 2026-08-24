"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { Mail, Copy, Check, ArrowUpRight, Sparkles } from "lucide-react";
import { SITE } from "@/lib/utils/constants";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden bg-slate-950/60">
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-cyan-500/5 blur-[160px]"
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/[0.08] bg-slate-900/70 p-8 md:p-14 backdrop-blur-xl shadow-2xl text-center relative overflow-hidden">
          
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
              <span>04 //</span>
              <span>Connect</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              Let&apos;s build something impactful together.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              I am actively looking for Full Stack Developer &amp; Software Engineering opportunities. Whether you have a project idea, a question, or a role, feel free to reach out.
            </p>
          </FadeIn>

          {/* Interactive Email Copy Card */}
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-200 hover:bg-cyan-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                <span>Send Direct Email</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-slate-600 hover:bg-slate-700 hover:text-white"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-400" />
                    <span className="font-mono">{SITE.email}</span>
                  </>
                )}
              </button>

            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
