import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { SITE } from "@/lib/utils/constants";

/**
 * Home page — Foundation placeholder.
 * Each section will be built in subsequent phases.
 */
export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero placeholder — Phase 5 */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Gradient mesh background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-accent-primary/[0.06] blur-[120px]" />
          <div className="absolute left-1/3 top-1/3 h-[400px] w-[500px] rounded-full bg-accent-secondary/[0.04] blur-[100px]" />
        </div>

        <Container className="relative z-10 text-center">
          {/* Role label */}
          <div className="mb-6 inline-flex items-center rounded-full border border-border-default px-4 py-1.5">
            <span className="font-mono text-xs tracking-[0.1em] text-text-muted">
              FULL STACK DEVELOPER
            </span>
          </div>

          {/* Name */}
          <h1 className="mb-6 text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] text-text-primary md:text-[72px]">
            {SITE.name.toUpperCase()}
          </h1>

          {/* Tagline */}
          <p className="mx-auto mb-10 max-w-[600px] text-base leading-relaxed text-text-secondary md:text-lg">
            {SITE.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="primary" size="lg" href="#projects">
              Explore My Work
              <span aria-hidden="true">→</span>
            </Button>
            <Button variant="secondary" size="lg" href="#">
              View Resume
            </Button>
          </div>

          {/* Meet Shashank link */}
          <div className="mt-8">
            <button className="text-sm text-text-muted transition-colors hover:text-text-secondary">
              Meet Shashank →
            </button>
          </div>
        </Container>
      </section>

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
function SectionPlaceholder({ label, phase }: { label: string; phase: number }) {
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
