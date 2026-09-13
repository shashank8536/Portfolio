import type { PortfolioData } from "@/types/project";

/**
 * ============================================================================
 * CENTRAL CONFIGURATION & PORTFOLIO DATA FOR SHASHANK SHEKHAR
 * ============================================================================
 * 
 * Replace the placeholders below when you have your files/links ready:
 * - RESUME_URL: Link to your resume PDF (e.g., "/resume.pdf" or Google Drive link)
 * - PROFILE_IMAGE: Path to your photo (e.g., "/images/profile.jpg")
 * - WANDERNEST_REPO: GitHub repository URL for WanderNest
 * - CAMPUS_MARKETPLACE_REPO: GitHub repository URL for Campus Marketplace
 * - LINKEDIN_URL: Your LinkedIn profile URL
 * - GITHUB_PROFILE: Your GitHub profile URL
 */

export const RESUME_URL: string = "/Shashank_Resume.pdf";
export const PROFILE_IMAGE: string = "/images/profile.jpg";
export const GITHUB_PROFILE: string = "https://github.com/shashank8536";
export const LINKEDIN_URL: string = "https://www.linkedin.com/in/shashank8536/";
export const EMAIL_ADDRESS: string = "shashankshekhargiri2003@gmail.com";
export const WANDERNEST_REPO: string = "https://github.com/shashank8536/WanderNest";
export const CAMPUS_MARKETPLACE_REPO: string = "https://github.com/shashank8536/Campus-MarketPlace";

export const portfolio: PortfolioData = {
  name: "Shashank Shekhar",
  role: "Software Engineer · Full-Stack & AI Systems",
  tagline: "I like taking ideas from “this could be useful” to “this actually\u00A0works.”",
  resumeUrl: RESUME_URL,
  profileImage: PROFILE_IMAGE,
  about: [
    "I'm a software engineer focused on full-stack development, backend systems, and AI-powered features. I enjoy taking an idea from something that sounds useful to something people can actually use.",
    "Most of my learning has come through building projects — working with authentication, APIs, databases, cloud services, and the parts of an application that aren't always visible on the screen.",
    "What interests me most is what happens underneath: why an API fails, how different parts of a system interact, what happens when users do unexpected things, and how a simple application can be improved as it grows.",
  ],
  socialLinks: {
    github: GITHUB_PROFILE,
    linkedin: LINKEDIN_URL,
    email: EMAIL_ADDRESS,
  },
  repoUrls: {
    wandernest: WANDERNEST_REPO,
    campusMarketplace: CAMPUS_MARKETPLACE_REPO,
  },
  currentlyLearning: [
    {
      topic: "AI Agents",
      description: "Trying to understand tool calling, memory, context and multi-step workflows.",
    },
    {
      topic: "System Design",
      description: "Learning how applications behave as the number of users and requests grows.",
    },
    {
      topic: "Backend Engineering",
      description: "Improving how I design APIs and handle real-world edge cases.",
    },
  ],
  outsideTheCode:
    "When I'm not coding, I usually end up exploring something new, working on a side project, or going down a completely unnecessary technical rabbit hole.",
};
