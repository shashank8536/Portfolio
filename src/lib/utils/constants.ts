/** Site-wide constants */
export const SITE = {
  name: "Shashank Shekhar",
  role: "Full Stack Developer",
  tagline: "I build technology that solves real problems.",
  description:
    "Full Stack Developer & AI Enthusiast building real-world software with modern technologies.",
  url: "https://shashankshekhar.dev", // Update after deployment
  github: "https://github.com/shashank8536",
  linkedin: "https://www.linkedin.com/in/shashank8536/",
  email: "shashankshekhargiri2003@gmail.com",
} as const;

/** Navigation links */
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
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
