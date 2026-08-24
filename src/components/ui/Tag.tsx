import { cn } from "@/lib/utils/cn";

interface TagProps {
  children: React.ReactNode;
  /** Color variant */
  variant?: "primary" | "secondary" | "cta" | "success" | "neutral";
  /** Size */
  size?: "sm" | "md";
  className?: string;
}

const variantStyles = {
  primary: "bg-accent-primary-subtle text-accent-primary",
  secondary: "bg-accent-secondary-subtle text-accent-secondary",
  cta: "bg-accent-cta-subtle text-accent-cta",
  success: "bg-[rgba(16,185,129,0.10)] text-state-success",
  neutral: "bg-bg-hover text-text-secondary",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-2.5 py-1 text-xs",
};

/**
 * Small pill/tag for tech stack items, categories, and labels.
 */
export function Tag({
  children,
  variant = "primary",
  size = "md",
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-md font-mono",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
