export default function Section({ id, eyebrow, title, subtitle, count, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          )}
          {title && (
            <h2 className="heading flex items-start text-5xl text-balance sm:text-6xl lg:text-7xl">
              <span>{title}</span>
              {count != null && (
                <sup className="ml-2 mt-2 text-xl font-normal tracking-normal text-white/70 sm:text-2xl">({count})</sup>
              )}
            </h2>
          )}
        </div>
        {subtitle && (
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:pb-2 lg:text-right">{subtitle}</p>
        )}
      </div>
      <div className="mt-12 sm:mt-16">{children}</div>
    </section>
  );
}
