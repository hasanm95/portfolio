interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary: `
    bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]
    text-white
    border-none
    hover:shadow-[0_10px_40px_rgba(139,92,246,0.3)]
    hover:-translate-y-0.5
  `,
  secondary: `
    bg-transparent
    text-[var(--foreground)]
    border border-[var(--border)]
    hover:bg-[var(--card-bg)]
    hover:border-[var(--primary)]
  `,
};

const sizeStyles = {
  sm: "py-2 px-4 text-sm",
  md: "py-3.5 px-8",
  lg: "py-4 px-10 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-xl
    transition-all duration-300
    cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-95
  `;

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedStyles}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
