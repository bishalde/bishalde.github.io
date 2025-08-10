export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{eyebrow}</p>
        )}
        {title && (
          <h2 className="heading text-4xl sm:text-5xl font-semibold tracking-tight text-balance">{title}</h2>
        )}
        {subtitle && (
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">{subtitle}</p>
        )}
      </div>
      <div className="mt-12 sm:mt-16">{children}</div>
    </section>
  );
}
