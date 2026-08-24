import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      {/* 01. Hero Section */}
      <Hero />

      {/* 02. About & Philosophy */}
      <About />

      {/* 03. Technical Capabilities & Skills */}
      <Skills />

      {/* 04. Featured Projects (WanderNest AI & Campus Marketplace) */}
      <Projects />

      {/* 05. Connect & Contact */}
      <Contact />
    </main>
  );
}
