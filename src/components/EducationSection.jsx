"use client";

import { educationData } from "../data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-20 relative bg-[#090b10]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-orange-400 tracking-wider uppercase mb-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span>04 // Academic Chronology</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Education, Training &amp; <br className="hidden sm:inline" />
              <span className="text-gradient-orange">Technical Certifications</span>.
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            A continuous progression from advanced mathematics and technical certifications to university-level Data Science.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {educationData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Chronological Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0c0e14] border-2 border-orange-500 group-hover:bg-orange-500 group-hover:scale-125 transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white mx-auto mt-0.5"></div>
              </div>

              {/* Card Container */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono-code text-[11px] px-2.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      {item.badge}
                    </span>
                    <span className="font-mono-code text-xs text-gray-400">
                      {item.period}
                    </span>
                  </div>

                  <span className="font-mono-code text-xs text-emerald-400">
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-semibold text-orange-400/90 mt-1">
                    {item.institution}
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Coursework Tags */}
                {item.courses && item.courses.length > 0 && (
                  <div className="pt-2">
                    <div className="text-[11px] font-mono-code text-gray-400 uppercase tracking-wider mb-2">
                      Key Subjects &amp; Practical Training
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.courses.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="font-mono-code text-xs px-2.5 py-1 rounded bg-black/40 border border-white/5 text-gray-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
