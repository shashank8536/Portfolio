"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { NAV_LINKS, SITE } from "@/lib/utils/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Container } from "@/components/layout/Container";
import { AskShashankModal } from "@/components/ai/AskShashankModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[rgba(11,15,25,0.80)] backdrop-blur-xl border-b border-border-default"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav
            className="flex h-[72px] items-center justify-between"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/#hero"
              className="group flex items-center gap-2"
              aria-label="Back to top"
            >
              <span className="text-sm sm:text-base font-bold tracking-tight text-slate-100 uppercase transition-colors group-hover:text-cyan-400">
                SHASHANK SHEKHAR
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={`/${link.href}`}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium text-text-secondary",
                    "transition-colors duration-200 hover:text-text-primary",
                    "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:rounded-full after:bg-accent-primary after:transition-all after:duration-300 after:-translate-x-1/2",
                    "hover:after:w-3/5"
                  )}
                >
                  {link.label}
                </a>
              ))}

              {/* Resume Link */}
              <a
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (SITE.resume === "[I WILL PROVIDE THIS]") {
                    e.preventDefault();
                    alert("Resume URL placeholder: Please update RESUME_URL in src/data/portfolio.ts with your resume link or file path.");
                  }
                }}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Resume ↗
              </a>

              {/* Ask Shashank CTA */}
              <button
                onClick={() => setIsAiModalOpen(true)}
                className={cn(
                  "ml-3 inline-flex items-center gap-2 rounded-full px-4 py-2",
                  "border border-white/[0.12] bg-white/[0.04] text-slate-200 text-sm font-medium cursor-pointer",
                  "transition-all duration-200",
                  "hover:border-cyan-400/50 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]",
                  "active:scale-[0.97]"
                )}
              >
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Ask Shashank</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-hover hover:text-text-primary md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </nav>
        </Container>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
            style={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-bg-primary/95 backdrop-blur-2xl md:hidden"
          >
            {/* Close Button */}
            <div className="flex h-[72px] items-center justify-end px-6">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-hover hover:text-text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col items-center justify-center gap-2 pt-16">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={`/${link.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="text-2xl font-semibold text-text-primary transition-colors hover:text-accent-primary py-3"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile Resume Link */}
              <motion.a
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (SITE.resume === "[I WILL PROVIDE THIS]") {
                    e.preventDefault();
                    alert("Resume URL placeholder: Please update RESUME_URL in src/data/portfolio.ts with your resume link or file path.");
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + NAV_LINKS.length * 0.08,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="text-2xl font-semibold text-slate-300 transition-colors hover:text-cyan-400 py-3"
              >
                Resume ↗
              </motion.a>

              {/* Ask Shashank CTA - Mobile */}
              <motion.button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAiModalOpen(true);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + (NAV_LINKS.length + 1) * 0.08,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className={cn(
                  "mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3",
                  "border border-white/[0.14] bg-white/[0.05] text-slate-100 text-base font-medium",
                  "transition-all duration-200",
                  "hover:border-cyan-400/50 hover:bg-white/[0.1] hover:text-white"
                )}
              >
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>Ask Shashank</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Assistant Chat Modal */}
      <AskShashankModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </>
  );
}
