import { cn } from "@/lib/utils/cn";
import { SECTION_IDS } from "@/lib/utils/constants";

interface SectionProps {
  children: React.ReactNode;
  /** Section ID for scroll targeting */
  id?: (typeof SECTION_IDS)[keyof typeof SECTION_IDS] | string;
  /** Additional CSS classes */
  className?: string;
  /** Vertical padding variant */
  spacing?: "sm" | "md" | "lg" | "xl";
}

const spacingMap = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

/**
 * Section wrapper with consistent vertical spacing and optional scroll target ID.
 */
export function Section({
  children,
  id,
  className,
  spacing = "lg",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(spacingMap[spacing], className)}
    >
      {children}
    </section>
  );
}
