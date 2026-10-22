"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "", showLabel = false }) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Before mounting, render a placeholder of identical dimensions to prevent layout shifts
  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl border border-white/10 bg-neutral-900/60 flex items-center justify-center opacity-70 ${className}`}
        aria-hidden="true"
      >
        <span className="w-4 h-4 rounded-full bg-orange-500/20 animate-pulse"></span>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      className={`group relative flex items-center gap-2 p-2 sm:px-2.5 sm:py-2 rounded-xl transition-all duration-300 cursor-pointer ${
        isDark
          ? "bg-neutral-900/70 border border-white/15 text-amber-400 hover:text-amber-300 hover:border-amber-400/50 hover:bg-neutral-800 shadow-md shadow-black/20"
          : "bg-white border border-slate-200 text-slate-700 hover:text-orange-600 hover:border-orange-500/40 hover:bg-orange-50/50 shadow-sm shadow-slate-200/60"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {/* Sun Icon (shown in Dark mode to prompt switching to Light) */}
        <svg
          className={`w-4 h-4 absolute transition-all duration-500 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-amber-400"
              : "-rotate-90 scale-0 opacity-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>

        {/* Moon Icon (shown in Light mode to prompt switching to Dark) */}
        <svg
          className={`w-4 h-4 absolute transition-all duration-500 transform ${
            !isDark
              ? "rotate-0 scale-100 opacity-100 text-slate-800 group-hover:text-orange-600"
              : "rotate-90 scale-0 opacity-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>

      {showLabel && (
        <span className="font-mono-code text-xs font-medium">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
