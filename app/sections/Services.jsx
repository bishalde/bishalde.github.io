"use client";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Arrow from "../components/Arrow";
import { profile } from "../data";

const ease = [0.16, 1, 0.3, 1];

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I do"
      count={profile.services.length}
      subtitle="End-to-end engineering — from the first commit to production monitoring."
    >
      <ul className="border-t border-white/10">
        {profile.services.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease }}
            className="group relative border-b border-white/10"
          >
            {/* gradient sweep on hover */}
            <div className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

            <a
              href="#contact"
              className="relative grid gap-4 px-2 py-8 sm:grid-cols-[4rem_1fr_1fr_auto] sm:items-center sm:gap-8 sm:px-4 sm:py-10"
            >
              <span className="text-sm tabular-nums text-white/40 transition-colors group-hover:text-white/80">
                ({String(i + 1).padStart(2, "0")})
              </span>
              <h3 className="text-3xl font-medium tracking-[-0.04em] text-white transition-[font-style] sm:text-4xl lg:text-5xl group-hover:italic">
                {s.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/90 sm:text-base">
                {s.description}
              </p>
              <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-white/60 group-hover:bg-white group-hover:text-black sm:flex">
                <Arrow dir="up-right" className="h-4 w-4" />
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
