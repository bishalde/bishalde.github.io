import Arrow from "./Arrow";

const links = [
  { href: "https://github.com/bishalde", label: "GitHub" },
  { href: "https://www.linkedin.com/in/bishalde/", label: "LinkedIn" },
  { href: "https://instagram.com/itsbishalde", label: "Instagram" },
  { href: "/Bishal_Resume.pdf", label: "Resume" },
];

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Column({ title, children }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-widest text-white/40">{title}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-white/10 bg-[#0a0a0a]">
      {/* warm glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 opacity-[0.12] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* Closing statement */}
        <div className="flex flex-col gap-10 border-b border-white/10 py-20 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Let&apos;s build
            <br />
            <span className="font-bold italic">
              something great<span className="text-orange-400">.</span>
            </span>
          </h2>
          <a
            href="#contact"
            className="bubble group flex h-36 w-36 shrink-0 flex-col items-start justify-center self-start pl-8 text-2xl font-medium leading-[1.05] text-white transition-transform hover:scale-105 lg:self-auto"
          >
            Book a
            <span>
              Call <Arrow dir="up-left" className="h-4 w-4 text-orange-400 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
          <Column title="Availability">
            <p className="text-base font-medium italic text-white sm:text-lg">
              Open to{" "}
              <span className="whitespace-nowrap">
                freelance
                <span className="relative ml-2 inline-flex h-2 w-2 align-middle">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
              </span>
            </p>
            <p className="mt-2 text-sm text-white/50">Bengaluru, India · IST</p>
          </Column>

          <Column title="Menu">
            <ul className="space-y-1">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-block py-1.5 text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Column>

          <Column title="Elsewhere">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 py-1.5 text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                    <Arrow dir="up-right" className="h-2.5 w-2.5 text-orange-400 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </Column>

          <div className="flex items-start md:justify-end">
            <a
              href="#home"
              aria-label="Back to top"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-white hover:bg-white hover:text-black"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 13V3M3.5 7.5L8 3l4.5 4.5" strokeLinecap="square" />
              </svg>
            </a>
          </div>
        </div>

        {/* Giant wordmark, fitted to the container and fading out */}
        <p
          aria-hidden="true"
          className="footer-wordmark select-none whitespace-nowrap pb-4 text-center font-display text-[20.5vw] font-bold leading-[0.9] tracking-[-0.07em] xl:text-[16.5rem]"
        >
          Bishal <span className="italic">De</span>
          <span className="text-orange-500/60">.</span>
        </p>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Bishal De. All rights reserved.</span>
          <span>Designed &amp; built by Bishal</span>
        </div>
      </div>
    </footer>
  );
}
