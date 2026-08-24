"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Shield,
  CalendarCheck,
  MapPin,
  MessageCircle,
  ShoppingBag,
  Bell,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export function Projects() {
  const featuredProject = projects.find((p) => p.isFeatured) || projects[0];
  const secondaryProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background Studio Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-cyan-500/5 blur-[160px]"
        aria-hidden="true"
      />

      <Container>
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
                <span>03 //</span>
                <span>Featured Work</span>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
                Engineered Products
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base text-slate-400 max-w-md">
              Full-stack applications built with production-grade patterns, end-to-end authentication, and real-world system architecture.
            </p>
          </FadeIn>
        </div>

        {/* 1. Flagship Project: WanderNest AI */}
        {featuredProject && (
          <FadeIn direction="up" delay={0.1}>
            <div className="group relative rounded-3xl border border-white/[0.08] bg-slate-900/70 p-8 md:p-12 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.1)] mb-12 overflow-hidden">
              
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 opacity-80" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Specs & Info */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Category Pill */}
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-cyan-300">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                      FLAGSHIP FULL-STACK PLATFORM
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight group-hover:text-white transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
                      {featuredProject.subtitle}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-cyan-500/20 bg-slate-800/80 px-3 py-1 font-mono text-xs text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Architectural Highlights List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      { icon: Shield, text: "Email OTP Verification & Auth" },
                      { icon: CalendarCheck, text: "Conflict-Safe Booking Engine" },
                      { icon: MapPin, text: "Geocoding & Cloudinary CDN" },
                      { icon: Sparkles, text: "AI Contextual Trip Assistant" },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                          <Icon className="h-4 w-4 text-cyan-400 shrink-0" />
                          <span>{item.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link
                      href={`/projects/${featuredProject.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-200 hover:bg-cyan-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Read Deep Case Study</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                </div>

                {/* Right Visual Architecture Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-white/[0.08] bg-slate-950/80 p-6 md:p-7 shadow-inner space-y-5">
                    
                    {/* Simulated Code/Terminal Header */}
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                        <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="font-mono text-xs text-slate-400">
                        wandernest-architecture.config.js
                      </span>
                    </div>

                    {/* Architecture Breakdown */}
                    <div className="space-y-3 font-mono text-xs text-slate-300">
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-white/[0.04]">
                        <span className="text-cyan-400 font-semibold">// Architecture</span>
                        <p className="text-slate-400 mt-1">MVC Pattern with Express.js + Mongoose Schemas</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-white/[0.04]">
                        <span className="text-teal-400 font-semibold">// Security</span>
                        <p className="text-slate-400 mt-1">Session-based auth + Password reset tokens + OTP</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-white/[0.04]">
                        <span className="text-indigo-400 font-semibold">// AI Layer</span>
                        <p className="text-slate-400 mt-1">Personalized itinerary &amp; lodging assistant</p>
                      </div>
                    </div>

                    {/* Footer note */}
                    <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.06]">
                      <span>Production Ready</span>
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Tested &amp; Validated
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        )}

        {/* 2. Secondary Project: Campus Marketplace */}
        {secondaryProjects.map((project, idx) => (
          <FadeIn key={project.slug} direction="up" delay={0.15 * (idx + 1)}>
            <div className="group relative rounded-3xl border border-white/[0.08] bg-slate-900/60 p-8 md:p-10 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-900/90 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]">
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                
                <div className="space-y-4 max-w-3xl">
                  
                  {/* Category Pill */}
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-indigo-300">
                    <ShoppingBag className="h-3.5 w-3.5 text-indigo-400" />
                    CAMPUS STUDENT ECOSYSTEM
                  </span>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-base text-slate-300 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.08] bg-slate-800/80 px-2.5 py-1 font-mono text-xs text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="flex flex-wrap gap-6 pt-2 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-indigo-400" />
                      <span>Live Buyer-Seller Chat</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-indigo-400" />
                      <span>Campus-Verified Auth</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-indigo-400" />
                      <span>Instant Alerts System</span>
                    </div>
                  </div>

                </div>

                {/* Right Action */}
                <div className="shrink-0 flex items-center">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-indigo-400 hover:bg-slate-700 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="h-4 w-4 text-indigo-400" />
                  </Link>
                </div>

              </div>

            </div>
          </FadeIn>
        ))}

      </Container>
    </section>
  );
}
