"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 backdrop-blur-xl bg-black/60 border-b border-white/10"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="font-display text-2xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80">
            BISHAL<span className="text-orange-400">.</span>DE
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-base tracking-wide text-white/85 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="/Bishal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-base tracking-wide text-white/70 hover:text-white transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="font-display rounded-full border border-white/20 bg-white/5 px-6 py-2 text-lg tracking-wide text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white/10"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 w-11 h-11 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span className={`block h-[2px] w-full bg-foreground rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[2px] w-full bg-foreground rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`block h-[2px] w-full bg-foreground rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 backdrop-blur-2xl bg-background/95" />
            <nav className="relative h-full flex flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-4xl font-semibold text-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="/Bishal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-lg text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                View Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
