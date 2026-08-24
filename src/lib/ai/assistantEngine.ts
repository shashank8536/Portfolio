import { portfolio } from "@/data/portfolio";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

export interface AIResponse {
  answer: string;
  sectionLink?: {
    label: string;
    href: string;
  };
}

export function generateAnswer(userQuery: string): AIResponse {
  const query = userQuery.toLowerCase().trim();

  // 1. WanderNest queries
  if (
    query.includes("wandernest") ||
    query.includes("wander nest") ||
    query.includes("travel") ||
    query.includes("flagship")
  ) {
    const wandernest = projects.find((p) => p.slug === "wandernest");
    return {
      answer:
        "WanderNest AI is Shashank's flagship full-stack travel platform built with Node.js, Express.js, MongoDB, Mongoose, and EJS. It includes complete user authentication with Email OTP verification, a conflict-safe booking and reservation system, interactive map/geocoding integration, Cloudinary image storage, and an AI-powered travel assistant that gives personalized trip and lodging recommendations.",
      sectionLink: {
        label: "Explore WanderNest Case Study →",
        href: "/projects/wandernest",
      },
    };
  }

  // 2. Campus Marketplace queries
  if (
    query.includes("campus") ||
    query.includes("marketplace") ||
    query.includes("student") ||
    query.includes("market")
  ) {
    return {
      answer:
        "Campus Marketplace is a full-stack platform built specifically for university students to buy, sell, and negotiate items safely within their campus community. It features React.js on the frontend, Express & Node.js on the backend, MongoDB for flexible data modeling, campus-verified auth, live buyer-seller chat, and instant item notification alerts.",
      sectionLink: {
        label: "Explore Campus Marketplace Case Study →",
        href: "/projects/campus-marketplace",
      },
    };
  }

  // 3. Technologies / Skills / Stack queries
  if (
    query.includes("skill") ||
    query.includes("tech") ||
    query.includes("stack") ||
    query.includes("language") ||
    query.includes("framework") ||
    query.includes("backend") ||
    query.includes("frontend") ||
    query.includes("database")
  ) {
    const languages = skills.find((s) => s.title === "Languages")?.skills.join(", ");
    const backend = skills.find((s) => s.title === "Backend")?.skills.join(", ");
    const frontend = skills.find((s) => s.title === "Frontend")?.skills.join(", ");
    const db = skills.find((s) => s.title === "Database")?.skills.join(", ");

    return {
      answer: `Shashank's core engineering stack includes:
• Languages: ${languages}
• Backend: ${backend}
• Frontend: ${frontend}
• Database: ${db}
• Core CS: Data Structures & Algorithms, OOP, DBMS, MVC Architecture.`,
      sectionLink: {
        label: "View Skills Architecture →",
        href: "/#skills",
      },
    };
  }

  // 4. About / Background / Education queries
  if (
    query.includes("about") ||
    query.includes("who is") ||
    query.includes("who are") ||
    query.includes("background") ||
    query.includes("student") ||
    query.includes("btech") ||
    query.includes("education") ||
    query.includes("college")
  ) {
    return {
      answer:
        "Shashank Shekhar is a BTech Computer Science student preparing for Full Stack Developer & Software Engineer roles. He emphasizes building genuine, production-ready software with robust backend logic, clean data models, and modern AI integration rather than simple tutorial clones.",
      sectionLink: {
        label: "Read About Shashank →",
        href: "/#about",
      },
    };
  }

  // 5. Contact / Hire / Email queries
  if (
    query.includes("contact") ||
    query.includes("hire") ||
    query.includes("email") ||
    query.includes("reach") ||
    query.includes("github") ||
    query.includes("linkedin")
  ) {
    return {
      answer:
        "You can reach out to Shashank directly via email or check out his professional profiles on GitHub and LinkedIn. He is actively open to Full Stack Developer & Software Engineering opportunities.",
      sectionLink: {
        label: "Go to Contact Section →",
        href: "/#contact",
      },
    };
  }

  // 6. Default response
  return {
    answer:
      "I am Shashank's portfolio assistant. You can ask me about his flagship projects (WanderNest AI, Campus Marketplace), his core tech stack (Node.js, React, MongoDB, Java/Python), his engineering philosophy, or how to contact him.",
    sectionLink: {
      label: "View Featured Projects →",
      href: "/#projects",
    },
  };
}
