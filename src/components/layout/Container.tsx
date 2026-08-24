import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  /** Max width variant */
  size?: "sm" | "md" | "lg" | "xl" | "max";
  /** Additional CSS classes */
  className?: string;
  /** HTML element to render */
  as?: "div" | "section" | "main" | "article";
}

const sizeMap = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1024px]",
  xl: "max-w-[1200px]",
  max: "max-w-[1400px]",
};

/**
 * Responsive container with consistent horizontal padding.
 */
export function Container({
  children,
  size = "max",
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 md:px-12",
        sizeMap[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
