"use client";

import { personalInfo, professionalQualities } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 relative bg-[#07080a]/40 backdrop-blur-[2px] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-orange-400 tracking-wider uppercase mb-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span>01 // Background &amp; Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Driven By <span className="text-gradient-orange">Curiosity</span>, <br className="hidden sm:inline" />
              Engineered With Discipline.
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            Bridging the gap between mathematical models, data intelligence, and reliable user-facing software applications.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 md:p-10 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
              <span>Who I Am &amp; What I Build</span>
            </h3>

            <div className="space-y-4 text-gray-300 text-base leading-relaxed font-light">
              <p>
                I am <strong className="text-white font-semibold">Theekshana Dilsara Sugathnath</strong>, an IT undergraduate at the <strong className="text-orange-400 font-medium">Sri Lanka Institute of Information Technology (SLIIT)</strong> specializing in Data Science. My academic and project journeys focus on turning multi-dimensional datasets into high-fidelity models, actionable business intelligence dashboards, and production-ready applications.
              </p>
              <p>
                My engineering portfolio spans the full technological spectrum: from mining real consumer purchasing behavior across <span className="text-orange-400 font-mono-code font-medium">3,900+ retail records</span> in Power BI and Python, to building full-stack web platforms with integrated AI conversational agents, native Android mobile applications, and working with hardware-level automotive microcontroller EEPROM diagnostics.
              </p>
              <p>
                Whether fine-tuning data pipelines, designing clean REST APIs, or crafting intuitive mobile user interfaces, my objective is simple: create robust, transparent, and scalable digital solutions that solve real-world problems.
              </p>
            </div>

            {/* University & Degree Badge */}
            <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="font-mono-code text-[11px] text-orange-400 uppercase tracking-wider">Education Specialization</div>
                <div className="text-sm font-bold text-white">BSc (Hons) in Data Science &bull; SLIIT</div>
              </div>
              <span className="font-mono-code text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Currently Enrolled
              </span>
            </div>
          </div>

          {/* Quick Metrics & Highlights */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-xs text-gray-400">METRIC_0{idx + 1}</span>
                  <span className="font-mono-code text-xs text-orange-400">{stat.highlight}</span>
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Qualities Matrix */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Engineering Disciplines &amp; Strengths
            </h3>
            <span className="w-12 h-px bg-white/10"></span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {professionalQualities.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:bg-neutral-900/80 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 group-hover:scale-125 transition-transform"></span>
                  <h4 className="text-sm font-bold text-white group-hover:text-orange-300 transition-colors">
                    {item.name}
                  </h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
