import type { SkillCategory } from "@/types/project";

/**
 * Skills organized by category.
 * Only includes technologies Shashank has confirmed.
 */
export const skills: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    skills: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "EJS",
      "React.js",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
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
    title: "Database",
    icon: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Cloudinary", "VS Code"],
  },
  {
    title: "Core CS",
    icon: "GraduationCap",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "MVC Architecture",
    ],
  },
  {
    title: "AI",
    icon: "Sparkles",
    skills: [
      "Generative AI",
      "AI API Integration",
      "AI-powered App Development",
    ],
  },
];
