export default function Button({ children, className = "", as: As = "a", ...props }) {
  return (
    <As
      className={`btn-primary inline-flex items-center rounded-lg px-6 py-3 text-sm font-medium text-white shadow-premium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${className}`}
      {...props}
    >
      {children}
    </As>
  );
}
