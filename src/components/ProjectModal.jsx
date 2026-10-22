"use client";

import { useEffect, useSyncExternalStore, useRef } from "react";
import { createPortal } from "react-dom";

const emptySubscribe = () => () => {};

export default function ProjectModal({ project, onClose }) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const detailsScrollRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  useEffect(() => {
    if (detailsScrollRef.current) {
      detailsScrollRef.current.scrollTop = 0;
    }
  }, [project]);

  if (!project || !isClient) return null;

  const isMobileApp = project.category === "Mobile Development";

  const modalMarkup = (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Full-Display Centered Modal Window */}
      <div
        className="relative w-full h-[96vh] sm:h-[90vh] max-w-7xl bg-[#0c0e14] border border-white/15 rounded-2xl md:rounded-3xl shadow-2xl shadow-black/95 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Navigation & Status Bar */}
        <div className="shrink-0 bg-[#0c0e14] border-b border-white/10 px-4 sm:px-6 md:px-8 py-3.5 flex items-center justify-between gap-4 z-20">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30 shrink-0">
                {project.category}
              </span>
              <span className="hidden sm:inline font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10 shrink-0">
                {project.type}
              </span>
            </div>
            <h2 className="text-base sm:text-xl md:text-2xl font-extrabold text-white tracking-tight truncate">
              {project.title}
            </h2>
          </div>

          {/* Close Action */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden md:inline font-mono-code text-xs text-gray-500">
              [ESC]
            </span>
            <button
              onClick={onClose}
              aria-label="Close project preview"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-900 border border-white/15 hover:border-orange-500 text-gray-400 hover:text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* 2-Column Split Workspace: Left = Video Demo, Right = Project Details */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* LEFT COLUMN: Video Player Showcase */}
          <div className="lg:col-span-7 h-auto lg:h-full bg-black/75 flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden shrink-0 max-h-[42vh] sm:max-h-[48vh] lg:max-h-full">
            {/* Live Indicator Badge */}
            <div className="absolute top-3 left-3 z-10 font-mono-code text-[10px] sm:text-[11px] px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-orange-400 flex items-center gap-1.5 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>{isMobileApp ? "MOBILE DEMO PLAYBACK" : "SYSTEM DEMO PLAYBACK"}</span>
            </div>

            {project.videoUrl ? (
              <div className="w-full h-full flex items-center justify-center">
                {isMobileApp ? (
                  /* Mobile App Portrait Frame */
                  <div className="relative h-full max-h-[38vh] sm:max-h-[44vh] lg:max-h-[72vh] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl border-2 border-neutral-700 flex items-center justify-center">
                    <video
                      controls
                      playsInline
                      autoPlay
                      loop
                      muted
                      preload="metadata"
                      className="w-full h-full object-contain bg-black"
                      src={project.videoUrl}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  /* Web / Dashboard Widescreen Frame */
                  <div className="relative w-full max-w-4xl max-h-[38vh] sm:max-h-[44vh] lg:max-h-[72vh] aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-white/10 flex items-center justify-center">
                    <video
                      controls
                      playsInline
                      autoPlay
                      loop
                      muted
                      preload="metadata"
                      className="w-full h-full object-contain bg-black"
                      src={project.videoUrl}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-xl bg-neutral-900/80 border border-white/10 p-8 text-center text-gray-400">
                <p>Demo walkthrough video in preparation.</p>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Project Details (Scrollable) */}
          <div
            ref={detailsScrollRef}
            className="lg:col-span-5 h-full overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Tagline */}
              {project.tagline && (
                <div className="p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200 text-xs sm:text-sm leading-relaxed">
                  {project.tagline}
                </div>
              )}

              {/* Project Architecture & Overview */}
              <div className="space-y-2.5">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                  <span>Project Architecture &amp; Overview</span>
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Key Technical Highlights & Outcomes */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-2.5">
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                    <span>Key Technical Highlights &amp; Outcomes</span>
                  </h3>
                  <ul className="grid gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-lg bg-neutral-900/70 border border-white/5 text-gray-300 text-xs sm:text-sm"
                      >
                        <span className="text-orange-500 font-mono-code text-xs mt-0.5 shrink-0">
                          0{idx + 1}
                        </span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies & Tooling */}
              <div className="space-y-2">
                <h3 className="text-[11px] font-mono-code text-gray-400 tracking-wider uppercase">
                  Technologies &amp; Toolsets
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono-code text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-neutral-900 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View on GitHub</span>
                </a>
              ) : (
                <div />
              )}

              <button
                onClick={onClose}
                className="text-xs font-mono-code text-gray-400 hover:text-white px-3.5 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalMarkup, document.body);
}
