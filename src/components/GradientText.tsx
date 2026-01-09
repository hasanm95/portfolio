interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export default function GradientText({
  children,
  className = "",
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component
      className={`
        bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]
        bg-clip-text text-transparent
        ${className}
      `}
    >
      {children}
    </Component>
  );
}
