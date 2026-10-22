"use client";

import { useState } from "react";
import { projectsData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ["All", "Data Science", "Web Development", "Mobile Development"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  // Premier Featured Project (Customer Behavior Analysis Dashboard)
  const premierProject = projectsData.find((p) => p.id === 1);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 relative bg-[#07080a]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-orange-400 tracking-wider uppercase mb-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span>03 // Selected Case Studies</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Systems, Dashboards <br className="hidden sm:inline" />
              &amp; <span className="text-gradient-orange">Production Applications</span>.
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            Real products built with empirical analytics, machine learning, modern web frameworks, and native mobile engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-mono-code transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/20"
                  : "bg-neutral-900/80 border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PREMIER FEATURED CASE STUDY (Only shown when 'All' or 'Data Science' is active) */}
        {(activeFilter === "All" || activeFilter === "Data Science") && premierProject && (
          <div className="mb-14 relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500/20 via-orange-600/10 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative rounded-2xl bg-[#0c0e14] border border-orange-500/30 overflow-hidden p-6 md:p-10 shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left: Project Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono-code text-[11px] px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40">
                      ★ PREMIER SHOWCASE
                    </span>
                    <span className="font-mono-code text-[11px] px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {premierProject.category} &bull; {premierProject.type}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                    {premierProject.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                    {premierProject.description}
                  </p>

                  {/* Highlights Bullet Matrix */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono-code text-gray-400 uppercase tracking-wider">
                      Key Analytical Milestones
                    </div>
                    <ul className="space-y-2 text-xs md:text-sm text-gray-300">
                      {premierProject.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-orange-500 font-bold mt-0.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {premierProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono-code text-xs px-2.5 py-1 rounded-md bg-neutral-900 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => setActiveProjectModal(premierProject)}
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs md:text-sm px-5 py-3 rounded-xl transition-all shadow-lg shadow-orange-500/20"
                    >
                      <span className="text-base">▶</span>
                      <span>Watch Interactive Demo</span>
                    </button>

                    {premierProject.githubUrl && (
                      <a
                        href={premierProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-gray-300 hover:text-white text-xs md:text-sm px-5 py-3 rounded-xl border border-white/10 hover:border-orange-500/50 transition-colors"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Video Teaser Card */}
                <div
                  className="lg:col-span-6 cursor-pointer relative group/preview"
                  onClick={() => setActiveProjectModal(premierProject)}
                >
                  <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black aspect-video flex items-center justify-center shadow-2xl">
                    <video
                      src={premierProject.videoUrl}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover filter brightness-90 group-hover/preview:brightness-100 transition-all duration-300"
                    />

                    {/* Centered Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover/preview:bg-black/20 flex flex-col items-center justify-center gap-3 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-orange-500/90 text-white flex items-center justify-center text-xl shadow-2xl shadow-orange-500/50 group-hover/preview:scale-110 transition-transform">
                        ▶
                      </div>
                      <span className="font-mono-code text-xs text-white bg-black/70 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                        Click to expand demo
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 font-mono-code text-[11px] text-gray-300 bg-black/80 px-2.5 py-1 rounded backdrop-blur-md border border-white/10">
                      3,900+ Records Analyzed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid of Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((p) => p.id !== (activeFilter === "All" ? 1 : null))
            .map((project) => (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                {/* Visual Video Preview Area */}
                <div
                  className="relative aspect-video bg-neutral-950 overflow-hidden border-b border-white/10 cursor-pointer"
                  onClick={() => setActiveProjectModal(project)}
                >
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover filter brightness-85 group-hover:brightness-100 group-hover:scale-102 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl text-gray-700 font-mono-code">
                      {project.icon}
                    </div>
                  )}

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Category Pill Over Video */}
                  <div className="absolute top-3 left-3 font-mono-code text-[10px] px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-orange-400">
                    {project.category}
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-orange-500/90 text-white flex items-center justify-center text-xs shadow-lg group-hover:scale-110 transition-transform">
                    ▶
                  </div>

                  <div className="absolute bottom-3 left-3 font-mono-code text-[10px] text-gray-300">
                    {project.type}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h4
                      onClick={() => setActiveProjectModal(project)}
                      className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h4>

                    <p className="text-xs text-gray-300 leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="text-xs font-mono-code text-orange-400 hover:text-orange-300 font-medium flex items-center gap-1"
                      >
                        <span>Case Details</span>
                        <span>→</span>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono-code text-gray-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Project Modal */}
      {activeProjectModal && (
        <ProjectModal
          key={activeProjectModal.id}
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </section>
  );
}
