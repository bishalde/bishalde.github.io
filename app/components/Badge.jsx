export default function Badge({ children, className = "" }) {
  return (
  <span className={`inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-200 hover:bg-primary/25 hover:border-primary/40 hover:shadow-premium ${className}`}>
      {children}
    </span>
  );
}
