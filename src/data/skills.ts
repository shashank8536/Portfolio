import type { SkillCategory } from "@/types/project";

/**
 * Technical skills organized by clear, authentic categories.
 * Only includes technologies Shashank has worked with and confirmed.
 */
export const skills: SkillCategory[] = [
  {
    title: "LANGUAGES",
    icon: "Code2",
    skills: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    title: "FRONTEND",
    icon: "Layout",
    skills: ["HTML", "CSS", "React.js", "Next.js", "EJS", "Bootstrap"],
  },
  {
    title: "BACKEND",
    icon: "Server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Middleware",
      "Session Management",
    ],
  },
  {
    title: "DATABASES",
    icon: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "TOOLS & SERVICES",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Cloudinary", "VS Code"],
  },
  {
    title: "CORE CS",
    icon: "GraduationCap",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "AI",
    icon: "Sparkles",
    skills: [
      "Generative AI",
      "AI API Integration",
      "AI-assisted Application Development",
    ],
  },
];
