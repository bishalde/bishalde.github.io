// Editorial corner arrow (↘ by default). dir: "down-right" | "up-right" | "up-left"
const rotations = { "down-right": "", "up-right": "-rotate-90", "up-left": "rotate-180" };

export default function Arrow({ className = "", dir = "down-right" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`inline-block ${rotations[dir] || ""} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path d="M4 4l8 8M12 5v7H5" strokeLinecap="square" />
    </svg>
  );
}
