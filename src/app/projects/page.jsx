"use client";

import Link from "next/link";
import ProjectsSection from "../../components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="w-full pt-20">
      {/* Editorial Header */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-tech-grid relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono-code text-xs text-orange-400 tracking-wider uppercase mb-4 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>Engineering Showcase Dossier</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl">
            Selected Works, Interactive Dashboards <br className="hidden sm:inline" />
            &amp; <span className="text-gradient-orange">Deployed Systems</span>.
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mt-6 font-light leading-relaxed">
            Explore complete technical case studies featuring video demonstrations, transactional datasets, source code, and architectural breakdowns.
          </p>
        </div>
      </section>

      {/* Projects Showcase Centerpiece */}
      <ProjectsSection />

      {/* Bottom CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#090b10]/40 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Have a Problem That Needs Data or Code?
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
            I build custom machine learning solutions, analytics dashboards, and web/mobile software tailored to real operational requirements.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-orange-500/20"
            >
              <span>Discuss a Project</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}