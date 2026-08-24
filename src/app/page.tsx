import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/layout/Container";
import { Tag } from "@/components/ui/Tag";

/**
 * Home page — Phase 5: Hero + Navbar complete.
 * Remaining sections will be built in subsequent phases.
 */
export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero — Phase 5 ✅ */}
      <Hero />

      {/* About placeholder — Phase 6 */}
      <section id="about" className="py-20 md:py-32">
        <Container>
          <SectionPlaceholder label="About" phase={6} />
        </Container>
      </section>

      {/* Skills placeholder — Phase 6 */}
      <section id="skills" className="py-20 md:py-32">
        <Container>
          <SectionPlaceholder label="Skills" phase={6} />
        </Container>
      </section>

      {/* Projects placeholder — Phase 7 */}
      <section id="projects" className="py-20 md:py-32">
        <Container>
          <SectionPlaceholder label="Projects" phase={7} />
        </Container>
      </section>

      {/* Contact placeholder — Phase 7 */}
      <section id="contact" className="py-20 md:py-32">
        <Container>
          <SectionPlaceholder label="Contact" phase={7} />
        </Container>
      </section>
    </main>
  );
}

/** Temporary placeholder for sections not yet built */
function SectionPlaceholder({
  label,
  phase,
}: {
  label: string;
  phase: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-border-default bg-bg-secondary/50 px-8 py-16 text-center">
      <Tag variant="neutral" size="md">
        PHASE {phase}
      </Tag>
      <h2 className="mt-4 text-2xl font-bold text-text-primary">{label}</h2>
      <p className="mt-2 text-sm text-text-muted">
        This section will be built in Phase {phase}.
      </p>
    </div>
  );
}
