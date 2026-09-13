import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalInteractiveBackground } from "@/components/background/GlobalInteractiveBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shashank Shekhar — Software Engineer",
  description:
    "Software Engineer building full-stack applications, backend systems, and AI-powered tools with a focus on clean architecture.",
  keywords: [
    "Shashank Shekhar",
    "Software Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AI Agents",
    "System Design",
  ],
  authors: [{ name: "Shashank Shekhar" }],
  openGraph: {
    title: "Shashank Shekhar — Software Engineer",
    description:
      "Software Engineer building full-stack applications, backend systems, and AI-powered tools.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased relative selection:bg-cyan-500/20 selection:text-cyan-200" suppressHydrationWarning>
        <GlobalInteractiveBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
