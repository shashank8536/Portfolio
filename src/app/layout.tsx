import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
  title: "Shashank Shekhar — Full Stack Developer",
  description:
    "I build technology that solves real problems. Full Stack Developer & AI Enthusiast — explore my projects, skills, and story.",
  keywords: [
    "Shashank Shekhar",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Node.js",
    "AI",
    "Web Developer",
  ],
  authors: [{ name: "Shashank Shekhar" }],
  openGraph: {
    title: "Shashank Shekhar — Full Stack Developer",
    description:
      "I build technology that solves real problems. Explore my projects, skills, and story.",
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
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
