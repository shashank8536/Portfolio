import { skills } from "@/data/skills";
import { SITE } from "@/lib/utils/constants";
import { RESUME_URL } from "@/data/portfolio";

export interface AIResponse {
  answer: string;
  sectionLink?: {
    label: string;
    href: string;
  };
}

export function generateAnswer(userQuery: string): AIResponse {
  const query = userQuery.toLowerCase().trim();

  // 1. WanderNest specific deep dive or challenges
  if (
    (query.includes("wandernest") || query.includes("wander nest")) &&
    (query.includes("difficult") ||
      query.includes("hard") ||
      query.includes("challenge") ||
      query.includes("learn") ||
      query.includes("problem"))
  ) {
    return {
      answer:
        "The trickiest part of WanderNest was the booking flow. It's easy to write a basic endpoint that takes dates and creates a document in MongoDB, but the real difficulty is validating booking date ranges to prevent overlapping reservations before creating a booking.\n\nAnother key aspect was session-based authentication and email OTP verification — making sure temporary tokens expire properly and don't leave orphaned sessions. Building WanderNest taught me that real software complexity lies in edge cases — handling date overlaps, session lifecycles, and managing cloud media pipelines.",
      sectionLink: {
        label: "Read WanderNest Case Study →",
        href: "/projects/wandernest",
      },
    };
  }

  // 2. WanderNest general overview
  if (
    query.includes("wandernest") ||
    query.includes("wander nest") ||
    query.includes("flagship") ||
    query.includes("travel")
  ) {
    return {
      answer:
        "WanderNest is probably the project I'd talk about first because it pushed me beyond just building CRUD features.\n\nI built it as a travel and accommodation platform where users can explore listings, authenticate with email OTP, make bookings, leave reviews, and use an AI-assisted trip planner.\n\nOne part I spent a lot of time thinking about was the booking flow — validating check-in and check-out ranges to prevent conflicting reservations for the same property.\n\nI also worked on session-based authentication with Passport.js, Cloudinary media handling, and the AI integration grounded in actual listing context rather than a generic chatbot.\n\nIf I continued the project, I'd add payment processing with webhooks, automated tests around booking edge cases, and OAuth providers. Those would be the next steps I'd take to make the application more production-ready.",
      sectionLink: {
        label: "Explore WanderNest Project →",
        href: "/projects/wandernest",
      },
    };
  }

  // 3. Campus Marketplace
  if (
    query.includes("campus") ||
    query.includes("marketplace") ||
    query.includes("student")
  ) {
    return {
      answer:
        "I built Campus Marketplace as a full-stack campus platform connecting university students to buy, sell, and trade items with real-time chat.\n\nKey features include domain-restricted authentication (@gla.ac.in), a peer-to-peer barter engine for cashless exchanges, Socket.io-powered 1-on-1 messaging, and an automated privacy protection layer.\n\nTwo of the biggest engineering hurdles were configuring cross-origin session authentication (SameSite/Secure cookies and trust proxies between Netlify and Render) and managing Socket.io connection lifecycles with optimistic UI updates. What I learned was that real-time and transactional applications require prioritizing data integrity—preventing duplicate trade requests while keeping the UI responsive.",
      sectionLink: {
        label: "Explore Campus Marketplace Case Study →",
        href: "/projects/campus-marketplace",
      },
    };
  }

  // 4. What are you currently learning?
  if (
    query.includes("currently learning") ||
    query.includes("learning") ||
    query.includes("explore") ||
    query.includes("curious")
  ) {
    return {
      answer:
        "Right now I'm spending most of my exploration time on three things:\n\n1. AI Agents: Learning how agents actually work — tool calling, structured outputs, memory management, and deterministic workflows rather than simple prompt wrappers.\n2. System Design: Studying how applications behave as user count and request volume grow, understanding bottlenecks, caching, and database indexing.\n3. Backend Engineering: Getting deeper into resilient API design and handling edge cases before they become bug reports.",
      sectionLink: {
        label: "See Ongoing Exploration →",
        href: "/#skills",
      },
    };
  }

  // 5. Approach / Mindset / How you think
  if (
    query.includes("approach") ||
    query.includes("think") ||
    query.includes("philosophy") ||
    query.includes("happy path") ||
    query.includes("mindset")
  ) {
    return {
      answer:
        "My approach to engineering comes down to one thing: I don't just want to know that something works. I want to know why it works, where it breaks, and what I'd have to change when more people start using it.\n\nMost tutorials only show the happy path where every request succeeds and inputs are valid. In practice, I pay close attention to input validation on both sides, clean database schemas, predictable session lifetimes, and handling what happens when an API fails or the network stutters.",
      sectionLink: {
        label: "Read About My Approach →",
        href: "/#about",
      },
    };
  }

  // 6. Resume
  if (query.includes("resume") || query.includes("cv")) {
    const isPlaceholder = RESUME_URL === "[I WILL PROVIDE THIS]";
    return {
      answer: isPlaceholder
        ? "My resume link is configured in the centralized settings and is ready to be viewed once the direct PDF link is updated. You can also contact me directly via email at " +
          SITE.email +
          " and I'll be glad to share it with you!"
        : "You can view or download my resume directly using the button in the header or hero section.",
      sectionLink: {
        label: "View Contact & Resume →",
        href: "/#contact",
      },
    };
  }

  // 7. Tech Stack / Skills
  if (
    query.includes("skill") ||
    query.includes("tech") ||
    query.includes("stack") ||
    query.includes("language") ||
    query.includes("framework") ||
    query.includes("backend") ||
    query.includes("database")
  ) {
    const langs = skills.find((s) => s.title === "LANGUAGES")?.skills.join(", ");
    const frontend = skills.find((s) => s.title === "FRONTEND")?.skills.join(", ");
    const backend = skills.find((s) => s.title === "BACKEND")?.skills.join(", ");
    const databases = skills.find((s) => s.title === "DATABASES")?.skills.join(", ");
    const tools = skills.find((s) => s.title === "TOOLS & SERVICES")?.skills.join(", ");
    const coreCs = skills.find((s) => s.title === "CORE CS")?.skills.join(", ");

    return {
      answer:
        `I work primarily across the full stack with JavaScript, Node.js, Express, React, and MongoDB, alongside Java, Python, and SQL.\n\n` +
        `• Languages: ${langs}\n` +
        `• Frontend & UI: ${frontend}\n` +
        `• Backend & APIs: ${backend}\n` +
        `• Databases: ${databases}\n` +
        `• Tools & Services: ${tools}\n` +
        `• Core CS: ${coreCs}\n\n` +
        `I care more about understanding how these tools work under the hood than just collecting badges.`,
      sectionLink: {
        label: "View All Skills →",
        href: "/#skills",
      },
    };
  }

  // 8. Assistant Architecture / How this works
  if (
    query.includes("how do you work") ||
    query.includes("how does this work") ||
    query.includes("what are you") ||
    query.includes("are you an ai") ||
    query.includes("are you an llm") ||
    query.includes("llm") ||
    query.includes("chatgpt") ||
    query.includes("architecture of this assistant")
  ) {
    return {
      answer:
        "Ask Shashank is a client-side portfolio assistant that uses intent and keyword matching to answer questions from verified portfolio data and guide visitors to relevant sections.\n\nIt runs 100% locally in your browser with instant local responses, zero third-party cloud costs, and no external API keys — keeping all answers grounded in Shashank's actual projects and code.",
      sectionLink: {
        label: "View Featured Projects →",
        href: "/#projects",
      },
    };
  }

  // 9. Outside the code / hobbies
  if (
    query.includes("hobby") ||
    query.includes("outside") ||
    query.includes("free time") ||
    query.includes("fun")
  ) {
    return {
      answer:
        "When I'm not coding, I usually end up exploring something new, tinkering with a side project, or going down a completely unnecessary technical rabbit hole reading documentation and system internals.",
      sectionLink: {
        label: "Read More About Me →",
        href: "/#about",
      },
    };
  }

  // 10. Contact / Opportunities
  if (
    query.includes("contact") ||
    query.includes("hire") ||
    query.includes("email") ||
    query.includes("reach") ||
    query.includes("opportunity") ||
    query.includes("role")
  ) {
    return {
      answer:
        `I'm open to Software Engineer & Full-Stack Developer opportunities. If you're building thoughtful systems or have a project to discuss, I'd love to connect.\n\n` +
        `• Email: ${SITE.email}\n` +
        `• GitHub: ${SITE.github}\n` +
        `• LinkedIn: ${SITE.linkedin}`,
      sectionLink: {
        label: "Go to Contact Section →",
        href: "/#contact",
      },
    };
  }

  // 11. Default Conversational Fallback
  return {
    answer:
      "Hey! Ask Shashank is a client-side portfolio assistant that uses intent and keyword matching to answer questions from verified portfolio data and guide visitors to relevant sections.\n\nYou can ask me about WanderNest, Campus Marketplace, his technical stack, backend architecture, what he's currently learning, or how to get in touch.",
    sectionLink: {
      label: "View Featured Projects →",
      href: "/#projects",
    },
  };
}
