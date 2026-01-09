interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`
        bg-[var(--card-bg)] backdrop-blur-xl
        border border-[var(--border)] rounded-2xl
        transition-all duration-300
        data-[theme=light]:shadow-lg data-[theme=light]:shadow-black/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}
