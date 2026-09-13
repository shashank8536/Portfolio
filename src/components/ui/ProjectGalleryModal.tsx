"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface ProjectGalleryModalProps {
  images?: string[];
  projectTitle: string;
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
}

const SCREENSHOT_CAPTIONS: Record<string, { title: string; subtitle: string }> = {
  "/images/wandernest/home.png": {
    title: "Explore Stays & Category Filters",
    subtitle: "Explore listings, filter by trending categories & calculate totals with taxes",
  },
  "/images/wandernest/booking.png": {
    title: "Listing Details & Reservation Flow",
    subtitle: "Dynamic night pricing, conflict-checked reservation date picker & user reviews",
  },
  "/images/wandernest/ai.png": {
    title: "AI Travel Assistant",
    subtitle: "AI trip planner with custom itineraries, live weather insights & packing checklists",
  },
  "/images/wandernest/listings.png": {
    title: "Host Dashboard: Create Listing",
    subtitle: "Property host submission form with Cloudinary image upload & location geocoding",
  },
  "/images/campus/home.png": {
    title: "Marketplace Feed & Multi-Filter System",
    subtitle: "Browse verified campus items, filter by For Sale, Buy, or Barter Exchange",
  },
  "/images/campus/chat.png": {
    title: "Real-Time 1-on-1 Messaging",
    subtitle: "Socket.io real-time chat threads for price negotiation and campus meetup coordination",
  },
  "/images/campus/profile.png": {
    title: "Student Identity & Campus Verification",
    subtitle: "Domain-restricted @gla.ac.in authentication and student verification profile",
  },
  "/images/campus/listings.png": {
    title: "Student Identity & Campus Verification",
    subtitle: "Domain-restricted @gla.ac.in authentication and student verification profile",
  },
};

export function ProjectGalleryModal({
  images = [],
  projectTitle,
  isOpen,
  initialIndex = 0,
  onClose,
}: ProjectGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setImageErrors({});
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, images.length, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];
  const isBroken = imageErrors[currentIndex];
  const currentCaption = SCREENSHOT_CAPTIONS[currentImg];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} screenshot viewer`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl border border-white/[0.1] bg-[#0c111c] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-3.5 bg-[#090d16]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-cyan-400 font-semibold uppercase shrink-0">
                {projectTitle}
              </span>
              <span className="text-slate-600">·</span>
              <span className="font-mono text-xs text-slate-400 shrink-0">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
            {currentCaption && (
              <>
                <span className="hidden sm:inline text-slate-600">·</span>
                <span className="text-xs text-slate-200 font-medium truncate">
                  {currentCaption.title}
                  <span className="hidden md:inline text-slate-400 font-normal ml-1.5">
                    — {currentCaption.subtitle}
                  </span>
                </span>
              </>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close screenshot preview"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body / Image Area */}
        <div className="relative flex-1 flex items-center justify-center min-h-[380px] max-h-[72vh] p-4 bg-[#070a10]">
          {!isBroken ? (
            <div className="relative w-full h-[58vh] min-h-[350px] max-h-[620px] flex items-center justify-center">
              <Image
                src={currentImg}
                alt={currentCaption?.title || `${projectTitle} screenshot ${currentIndex + 1}`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain rounded-lg"
                onError={() =>
                  setImageErrors((prev) => ({ ...prev, [currentIndex]: true }))
                }
              />
            </div>
          ) : (
            /* Friendly, professional fallback when actual screenshot is not yet placed in /public/images/... */
            <div className="flex flex-col items-center justify-center text-center p-8 space-y-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400">
                <ImageIcon className="h-8 w-8 text-cyan-400 mx-auto mb-2 opacity-80" />
                <p className="text-slate-200 font-semibold text-sm">Screenshot Slot</p>
                <p className="text-slate-400 mt-1">{currentImg}</p>
              </div>
              <p className="text-slate-400 max-w-sm font-sans text-xs">
                To display your real screenshot here, save your image file to{" "}
                <code className="text-cyan-300 bg-white/[0.05] px-1 py-0.5 rounded">
                  public{currentImg}
                </code>
              </p>
            </div>
          )}

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
                }
                aria-label="Previous screenshot"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 border border-white/[0.1] text-white hover:bg-slate-800 transition-all cursor-pointer shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                aria-label="Next screenshot"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 border border-white/[0.1] text-white hover:bg-slate-800 transition-all cursor-pointer shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex items-center gap-2.5 p-3 overflow-x-auto border-t border-white/[0.06] bg-[#090d16] justify-center">
            {images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View screenshot ${idx + 1}`}
                className={`relative h-12 w-20 rounded-md border overflow-hidden transition-all shrink-0 cursor-pointer ${
                  currentIndex === idx
                    ? "border-cyan-400 ring-2 ring-cyan-400/60 opacity-100 scale-105"
                    : "border-white/[0.1] opacity-60 hover:opacity-100 hover:border-white/[0.3]"
                }`}
              >
                {!imageErrors[idx] ? (
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                    onError={() =>
                      setImageErrors((prev) => ({ ...prev, [idx]: true }))
                    }
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-[10px] font-mono text-slate-400 bg-slate-900">
                    #{idx + 1}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
