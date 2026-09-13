import type { Project } from "@/types/project";
import { WANDERNEST_REPO, CAMPUS_MARKETPLACE_REPO } from "@/data/portfolio";

/**
 * All project data — used by both the UI and the AI assistant.
 * Only contains verified information provided by Shashank.
 * No fabricated stats or fake claims.
 */
export const projects: Project[] = [
  {
    slug: "wandernest",
    title: "WanderNest",
    subtitle:
      "A full-stack travel and accommodation platform with authentication, property listings, bookings, media uploads, maps, and an AI-assisted trip planner.",
    description:
      "I built WanderNest to explore what happens when a typical CRUD application starts dealing with real workflows — authentication states, booking conflicts, uploaded media, and AI features that need actual application data.",
    category: "SIGNATURE PROJECT",
    categoryColor: "primary",
    isFeatured: true,
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap",
      "Passport.js",
      "Cloudinary",
      "Mapbox API",
      "Gemini AI",
    ],
    images: [
      "/images/wandernest/home.png",
      "/images/wandernest/booking.png",
      "/images/wandernest/ai.png",
      "/images/wandernest/listings.png",
    ],
    whyIBuiltIt:
      "I built WanderNest to explore what happens when a typical CRUD application starts dealing with real workflows — authentication states, booking conflicts, uploaded media, and AI features that need actual application data.",
    whatIActuallyBuilt: [
      "Session-based authentication with Passport.js",
      "Email OTP verification and password reset flow",
      "Booking logic with overlapping-date conflict prevention",
      "MongoDB/Mongoose models for users, listings, bookings & reviews",
      "Express routes and middleware for application requests",
      "Cloudinary-backed image uploads, storage & configured transformations",
      "Interactive maps with geocoding",
      "AI-assisted travel planner using application/listing context",
    ],
    engineeringChallenges: [
      {
        title: "01 — Preventing overlapping bookings",
        description:
          "Validating check-in and check-out ranges to prevent conflicting reservations for the same property.",
      },
      {
        title: "02 — Designing the booking data model",
        description:
          "Structuring relationships between users, listings, bookings and reviews in MongoDB/Mongoose without unnecessary nesting.",
      },
      {
        title: "03 — Session + OTP authentication",
        description:
          "Building a multi-step registration flow with OTP verification, expiration handling and Passport.js session management.",
      },
      {
        title: "04 — Handling uploaded media",
        description:
          "Handling property image uploads through Cloudinary for storage and configured transformations.",
      },
      {
        title: "05 — Connecting AI suggestions to application data",
        description:
          "Providing relevant listing/application context to the AI assistant so recommendations are grounded in the platform's actual data rather than generic responses.",
      },
    ],
    decisions: [
      {
        decision: "Server-Side Rendering with EJS",
        reasoning:
          "EJS templates allowed me to focus on core backend mechanics, session lifecycles, and clean routing without the overhead of client-server state synchronization.",
      },
      {
        decision: "MongoDB with Mongoose Schemas",
        reasoning:
          "Structuring relationships between users, listings, bookings and reviews in MongoDB/Mongoose while keeping the models understandable and practical for the application's workflows.",
      },
      {
        decision: "Cloudinary for Property Media",
        reasoning:
          "Replaced local filesystem storage with Cloudinary to handle multi-part uploads, cloud persistence, and URL-based image transformations.",
      },
    ],
    whatILearned:
      "Making individual features work was one thing; making different parts of the application behave correctly when they interacted was the harder part.",
    whatIWouldImprove:
      "If I continued the project, I'd add payment processing with webhooks, automated tests around booking edge cases, and OAuth providers.",
    problem:
      "Most travel tutorials stop at simple listing displays and basic forms. Building a practical platform required handling real-world workflows: session persistence, date validations to prevent overlapping reservations, cloud media uploads, and integrating an AI travel assistant with actual database listings.",
    context:
      "Built as a full-stack project to understand real application lifecycles — managing user sessions, handling media storage outside local disk, preventing booking conflicts, and connecting an external LLM to platform data.",
    approach:
      "Structured as a server-side MVC application using Node.js and Express.js. MongoDB with Mongoose handles schemas and relationships for users, listings, bookings, and reviews. Routes are protected with modular Express middleware for authentication and ownership authorization.",
    architecture:
      "Server-side rendered MVC architecture using Express.js routing, EJS templating, and Mongoose ODM. Session-based authentication is managed via Passport.js with MongoDB session storage and nodemailer/Brevo for OTP delivery. Cloudinary handles property media storage and configured image transformations. Interactive maps use the Mapbox Geocoding API and Mapbox GL JS, while the trip planner queries the Google Gemini API with listing context.",
    features: [
      {
        title: "Session Authentication & OTP",
        description:
          "Passport.js session-based authentication with email OTP verification and expiration-guarded password reset flow.",
        icon: "Shield",
      },
      {
        title: "Booking Conflict Prevention",
        description:
          "Validates check-in and check-out date ranges against existing reservations for the same property before booking.",
        icon: "CalendarCheck",
      },
      {
        title: "Media Uploads & Storage",
        description:
          "Cloudinary-backed property image uploads, cloud storage, and configured URL transformations.",
        icon: "Cloud",
      },
      {
        title: "Interactive Maps & Geocoding",
        description:
          "Mapbox forward geocoding converts addresses to coordinates and renders interactive maps with location markers.",
        icon: "MapPin",
      },
      {
        title: "AI-Assisted Trip Planner",
        description:
          "Gemini-powered travel assistant that creates itineraries and recommends stays grounded in actual platform listings.",
        icon: "Sparkles",
      },
    ],
    challenges: [
      "Validating check-in and check-out ranges to prevent conflicting reservations for the same property.",
      "Structuring relationships between users, listings, bookings and reviews in MongoDB/Mongoose without unnecessary nesting.",
      "Building a multi-step registration flow with OTP verification, expiration handling and Passport.js session management.",
      "Handling property image uploads through Cloudinary for storage and configured transformations.",
      "Providing relevant listing/application context to the AI assistant so recommendations are grounded in the platform's actual data rather than generic responses.",
    ],
    result:
      "A functional full-stack travel platform demonstrating end-to-end backend workflows — from session-based auth and reservation conflict checks to cloud media handling and contextual AI suggestions.",
    links: {
      github: WANDERNEST_REPO,
      live: "https://wandernest-ebz2.onrender.com/listings",
    },
  },
  {
    slug: "campus-marketplace",
    title: "Campus Marketplace",
    subtitle:
      "A full-stack campus platform connecting students to buy, sell, and trade items with live chat.",
    description:
      "A full-stack campus platform connecting students to buy, sell, and trade items with live chat.",
    category: "STUDENT ECOSYSTEM",
    categoryColor: "secondary",
    isFeatured: false,
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
    images: [
      "/images/campus/home.png",
      "/images/campus/chat.png",
      "/images/campus/profile.png",
    ],
    whyIBuiltIt:
      "Students frequently need to buy, sell, and trade textbooks, electronics, and supplies during semester transitions. General classifieds lack student trust, campus verification, and structured barter options. I built this to provide a trusted, student-oriented platform with real-time negotiation.",
    whatIActuallyBuilt: [
      "Domain-restricted campus authentication (@gla.ac.in verification)",
      "Peer-to-peer barter engine for cashless item-to-item exchanges",
      "Real-time 1-on-1 chat and instant inquiry notifications via Socket.io",
      "Dynamic search and multi-parameter filtering (category, price range, type)",
      "Privacy protection layer automatically redacting sensitive contact data",
      "Production deployment on Netlify (frontend) and Render (backend)",
    ],
    engineeringChallenges: [
      {
        title: "01 — Cross-Origin Session Authentication",
        description:
          "Resolving cross-site cookie restrictions between Netlify (frontend) and Render (backend) by configuring trust proxies and SameSite/Secure cookie attributes.",
      },
      {
        title: "02 — Real-Time Chat & State Synchronization",
        description:
          "Handling Socket.io connection lifecycles, private room routing, and optimistic UI updates so messages appear instantaneously without latency lag.",
      },
    ],
    decisions: [
      {
        decision: "React.js + Socket.io for Frontend",
        reasoning:
          "The marketplace required dynamic client-side interactions — real-time chat, instant notifications, and optimistic UI updates — making React's state management and Socket.io events ideal.",
      },
      {
        decision: "Decoupled Architecture (Netlify + Render)",
        reasoning:
          "Separating the React SPA on Netlify CDN from the Express/Socket.io backend on Render optimized delivery and isolated real-time socket connections.",
      },
    ],
    whatILearned:
      "Real-time and transactional applications require prioritizing data integrity—preventing duplicate trade requests while keeping the UI responsive through optimistic state updates.",
    whatIWouldImprove:
      "If I continued the project, I'd implement Redis adapter for Socket.io scaling across clusters, escrow-style meetup verification, and push notifications for offline users.",
    problem:
      "Students struggle to buy, sell, and trade items safely within campus, turning to unstructured social chats with zero fraud protection or discovery.",
    context:
      "Built for the university student ecosystem where rapid, trusted exchange of textbooks, devices, and dorm essentials occurs every semester.",
    approach:
      "Engineered a decoupled full-stack marketplace with student domain auth, real-time WebSocket messaging, and a cashless barter trade engine.",
    architecture:
      "Decoupled architecture: React SPA hosted on Netlify communicating via REST APIs and WebSockets (Socket.io) with an Express/Node.js backend hosted on Render, backed by MongoDB Atlas.",
    features: [
      {
        title: "Domain-Restricted Auth",
        description: "@gla.ac.in email verification ensuring verified student access.",
        icon: "Shield",
      },
      {
        title: "Peer-to-Peer Barter Engine",
        description: "Cashless item-to-item trade negotiations and direct exchange proposals.",
        icon: "ShoppingBag",
      },
      {
        title: "Real-Time Chat (Socket.io)",
        description: "Instant 1-on-1 negotiation chat with room routing and inquiry alerts.",
        icon: "MessageCircle",
      },
      {
        title: "Dynamic Search & Filters",
        description: "Multi-parameter filtering across categories, price ranges, and trade types.",
        icon: "Search",
      },
      {
        title: "Privacy Protection Layer",
        description: "Automated redaction of sensitive contact details in public listings.",
        icon: "Shield",
      },
    ],
    challenges: [
      "Resolving cross-site cookie restrictions between Netlify and Render with trust proxies and SameSite/Secure flags.",
      "Handling Socket.io connection lifecycles, private room routing, and optimistic UI updates without lag.",
      "Maintaining transactional data integrity during peer-to-peer barter proposals.",
    ],
    result:
      "A production campus platform deployed on Netlify and Render featuring real-time chat, barter trade mechanics, and privacy protection for university students.",
    links: {
      github: CAMPUS_MARKETPLACE_REPO,
      live: "https://gla-marketplace.netlify.app/",
    },
  },
];

/** Get a project by its slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Get the featured project */
export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.isFeatured);
}

/** Get all non-featured projects */
export function getSecondaryProjects(): Project[] {
  return projects.filter((p) => !p.isFeatured);
}
