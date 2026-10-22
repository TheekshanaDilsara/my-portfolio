"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy on homepage
      if (pathname === "/") {
        const sections = ["hero", "about", "skills", "projects", "education", "contact"];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { name: "Overview", href: "/#hero", sectionId: "hero", route: "/" },
    { name: "About", href: "/#about", sectionId: "about", route: "/about" },
    { name: "Skills", href: "/#skills", sectionId: "skills", route: "/about" },
    { name: "Projects", href: "/#projects", sectionId: "projects", route: "/projects" },
    { name: "Education", href: "/#education", sectionId: "education", route: "/about" },
    { name: "Contact", href: "/#contact", sectionId: "contact", route: "/contact" },
  ];

  const isLinkActive = (item) => {
    if (pathname === "/") {
      return activeSection === item.sectionId;
    }
    return pathname === item.route;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-[#07080a]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/30 dark:shadow-black/50 py-3.5"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 transition-transform hover:scale-102"
            onClick={() => setActiveSection("hero")}
          >
            <div className="relative w-10 h-10 rounded-lg bg-slate-100 dark:bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 border border-slate-200 dark:border-white/15 flex items-center justify-center font-bold shadow-sm dark:shadow-md group-hover:border-orange-500/60 transition-colors">
              <span className="text-orange-500 font-mono-code font-bold text-base">TD</span>
              <div className="absolute -inset-0.5 rounded-lg bg-orange-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-sm md:text-base text-slate-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-white transition-colors">
                Theekshana Dilsara
              </span>
              <span className="font-mono-code text-[10px] text-slate-500 dark:text-gray-400 tracking-wider uppercase">
                Data Science &bull; Software
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-neutral-900/60 border border-slate-200 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm dark:shadow-none">
            {navLinks.map((item) => {
              const active = isLinkActive(item);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    active
                      ? "text-orange-600 dark:text-white bg-orange-500/15 dark:bg-orange-500/20 border border-orange-500/30 dark:border-orange-500/40 shadow-sm"
                      : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-100 hover:bg-slate-100/70 dark:hover:bg-white/5"
                  }`}
                >
                  {active && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mr-1.5 animate-pulse" />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <a
              href="/Theekshana Dilsara CV Resume.pdf"
              download="Theekshana Dilsara CV Resume.pdf"
              className="text-xs font-mono-code text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white px-3.5 py-2 rounded-lg border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all bg-white/80 dark:bg-neutral-900/40 hover:bg-slate-100 dark:hover:bg-neutral-800/60 shadow-sm dark:shadow-none"
            >
              Resume ↓
            </a>
            <Link
              href="/#contact"
              className="relative group overflow-hidden bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Let&apos;s Talk</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          </div>

          {/* Mobile Right Bar: Theme Toggle + Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 text-slate-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white hover:border-orange-500/50 transition-colors shadow-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu Button for Tablet (hidden on mobile, hidden on lg) */}
          <div className="hidden sm:flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 text-slate-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white hover:border-orange-500/50 transition-colors shadow-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-[#07080a]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3">
          <span className="font-mono-code text-xs text-orange-500 dark:text-orange-400 tracking-wider uppercase mb-2">
            Navigation Menu
          </span>
          {navLinks.map((item, idx) => {
            const active = isLinkActive(item);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-bold py-2 border-b border-slate-200 dark:border-white/5 flex items-center justify-between transition-colors ${
                  active ? "text-orange-500" : "text-slate-800 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white"
                }`}
              >
                <span>{item.name}</span>
                <span className="font-mono-code text-xs text-slate-400 dark:text-gray-500">0{idx + 1}</span>
              </Link>
            );
          })}
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col gap-4">
          <ThemeToggle showLabel className="w-full justify-center py-2.5" />

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Based in Colombo, Sri Lanka &bull; Available</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="/Theekshana Dilsara CV Resume.pdf"
              download="Theekshana Dilsara CV Resume.pdf"
              className="w-full text-center py-3 rounded-lg border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-neutral-900 text-slate-800 dark:text-gray-200 text-sm font-medium hover:border-orange-500 transition-colors"
            >
              Download CV
            </a>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
