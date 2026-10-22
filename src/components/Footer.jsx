"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const [colomboTime, setColomboTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Colombo / Sri Lanka time (Asia/Colombo)
      const options = {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setColomboTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-12 px-6 md:px-12 lg:px-20 text-gray-400">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Tier */}
        <div className="grid md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/40 flex items-center justify-center font-bold text-orange-500 font-mono-code">
                TD
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">
                  Theekshana Dilsara
                </span>
                <div className="font-mono-code text-[11px] text-gray-400 uppercase tracking-wider">
                  Data Science &bull; Software Engineering
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm font-light">
              Designing scalable algorithms, predictive models, interactive business dashboards, and full-stack software architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono-code text-xs text-white uppercase tracking-wider mb-3">
              Sitemap Navigation
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-orange-400 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  About &amp; Philosophy
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-orange-400 transition-colors">
                  Technical Matrix
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-orange-400 transition-colors">
                  Education &amp; Chronology
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Contact Transmission
                </a>
              </li>
            </ul>
          </div>

          {/* Time & Telemetry */}
          <div className="md:col-span-4 space-y-4">
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono-code text-[10px] text-gray-400 uppercase tracking-widest">
                  LOCATION &amp; LOCAL TIME
                </span>
                <span className="flex items-center gap-1.5 font-mono-code text-[10px] text-orange-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                  LIVE
                </span>
              </div>
              <div className="font-mono-code text-base font-bold text-white">
                {colomboTime || "Colombo, Sri Lanka"}
              </div>
              <div className="font-mono-code text-[11px] text-gray-400">
                Colombo, LK &bull; UTC+5:30 (SLST)
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full text-xs font-mono-code text-gray-400 hover:text-white p-2.5 rounded-lg border border-white/10 hover:border-orange-500/40 transition-colors flex items-center justify-center gap-2"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} Theekshana Dilsara Sugathnath. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-700">&bull;</span>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-gray-700">&bull;</span>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="hover:text-orange-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
