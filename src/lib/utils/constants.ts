import {
  RESUME_URL,
  GITHUB_PROFILE,
  LINKEDIN_URL,
  EMAIL_ADDRESS,
} from "@/data/portfolio";

/** Site-wide constants */
export const SITE = {
  name: "Shashank Shekhar",
  role: "Software Engineer · Full-Stack & AI Systems",
  tagline: "I like taking ideas from “this could be useful” to “this actually\u00A0works.”",
  description:
    "I build full-stack applications, backend systems, and AI-powered features with a focus on clean architecture and practical problem solving.",
  url: "https://shashankshekhar.dev", // Update after deployment
  github: GITHUB_PROFILE,
  linkedin: LINKEDIN_URL,
  email: EMAIL_ADDRESS,
  resume: RESUME_URL,
} as const;

/** Navigation links */
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

/** Section IDs for scroll targeting */
export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  skills: "skills",
  projects: "projects",
  contact: "contact",
} as const;

/** Animation variants for Framer Motion */
export const MOTION = {
  /** Standard fade-up reveal for scroll-triggered elements */
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
  /** Stagger children by 60ms */
  staggerContainer: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06 },
    },
  },
  /** Faster micro-interaction variant */
  micro: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
} as const;
