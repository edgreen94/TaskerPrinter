import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export function SectionShell({ id, className = "", innerClassName = "", children }: SectionShellProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 scroll-mt-20 ${className}`}>
      <div className={`max-w-7xl mx-auto ${innerClassName}`}>{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment} mb-12 md:mb-16 ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-800 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
