"use client";

import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0c0e14] border border-white/15 hover:border-orange-500/40 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl shadow-black/80 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-neutral-900/90 border border-white/10 hover:border-orange-500 text-gray-400 hover:text-white flex items-center justify-center transition-colors shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-10 space-y-8">
          {/* Header Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="font-mono-code text-xs px-3 py-1 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30">
                {project.category}
              </span>
              <span className="font-mono-code text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                {project.type}
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            {project.tagline && (
              <p className="text-gray-400 text-sm md:text-base mt-2 leading-relaxed">
                {project.tagline}
              </p>
            )}
          </div>

          {/* Video Player */}
          {project.videoUrl ? (
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/90 shadow-2xl relative">
              <div className="absolute top-3 left-3 z-10 font-mono-code text-[11px] px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-orange-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span>SYSTEM DEMO RECORDING</span>
              </div>
              <video
                controls
                autoPlay
                playsInline
                loop
                muted
                className="w-full aspect-video object-contain bg-black"
                src={project.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="rounded-xl bg-neutral-900/80 border border-white/10 p-12 text-center text-gray-400">
              <p>Demo walkthrough video in preparation.</p>
            </div>
          )}

          {/* Deep Dive Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span>Project Architecture & Overview</span>
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span>Key Technical Highlights & Outcomes</span>
              </h3>
              <ul className="grid gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900/60 border border-white/5 text-gray-300 text-sm"
                  >
                    <span className="text-orange-500 font-mono-code text-xs mt-0.5">0{idx + 1}</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-code text-gray-400 tracking-wider uppercase">
              Technologies & Tooling
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono-code text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-orange-500/20"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>View Source Code on GitHub</span>
              </a>
            ) : (
              <div />
            )}

            <button
              onClick={onClose}
              className="text-xs font-mono-code text-gray-400 hover:text-white px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            >
              Close Window [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
