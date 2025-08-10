"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://www.linkedin.com/in/bishalde/", label: "LinkedIn", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2C20.4 8 24 10.42 24 16.1V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z"/>
    </svg>
  )},
  { href: "https://github.com/bishalde", label: "GitHub", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.23-1.61-1.23-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.19.91.1-.71.38-1.19.7-1.47-2.44-.28-5-1.22-5-5.45 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.42.11-2.95 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 2.78-.37c.94 0 1.88.13 2.77.37 2.12-1.43 3.05-1.13 3.05-1.13.6 1.53.22 2.67.11 2.95.7.77 1.13 1.75 1.13 2.95 0 4.24-2.56 5.16-5 5.44.39.33.74.98.74 1.99 0 1.44-.01 2.6-.01 2.95 0 .29.19.64.76.53A11.02 11.02 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z"/>
    </svg>
  )},
  { href: "https://instagram.com/itsbishalde", label: "Instagram", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.25 2.35.42.59.23 1.01.5 1.45.94.44.44.7.86.94 1.45.17.45.36 1.15.42 2.35.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.9-.42 2.35a3.9 3.9 0 0 1-.94 1.45 3.9 3.9 0 0 1-1.45.94c-.45.17-1.15.36-2.35.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.25-2.35-.42a3.9 3.9 0 0 1-1.45-.94 3.9 3.9 0 0 1-.94-1.45c-.17-.45-.36-1.15-.42-2.35C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.9.42-2.35.23-.59.5-1.01.94-1.45.44-.44.86-.7 1.45-.94.45-.17 1.15-.36 2.35-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.77.07-.98.05-1.51.21-1.86.35-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.35-.3.88-.35 1.86-.07 1.25-.07 1.62-.07 4.77s0 3.52.07 4.77c.05.98.21 1.51.35 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.35.14.88.3 1.86.35 1.25.07 1.62.07 4.77.07s3.52 0 4.77-.07c.98-.05 1.51-.21 1.86-.35.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.35.3-.88.35-1.86.07-1.25.07-1.62.07-4.77s0-3.52-.07-4.77c-.05-.98-.21-1.51-.35-1.86a2.36 2.36 0 0 0-.75-1.15 2.36 2.36 0 0 0-1.15-.75c-.35-.14-.88-.3-1.86-.35-1.25-.07-1.62-.07-4.77-.07Zm0 3.2a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6Zm0 1.8a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.5-2.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z"/>
    </svg>
  )},
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong border-b border-primary/10" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 py-4 flex items-center justify-between">
        <Link href="#" className="heading text-xl font-semibold tracking-tight">
          <span className="text-foreground">BISHAL</span>
          <span className="text-primary">.DE</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-primary transition-colors duration-200 relative group py-2"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10">
                {s.icon}
              </a>
            ))}
          </div>
          <a
            href="/Bishal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black shadow-premium hover:bg-primary-dark hover:shadow-premium-lg transition-all duration-200 hover:scale-105 ml-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            View Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
