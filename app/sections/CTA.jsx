"use client";
import { motion } from "framer-motion";
import Arrow from "../components/Arrow";

const ease = [0.16, 1, 0.3, 1];

export default function CTA() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-[#141414] px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 opacity-30 blur-[100px]" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">Let&apos;s collaborate</p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
              className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl"
            >
              Have an idea?
              <br />
              <span className="font-bold italic">
                Let&apos;s build it<span className="text-orange-400">.</span>
              </span>
            </motion.h2>
            <p className="mt-8 max-w-md text-muted-foreground">
              Open to freelance, full-time and collaboration opportunities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="bubble flex h-20 w-20 items-center justify-center text-sm font-medium text-white/80 transition-transform hover:scale-105 hover:text-white"
            >
              Work
            </a>
            <a
              href="#contact"
              className="bubble flex h-36 w-36 flex-col items-start justify-center pl-8 text-2xl font-medium leading-[1.05] text-white transition-transform hover:scale-105"
            >
              Get in
              <span>
                touch <Arrow dir="up-left" className="h-4 w-4 text-orange-400" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
