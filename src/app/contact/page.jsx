"use client";

import ContactSection from "../../components/ContactSection";
import { personalInfo } from "../../data/portfolioData";

export default function ContactPage() {
  return (
    <div className="w-full pt-20">
      {/* Editorial Header */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-tech-grid relative border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono-code text-xs text-orange-600 dark:text-orange-400 tracking-wider uppercase mb-4 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>Communication Gateway</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] max-w-4xl">
            Let&apos;s Initiate A <span className="text-gradient-orange">Conversation</span>.
          </h1>

          <p className="text-slate-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mt-6 font-light leading-relaxed">
            Whether you are discussing engineering roles, machine learning research, or collaborative projects, dispatch a message below.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}