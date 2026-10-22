"use client";

import { useState } from "react";
import Image from "next/image";
import { personalInfo } from "../data/portfolioData";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden bg-tech-grid"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient pointer-events-none opacity-60"></div>
      <div className="absolute top-12 right-12 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typographic Narrative */}
        <div className="lg:col-span-7 flex flex-col space-y-7 text-left">
          {/* Status & Telemetry Pill */}
          <div className="inline-flex items-center gap-3 w-fit px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span className="font-mono-code text-xs text-gray-300 tracking-wide">
              {personalInfo.status}
            </span>
            <span className="text-gray-600">|</span>
            <span className="font-mono-code text-[11px] text-orange-400">SLIIT &bull; Sri Lanka</span>
          </div>

          {/* Identity & Main Headline */}
          <div className="space-y-3">
            <div className="font-mono-code text-xs md:text-sm text-gray-400 tracking-widest uppercase flex items-center gap-2">
              <span className="text-orange-500 font-bold">&gt;&gt;</span>
              <span>Theekshana Dilsara Sugathnath</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Transforming <span className="text-gradient-orange">Complex Data</span> Into High-Impact Systems.
            </h1>

            <p className="font-mono-code text-xs sm:text-sm text-orange-400/90 pt-1 font-medium tracking-wide">
              Data Science Undergraduate &bull; AI / Machine Learning &bull; Full-Stack &amp; Mobile Software
            </p>
          </div>

          {/* Narrative Bio */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            Specializing in predictive modeling, exploratory analytics, and scalable full-stack software. From extracting intelligence across thousands of transactional data points to deploying production web and mobile architectures, I build solutions with analytical rigor and engineering elegance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              <span>Explore Featured Works</span>
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-neutral-900/80 hover:bg-neutral-800 text-gray-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-200"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </a>

            <a
              href={personalInfo.contact.resumeUrl}
              download="Theekshana Dilsara CV Resume.pdf"
              className="inline-flex items-center gap-2 text-xs font-mono-code text-gray-400 hover:text-orange-400 px-4 py-3 rounded-xl border border-dashed border-white/15 hover:border-orange-500/40 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV (PDF)</span>
            </a>
          </div>

          {/* Quick Technical Telemetry strip */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="font-mono-code text-xl md:text-2xl font-bold text-white">6+</div>
              <div className="text-[11px] text-gray-400 font-mono-code uppercase tracking-wider">Shipped Projects</div>
            </div>
            <div>
              <div className="font-mono-code text-xl md:text-2xl font-bold text-orange-400">3,900+</div>
              <div className="text-[11px] text-gray-400 font-mono-code uppercase tracking-wider">Rows Analyzed</div>
            </div>
            <div>
              <div className="font-mono-code text-xl md:text-2xl font-bold text-white">15+</div>
              <div className="text-[11px] text-gray-400 font-mono-code uppercase tracking-wider">Tech Tools</div>
            </div>
            <div>
              <div className="font-mono-code text-xl md:text-2xl font-bold text-orange-400">SLIIT</div>
              <div className="text-[11px] text-gray-400 font-mono-code uppercase tracking-wider">BSc (Hons) DS</div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Tech Data Portrait Composition */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-md">
            {/* Ambient Background Glow Behind Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 via-orange-500/10 to-transparent rounded-3xl blur-2xl transform -rotate-3 scale-95"></div>

            {/* Chassis Card */}
            <div className="relative rounded-2xl bg-[#0c0e14] border border-white/15 p-5 shadow-2xl backdrop-blur-xl">
              {/* Top Technical Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block"></span>
                  <span className="font-mono-code text-xs font-semibold text-gray-300 tracking-wider">
                    OPERATOR_PROFILE
                  </span>
                </div>
                <span className="font-mono-code text-[11px] text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                  SYS.ONLINE
                </span>
              </div>

              {/* Portrait Image Frame */}
              <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-950 border border-white/10 group">
                {imageLoaded ? (
                  <Image
                    src="/profile.JPG"
                    alt="Theekshana Dilsara Sugathnath"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center filter grayscale-20 contrast-105 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700 ease-out"
                    onError={() => setImageLoaded(false)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 text-orange-500 font-mono-code">
                    <span className="text-6xl font-bold">TD</span>
                    <span className="text-xs text-gray-400 mt-2">Theekshana Dilsara</span>
                  </div>
                )}

                {/* Overlaid Gradient & Corner Calipers */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-orange-500/70"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-orange-500/70"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-orange-500/70"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-orange-500/70"></div>

                {/* Bottom Overlay Telemetry */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">Theekshana Dilsara</div>
                    <div className="font-mono-code text-[10px] text-gray-400">Undergraduate &bull; SLIIT</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono-code text-[10px] text-orange-400">DATA SCIENCE</div>
                    <div className="font-mono-code text-[9px] text-gray-500">6.92° N, 79.86° E</div>
                  </div>
                </div>
              </div>

              {/* Data Radar & Capabilities Pills */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                {["Python", "Power BI", "SQL", "React", "Android", "Machine Learning"].map((badge, idx) => (
                  <span
                    key={idx}
                    className="font-mono-code text-[11px] px-2.5 py-1 rounded bg-neutral-900 border border-white/8 text-gray-300"
                  >
                    #{badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative Floating Tech Badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#0e1017] border border-orange-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500 flex items-center justify-center text-lg">
                ⚡
              </div>
              <div>
                <div className="font-mono-code text-[10px] text-gray-400 uppercase tracking-wider">Focus Areas</div>
                <div className="text-xs font-bold text-white">Machine Learning &bull; SWE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-70">
        <span className="font-mono-code text-[10px] text-gray-400 uppercase tracking-widest">
          Scroll To Explore
        </span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
