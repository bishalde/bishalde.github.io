export default function Button({ children, className = "", as: As = "a", ...props }) {
  return (
    <As
      className={`btn-primary inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}
      {...props}
    >
      {children}
    </As>
  );
}
