import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export function SectionShell({ id, className = "", innerClassName = "", children }: SectionShellProps) {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 sm:px-6 scroll-mt-24 md:scroll-mt-28 ${className}`}>
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
  const isCenter = align === "center";
  return (
    <div className={`max-w-3xl ${isCenter ? "text-center mx-auto" : "text-left"} mb-14 md:mb-16 ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-800/90 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] md:leading-[1.12] font-bold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl ${isCenter ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
