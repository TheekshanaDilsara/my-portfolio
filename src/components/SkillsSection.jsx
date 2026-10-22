"use client";

import { useState } from "react";
import { skillsData } from "../data/portfolioData";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillsData.map((c) => c.category)];

  const displayedCategories =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((c) => c.category === activeCategory);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Brain":
        return "🧠";
      case "BarChart":
        return "📊";
      case "Code":
        return "💻";
      case "Smartphone":
        return "📱";
      case "Cpu":
        return "⚙️";
      case "Terminal":
        return "🛠️";
      default:
        return "⚡";
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20 relative bg-[#090b10]/40 backdrop-blur-[2px] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-orange-400 tracking-wider uppercase mb-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span>02 // Technical Matrix</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Skills, Toolsets &amp; <br className="hidden sm:inline" />
              <span className="text-gradient-orange">Applied Competencies</span>.
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            Organized across data science, business analytics, full-stack software architectures, and hardware diagnostics.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-mono-code transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/20"
                  : "bg-neutral-900/80 border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-xl">
                    {getCategoryIcon(group.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-gray-400 font-light mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill List */}
                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-gray-200">
                          {skill.name}
                        </span>
                        <span className="font-mono-code text-[10px] text-orange-400 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                          {skill.level}
                        </span>
                      </div>

                      {/* Framework / Keyword Tags */}
                      <div className="flex flex-wrap gap-1">
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono-code text-[10px] text-gray-400 bg-white/5 px-1.5 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Telemetry */}
              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-gray-400">
                <span>SKILLS_COUNT: {group.skills.length}</span>
                <span className="text-orange-400/80">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
