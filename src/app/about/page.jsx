"use client";

import Link from "next/link";
import AboutSection from "../../components/AboutSection";
import SkillsSection from "../../components/SkillsSection";
import EducationSection from "../../components/EducationSection";
import { personalInfo } from "../../data/portfolioData";

export default function AboutPage() {
  return (
    <div className="w-full pt-20">
      {/* Editorial Page Header */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-tech-grid relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono-code text-xs text-orange-400 tracking-wider uppercase mb-4 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>Profile &amp; Biography Dossier</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl">
            Empowering Decision-Making With <span className="text-gradient-orange">Data &amp; Engineering</span>.
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mt-6 font-light leading-relaxed">
            I am an undergraduate specializing in Data Science at SLIIT, bridging predictive analytics, machine learning, and scalable full-stack software development.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href={personalInfo.contact.resumeUrl}
              download="Theekshana Dilsara CV Resume.pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs md:text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-orange-500/25"
            >
              <span>Download Official CV (PDF)</span>
              <span>↓</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-neutral-900 border border-white/10 hover:border-orange-500/50 text-gray-200 hover:text-white font-medium text-xs md:text-sm px-6 py-3 rounded-xl transition-colors"
            >
              <span>Get In Touch</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <AboutSection />
      <SkillsSection />
      <EducationSection />

      {/* Bottom CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#090b10]/40 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Interested in Collaborating?
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
            Whether for internships, analytical consulting, full-stack projects, or data science discussions, I welcome the opportunity to connect.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-orange-500/20"
            >
              <span>Initiate Contact</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}