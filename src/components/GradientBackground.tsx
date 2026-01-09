"use client";

import { useTheme } from "./ThemeProvider";

export default function GradientBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden transition-colors duration-300 ${
        isLight ? "bg-gradient-to-br from-slate-50 via-sky-100 to-purple-100" : ""
      }`}
    >
      {/* Orb 1 - Top Left */}
      <div
        className={`absolute -top-[200px] -left-[200px] w-[600px] h-[600px] rounded-full animate-float ${
          isLight
            ? "bg-violet-300 blur-[120px] opacity-25"
            : "bg-[var(--primary)] blur-[100px] opacity-30"
        }`}
        style={{ animationDelay: "0s" }}
      />

      {/* Orb 2 - Bottom Right */}
      <div
        className={`absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] rounded-full animate-float ${
          isLight
            ? "bg-cyan-200 blur-[120px] opacity-25"
            : "bg-[var(--secondary)] blur-[100px] opacity-30"
        }`}
        style={{ animationDelay: "-10s" }}
      />

      {/* Orb 3 - Center */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full animate-float ${
          isLight
            ? "bg-gradient-to-br from-violet-200 to-cyan-200 blur-[120px] opacity-20"
            : "bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] blur-[100px] opacity-15"
        }`}
        style={{ animationDelay: "-5s" }}
      />
    </div>
  );
}
