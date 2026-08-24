/** Represents a single project in the portfolio */
export interface Project {
  /** URL-safe slug for routing */
  slug: string;
  /** Display name */
  title: string;
  /** Short one-line description for cards */
  subtitle: string;
  /** Longer description for case study */
  description: string;
  /** Category label shown above title */
  category: string;
  /** Color token for category label (maps to accent colors) */
  categoryColor: "primary" | "secondary" | "cta" | "success";
  /** Whether this is the featured/flagship project */
  isFeatured: boolean;
  /** Technologies used */
  techStack: string[];
  /** Problem statement for case study */
  problem: string;
  /** Context/background for the problem */
  context: string;
  /** Technical approach taken */
  approach: string;
  /** Architecture decisions */
  architecture: string;
  /** Key features list */
  features: ProjectFeature[];
  /** Technical challenges faced */
  challenges: string[];
  /** Key technical decisions and their reasoning */
  decisions: TechDecision[];
  /** Result/outcome */
  result: string;
  /** External links */
  links: {
    live?: string;
    github?: string;
  };
}

export interface ProjectFeature {
  /** Feature name */
  title: string;
  /** Feature description */
  description: string;
  /** Optional icon name from Lucide */
  icon?: string;
}

export interface TechDecision {
  /** The decision made */
  decision: string;
  /** Why this choice was made */
  reasoning: string;
}

/** Represents a skill category */
export interface SkillCategory {
  /** Display name for the category */
  title: string;
  /** Icon name from Lucide */
  icon: string;
  /** Skills within this category */
  skills: string[];
}

/** Portfolio owner information */
export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  about: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

/** AI chat message */
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  /** Optional link to a portfolio section */
  sectionLink?: {
    label: string;
    href: string;
  };
}
