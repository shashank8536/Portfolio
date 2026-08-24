import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Tag } from "@/components/ui/Tag";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Generate static paths for all projects */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/** Dynamic metadata per project */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Shashank Shekhar`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 py-20 md:py-32">
      <Container size="lg">
        {/* Case study placeholder — Phase 8 */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border-default bg-bg-secondary/50 px-8 py-24 text-center">
          <Tag variant="neutral" size="md">
            PHASE 8
          </Tag>
          <h1 className="mt-6 text-3xl font-bold text-text-primary md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-text-secondary">{project.subtitle}</p>
          <p className="mt-6 text-sm text-text-muted">
            Full case study will be built in Phase 8.
          </p>
        </div>
      </Container>
    </main>
  );
}
