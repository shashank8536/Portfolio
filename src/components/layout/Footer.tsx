"use client";

import { Mail, ArrowUp, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SITE } from "@/lib/utils/constants";

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

function LinkedinIcon({ className }: { className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (SITE.resume === "[I WILL PROVIDE THIS]") {
      e.preventDefault();
      alert("Resume URL placeholder: Please update RESUME_URL in src/data/portfolio.ts with your resume link or file path.");
    }
  };

  const handleLinkedInClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (SITE.linkedin === "[I WILL PROVIDE THIS]") {
      e.preventDefault();
      alert("LinkedIn URL placeholder: Please update LINKEDIN_URL in src/data/portfolio.ts.");
    }
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#080c14]/80 backdrop-blur-sm">
      <Container>
        <div className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between text-left">
          {/* Left — Name & copyright */}
          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="text-sm font-semibold text-slate-100">
              {SITE.name}
            </span>
            <span className="text-xs text-slate-400">
              © {new Date().getFullYear()} · Software Engineer
            </span>
          </div>

          {/* Center — Social links & Resume */}
          <div className="flex items-center gap-3">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-slate-400 transition-all duration-200 hover:border-slate-500 hover:text-white hover:bg-white/[0.04]"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              onClick={handleLinkedInClick}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-slate-400 transition-all duration-200 hover:border-slate-500 hover:text-white hover:bg-white/[0.04]"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Send Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-slate-400 transition-all duration-200 hover:border-slate-500 hover:text-white hover:bg-white/[0.04]"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              onClick={handleResumeClick}
              className="flex items-center gap-1.5 px-3 h-9 rounded-lg border border-white/[0.08] text-xs font-mono text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-white/[0.04]"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Right — Back to top */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-cyan-400"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
