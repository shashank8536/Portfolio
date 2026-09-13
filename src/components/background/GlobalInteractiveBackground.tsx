"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * GlobalInteractiveBackground
 * 
 * Implements a global, persistent, cursor-reactive atmospheric background:
 * - One primary large soft dark grey / charcoal ball that responds to the cursor with physical mass & lag
 * - One optional subtle secondary ambient ball that drifts independently
 * - Persistent across the entire application (Hero, About, Projects, Skills, Contact, Footer)
 * - Fixed at z-index 0 with pointer-events: none (never interferes with user interactions)
 * - Uses direct translate3d via requestAnimationFrame for zero-re-render 60fps performance
 * - Graceful fallback for mobile & prefers-reduced-motion
 */
export function GlobalInteractiveBackground() {
  const prefersReduced = useReducedMotion();
  const primaryBallRef = useRef<HTMLDivElement | null>(null);
  const ambientBallRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReduced) return;

    let rafId: number;
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 1440;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 900;

    // Approximate half-diameter for centering
    let halfPrimary = Math.min(Math.max(windowWidth * 0.15, 140), 240);
    let halfAmbient = Math.min(Math.max(windowWidth * 0.1, 90), 150);

    // Primary ball state (starts in upper-right quadrant)
    let currentX = windowWidth * 0.62;
    let currentY = windowHeight * 0.32;
    let targetX = currentX;
    let targetY = currentY;

    // Ambient ball state (slow independent drift in lower-left)
    let currentAmbX = windowWidth * 0.22;
    let currentAmbY = windowHeight * 0.68;

    let hasMouseMoved = false;
    let startTime = performance.now();

    const handleResize = () => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      halfPrimary = Math.min(Math.max(windowWidth * 0.15, 140), 240);
      halfAmbient = Math.min(Math.max(windowWidth * 0.1, 90), 150);
    };

    const handleMouseMove = (e: MouseEvent) => {
      hasMouseMoved = true;
      // Cursor influence:
      // Translates across 88% of the viewport with a slight organic inward offset
      // so the ball is visibly responsive and follows the cursor through the area
      targetX = e.clientX * 0.88 + windowWidth * 0.06;
      targetY = e.clientY * 0.88 + windowHeight * 0.06;
    };

    const handleMouseLeave = () => {
      // When cursor leaves viewport, smoothly settle toward neutral zone
      targetX = windowWidth * 0.58;
      targetY = windowHeight * 0.38;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const animate = (time: number) => {
      const elapsed = time - startTime;

      // Subtle idle breathing and floating drift when mouse is stationary
      const idleOffsetBX = Math.sin(elapsed * 0.0012) * 26;
      const idleOffsetBY = Math.cos(elapsed * 0.0009) * 20;
      const idleScale = 1 + Math.sin(elapsed * 0.0007) * 0.035;

      if (!hasMouseMoved) {
        // Natural ambient floating before mouse interaction (e.g. initial load or touch devices)
        targetX = windowWidth * 0.6 + Math.sin(elapsed * 0.00075) * 85;
        targetY = windowHeight * 0.35 + Math.cos(elapsed * 0.00065) * 65;
      }

      // Physics Interpolation:
      // Factor of ~0.065 gives clear physical mass, quick initiation, and noticeable trailing lag when cursor moves
      const finalTargetX = targetX + idleOffsetBX;
      const finalTargetY = targetY + idleOffsetBY;

      currentX += (finalTargetX - currentX) * 0.065;
      currentY += (finalTargetY - currentY) * 0.065;

      // Render Primary Ball with GPU hardware-accelerated translate3d
      if (primaryBallRef.current) {
        const renderX = currentX - halfPrimary;
        const renderY = currentY - halfPrimary;
        primaryBallRef.current.style.transform = `translate3d(${renderX.toFixed(1)}px, ${renderY.toFixed(1)}px, 0) scale(${idleScale.toFixed(3)})`;
      }

      // Render Optional Second Ambient Ball (independent slow ambient drift)
      if (ambientBallRef.current) {
        const ambTargetX = windowWidth * 0.22 + Math.sin(elapsed * 0.00045) * 80;
        const ambTargetY = windowHeight * 0.7 + Math.cos(elapsed * 0.00038) * 60;
        const ambScale = 1 + Math.cos(elapsed * 0.0006) * 0.04;

        currentAmbX += (ambTargetX - currentAmbX) * 0.025;
        currentAmbY += (ambTargetY - currentAmbY) * 0.025;

        const renderAmbX = currentAmbX - halfAmbient;
        const renderAmbY = currentAmbY - halfAmbient;
        ambientBallRef.current.style.transform = `translate3d(${renderAmbX.toFixed(1)}px, ${renderAmbY.toFixed(1)}px, 0) scale(${ambScale.toFixed(3)})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReduced]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Subtle modern architectural grid to anchor depth */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* =========================================================================
          PRIMARY BALL: Large Soft Dark Grey / Charcoal Sphere (Cursor-Reactive)
          Diameter: ~280px - 480px, responsive clamp
          Radial gradient: medium-dark slate grey center -> dark charcoal -> transparent
          ========================================================================= */}
      <div
        ref={primaryBallRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: "clamp(300px, 34vw, 500px)",
          height: "clamp(300px, 34vw, 500px)",
          background: `
            radial-gradient(
              circle at 45% 45%,
              rgba(175, 185, 205, 0.38) 0%,
              rgba(115, 125, 145, 0.28) 28%,
              rgba(65, 72, 88, 0.16) 55%,
              rgba(30, 34, 44, 0.06) 72%,
              transparent 85%
            )
          `,
          filter: "blur(44px)",
          // Initial static placement fallback for reduced motion
          transform: prefersReduced ? "translate3d(55vw, 25vh, 0)" : "translate3d(55vw, 25vh, 0)",
        }}
      />

      {/* =========================================================================
          OPTIONAL SECOND AMBIENT BALL: Subtle Darker Drifting Sphere
          Diameter: ~180px - 300px
          Drifts independently in lower quadrant with low opacity
          ========================================================================= */}
      <div
        ref={ambientBallRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: "clamp(180px, 20vw, 300px)",
          height: "clamp(180px, 20vw, 300px)",
          background: `
            radial-gradient(
              circle at 50% 50%,
              rgba(85, 92, 108, 0.15) 0%,
              rgba(45, 50, 62, 0.09) 45%,
              transparent 75%
            )
          `,
          filter: "blur(42px)",
          // Initial static placement fallback for reduced motion
          transform: prefersReduced ? "translate3d(15vw, 65vh, 0)" : "translate3d(15vw, 65vh, 0)",
        }}
      />
    </div>
  );
}
