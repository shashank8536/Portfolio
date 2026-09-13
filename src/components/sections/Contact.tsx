"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/utils/constants";

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

function LinkedinIcon({ className }: { className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLinkedInClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (SITE.linkedin === "[I WILL PROVIDE THIS]") {
      e.preventDefault();
      alert("LinkedIn URL placeholder: Please update LINKEDIN_URL in src/data/portfolio.ts.");
    }
  };

  return (
    <section id="contact" className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/[0.08] bg-[#0c111c]/90 p-8 sm:p-12 backdrop-blur-md text-center relative overflow-hidden">
          
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
              <span>04 //</span>
              <span>Contact</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
              Let&apos;s connect.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              Have an interesting idea, want to talk about a project, or just want to connect? I&apos;m always happy to talk.
            </p>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn direction="up" delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-cyan-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                <span>Send Email</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-slate-500 hover:text-white cursor-pointer"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" />
              </a>

              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkedInClick}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-slate-500 hover:text-white cursor-pointer"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-slate-500 hover:text-white cursor-pointer font-mono"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-400" />
                    <span>{SITE.email}</span>
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
