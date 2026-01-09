export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-300 bg-gradient-to-br from-slate-50 via-sky-100 to-purple-100 dark:bg-slate-950 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      {/* Orb 1 - Top Left */}
      <div
        className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] rounded-full animate-float bg-violet-300 dark:bg-violet-500 blur-[120px] dark:blur-[100px] opacity-25 dark:opacity-30"
        style={{ animationDelay: "0s" }}
      />

      {/* Orb 2 - Bottom Right */}
      <div
        className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] rounded-full animate-float bg-cyan-200 dark:bg-cyan-500 blur-[120px] dark:blur-[100px] opacity-25 dark:opacity-30"
        style={{ animationDelay: "-10s" }}
      />

      {/* Orb 3 - Center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full animate-float bg-gradient-to-br from-violet-200 to-cyan-200 dark:from-violet-500 dark:to-cyan-500 blur-[120px] dark:blur-[100px] opacity-20 dark:opacity-15"
        style={{ animationDelay: "-5s" }}
      />
    </div>
  );
}
