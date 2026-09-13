"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FloatingBlobsBackground() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReduced) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Calculate normalized mouse coordinate (-1 to 1)
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    // Smooth lerp loop for parallax offset (max ~18px translation)
    const animate = () => {
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      if (parallaxRef.current) {
        const xPx = currentX * 18;
        const yPx = currentY * 14;
        parallaxRef.current.style.transform = `translate3d(${xPx}px, ${yPx}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReduced]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none"
    >
      {/* Subtle modern Grid Overlay to ground the background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 65% at 50% 45%, black 25%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 65% at 50% 45%, black 25%, transparent 100%)",
        }}
      />

      {/* Mouse Parallax Wrapper */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 h-full w-full will-change-transform transition-transform duration-100 ease-out"
      >
        {/* =========================================================
            BALL 1: Main Large Floating Orb (Cyan / Sky Blue)
            Diameter: 320px - 500px, slowly drifts behind hero/terminal
            ========================================================= */}
        <div
          className={`absolute rounded-full pointer-events-none ${
            prefersReduced ? "" : "animate-float-orb-primary"
          }`}
          style={{
            width: "clamp(260px, 38vw, 480px)",
            height: "clamp(260px, 38vw, 480px)",
            top: "8%",
            right: "5%",
            background:
              "radial-gradient(circle at 38% 38%, rgba(34, 211, 238, 0.26) 0%, rgba(6, 182, 212, 0.16) 40%, rgba(30, 58, 138, 0.08) 70%, transparent 85%)",
            filter: "blur(55px)",
            willChange: "transform",
          }}
        />

        {/* =========================================================
            BALL 2: Secondary Floating Orb (Indigo / Purple)
            Diameter: 220px - 380px, drifting behind text on the left
            ========================================================= */}
        <div
          className={`absolute rounded-full pointer-events-none ${
            prefersReduced ? "" : "animate-float-orb-secondary"
          }`}
          style={{
            width: "clamp(200px, 28vw, 380px)",
            height: "clamp(200px, 28vw, 380px)",
            top: "30%",
            left: "2%",
            background:
              "radial-gradient(circle at 40% 40%, rgba(99, 102, 241, 0.22) 0%, rgba(139, 92, 246, 0.13) 45%, rgba(14, 165, 233, 0.06) 75%, transparent 85%)",
            filter: "blur(50px)",
            willChange: "transform",
          }}
        />

        {/* =========================================================
            BALL 3: Subtle Depth Orb (Teal / Emerald tint, very subtle)
            Diameter: 160px - 260px, drifts through lower-middle
            ========================================================= */}
        <div
          className={`absolute rounded-full pointer-events-none ${
            prefersReduced ? "" : "animate-float-orb-tertiary"
          }`}
          style={{
            width: "clamp(160px, 20vw, 260px)",
            height: "clamp(160px, 20vw, 260px)",
            bottom: "12%",
            left: "45%",
            background:
              "radial-gradient(circle at 45% 45%, rgba(20, 184, 166, 0.16) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 80%)",
            filter: "blur(45px)",
            willChange: "transform",
          }}
        />
      </div>

      {/* Subtle top and bottom atmospheric vignettes */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B0F19] to-transparent pointer-events-none opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none opacity-80" />
    </div>
  );
}
