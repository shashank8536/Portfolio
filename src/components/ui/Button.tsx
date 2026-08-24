import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "cta" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render as an anchor tag */
  href?: string;
  /** Open link in new tab */
  external?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-accent-primary text-bg-primary font-semibold",
    "hover:bg-accent-primary-hover hover:shadow-[var(--glow-primary)]",
    "active:scale-[0.98]"
  ),
  secondary: cn(
    "bg-transparent text-text-primary font-semibold",
    "border border-border-default",
    "hover:border-border-hover hover:bg-bg-hover",
    "active:scale-[0.98]"
  ),
  cta: cn(
    "bg-accent-cta text-bg-primary font-semibold rounded-full!",
    "hover:bg-accent-cta-hover hover:shadow-[var(--glow-cta)]",
    "active:scale-[0.98]"
  ),
  ghost: cn(
    "bg-transparent text-text-secondary font-medium",
    "hover:text-text-primary hover:bg-bg-hover"
  ),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

/**
 * Button component with four visual variants matching the design system.
 * Can render as a button or an anchor tag.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-lg transition-all duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
    "disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
