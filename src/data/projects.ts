import type { Project } from "@/types/project";

/**
 * All project data — used by both the UI and the AI assistant.
 * Only contains verified information provided by Shashank.
 */
export const projects: Project[] = [
  {
    slug: "wandernest",
    title: "WanderNest AI",
    subtitle:
      "A full-stack travel platform with AI-powered trip planning, real-time booking, and intelligent recommendations.",
    description:
      "WanderNest AI is a comprehensive travel and accommodation platform built as a serious full-stack product. It features complete user authentication with email OTP verification, a booking and reservation system with check-in/check-out validation, AI-powered travel assistance, weather integration, and cloud-based image management.",
    category: "FLAGSHIP PROJECT",
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
      "APIs",
      "AI Integration",
    ],
    problem:
      "Travel platforms often lack intelligent trip planning and fail to provide a seamless end-to-end booking experience. Users need a platform that combines accommodation management with AI-driven travel assistance.",
    context:
      "This project was built as a flagship full-stack application to demonstrate end-to-end product development — from user authentication and database design to AI integration and cloud infrastructure.",
    approach:
      "Built with a server-side MVC architecture using Node.js and Express.js. MongoDB with Mongoose handles data modeling for users, listings, bookings, and reviews. The application follows RESTful API conventions and implements proper middleware chains for authentication, authorization, and error handling.",
    architecture:
      "The application follows a clean MVC architecture with Express.js routing, EJS templating, and Mongoose ODM. Authentication is handled via Passport.js with session management. Cloudinary serves as the image CDN. The AI travel assistant integrates with an LLM API to provide contextual travel recommendations based on user queries and listing data.",
    features: [
      {
        title: "User Authentication",
        description:
          "Complete auth system with signup, login, and session management via Passport.js.",
        icon: "Shield",
      },
      {
        title: "Email OTP Verification",
        description:
          "Email-based OTP verification for account security during registration.",
        icon: "Mail",
      },
      {
        title: "Forgot Password / Reset",
        description:
          "Secure password reset flow with email-based recovery tokens.",
        icon: "KeyRound",
      },
      {
        title: "Booking & Reservation System",
        description:
          "Full booking lifecycle with date selection, availability checking, and reservation management.",
        icon: "CalendarCheck",
      },
      {
        title: "Check-in/Check-out Validation",
        description:
          "Date validation logic ensuring proper check-in and check-out sequences.",
        icon: "Clock",
      },
      {
        title: "Search & Filtering",
        description:
          "Search functionality with filters for location, price, and amenities.",
        icon: "Search",
      },
      {
        title: "Map/Geocoding Integration",
        description:
          "Interactive maps with geocoding to display listing locations visually.",
        icon: "MapPin",
      },
      {
        title: "Cloud Image Storage",
        description:
          "Cloudinary integration for image upload, storage, transformation, and CDN delivery.",
        icon: "Cloud",
      },
      {
        title: "Booking Confirmation & Cancellation Emails",
        description:
          "Automated transactional emails for booking confirmations and cancellations.",
        icon: "MailCheck",
      },
      {
        title: "AI Travel Assistant",
        description:
          "An intelligent chatbot that provides personalized travel recommendations and answers queries about listings.",
        icon: "Sparkles",
      },
      {
        title: "Weather Integration",
        description:
          "Real-time weather data for destinations to help users plan their trips.",
        icon: "CloudSun",
      },
    ],
    challenges: [
      "Implementing a robust booking system with proper date conflict resolution and concurrency handling.",
      "Designing the authentication flow to handle OTP verification, password reset, and session management securely.",
      "Integrating the AI travel assistant to provide contextually relevant responses grounded in actual listing data.",
      "Managing cloud image uploads with proper validation, transformation, and error handling via Cloudinary.",
    ],
    decisions: [
      {
        decision: "EJS over React for frontend",
        reasoning:
          "Server-side rendering with EJS was chosen for faster initial load times and simpler deployment, as the primary focus was demonstrating full-stack architecture rather than complex client-side interactions.",
      },
      {
        decision: "MongoDB with Mongoose",
        reasoning:
          "The flexible document model suited the varied data structures (users, listings, bookings, reviews). Mongoose provided schema validation and powerful query building.",
      },
      {
        decision: "Passport.js for authentication",
        reasoning:
          "Passport's strategy-based architecture allowed clean separation of authentication logic and easy extensibility for multiple auth methods.",
      },
      {
        decision: "Cloudinary for images",
        reasoning:
          "Cloud-based image management eliminated the need for self-hosted file storage, provided automatic image optimization, and offered CDN delivery for performance.",
      },
    ],
    result:
      "A production-ready travel platform that demonstrates end-to-end full-stack development capabilities — from secure authentication and complex booking logic to AI integration and cloud infrastructure.",
    links: {
      github: "https://github.com/shashank8536",
    },
  },
  {
    slug: "campus-marketplace",
    title: "Campus Marketplace",
    subtitle:
      "A full-stack marketplace connecting students — buy, sell, and chat in real-time.",
    description:
      "Campus Marketplace is a platform designed specifically around student needs, enabling students to buy, sell, and communicate within their campus community. It features full-stack architecture with real-time communication capabilities.",
    category: "STUDENT PLATFORM",
    categoryColor: "secondary",
    isFeatured: false,
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    problem:
      "Students often struggle to buy and sell items within their campus community. Existing platforms like OLX or Facebook Marketplace are not tailored to the campus context, leading to trust issues, irrelevant listings, and poor user experience for student-specific needs.",
    context:
      "Built to serve the campus ecosystem where students frequently need to exchange textbooks, electronics, furniture, and other items — particularly during semester transitions.",
    approach:
      "A full-stack marketplace application with user authentication, real-time messaging, and notification systems. Built to provide a trusted, campus-specific trading environment.",
    architecture:
      "Full-stack architecture with MongoDB for data storage, Express.js for the API layer, React.js for the interactive frontend, and Node.js for the server runtime. Includes real-time communication features.",
    features: [
      {
        title: "Marketplace Functionality",
        description:
          "Core buy/sell functionality tailored for campus communities.",
        icon: "ShoppingBag",
      },
      {
        title: "User Authentication",
        description: "Secure authentication to ensure trusted campus-only transactions.",
        icon: "Shield",
      },
      {
        title: "Real-time Chat",
        description:
          "Live messaging between buyers and sellers for quick negotiations.",
        icon: "MessageCircle",
      },
      {
        title: "Notifications",
        description: "Alert system to keep users informed about their listings and messages.",
        icon: "Bell",
      },
    ],
    challenges: [
      "Implementing real-time communication that scales within a campus context.",
      "Designing a trust system appropriate for a student marketplace.",
    ],
    decisions: [
      {
        decision: "React.js for frontend",
        reasoning:
          "The marketplace required complex client-side interactions — real-time chat, dynamic listings, notifications — making React's component model and state management ideal.",
      },
      {
        decision: "MongoDB for data storage",
        reasoning:
          "Flexible document model accommodated varied listing types (textbooks, electronics, furniture) without rigid schema constraints.",
      },
    ],
    result:
      "A functional campus marketplace that demonstrates full-stack development with real-time features, solving a genuine student problem.",
    links: {
      github: "https://github.com/shashank8536",
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
