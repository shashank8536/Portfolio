import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { PersonalSections } from "@/components/sections/PersonalSections";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero — Asymmetric Editorial Hero with Terminal Console & Canvas Particles */}
      <Hero />

      {/* 01 // Philosophy & Engineering Mindset */}
      <About />

      {/* 02 // Selected Work (WanderNest Signature & Campus Marketplace) */}
      <Projects />

      {/* 03 // Technical Capabilities & Foundations */}
      <Skills />

      {/* Personal Evidence: Currently Learning & Outside the Code */}
      <PersonalSections />

      {/* 04 // Direct Contact */}
      <Contact />
    </main>
  );
}
