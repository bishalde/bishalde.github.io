"use client";
import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Section from "../components/Section";
import Arrow from "../components/Arrow";
import { profile } from "../data";

const ease = [0.16, 1, 0.3, 1];

const cardTints = [
  "from-amber-400 via-orange-500 to-red-600",
  "from-neutral-200 via-neutral-400 to-neutral-600",
  "from-orange-300 via-rose-500 to-fuchsia-700",
  "from-neutral-700 via-neutral-800 to-black",
  "from-yellow-300 via-amber-500 to-orange-700",
  "from-stone-300 via-stone-500 to-stone-800",
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 28 });
  const sy = useSpring(y, { stiffness: 250, damping: 28 });

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  const project = hovered != null ? profile.projects[hovered] : null;

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects"
      count={profile.projects.length}
      subtitle="A few things I've built — from AI systems to full-stack products."
    >
      <div className="relative" onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
        <ul className="border-t border-white/10">
          {profile.projects.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease }}
              onMouseEnter={() => setHovered(i)}
              className="group border-b border-white/10"
            >
              <a
                href={p.link}
                target={p.link ? "_blank" : undefined}
                rel={p.link ? "noopener noreferrer" : undefined}
                className={`grid gap-3 py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-8 sm:py-9 ${p.link ? "cursor-pointer" : "cursor-default"}`}
              >
                <span className="text-sm tabular-nums text-white/40">({String(i + 1).padStart(2, "0")})</span>
                <div className="min-w-0">
                  <h3
                    className={`text-3xl font-medium tracking-[-0.04em] transition-all duration-500 sm:text-4xl lg:text-[3.25rem] lg:leading-[1.05] ${
                      hovered == null || hovered === i ? "text-white" : "text-white/25"
                    } group-hover:translate-x-3 group-hover:italic`}
                  >
                    {p.title}
                    {p.link && (
                      <span className="ml-3 inline-block translate-y-[-0.35em] rounded-full border border-orange-400/40 px-2 py-0.5 align-middle text-[11px] font-normal not-italic tracking-normal text-orange-400">
                        Live
                      </span>
                    )}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground lg:hidden">{p.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/60 transition-colors group-hover:border-orange-400/50 group-hover:text-white"
                    >
                      {t}
                    </span>
                  ))}
                  <Arrow
                    dir="up-right"
                    className="ml-2 hidden h-5 w-5 text-orange-400 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:inline-block"
                  />
                </div>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Floating preview (desktop) */}
        <motion.div
          style={{ left: sx, top: sy }}
          className="pointer-events-none absolute z-20 hidden translate-x-10 -translate-y-1/2 lg:block"
        >
          <AnimatePresence mode="wait">
            {project && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -4 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 0 }}
                transition={{ duration: 0.35, ease }}
                className="w-72 overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/10"
              >
                <div className={`relative h-36 bg-gradient-to-br ${cardTints[hovered % cardTints.length]}`}>
                  <span className="absolute bottom-3 left-4 text-5xl font-bold italic tracking-[-0.06em] text-white/90 mix-blend-overlay">
                    {String(hovered + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="p-4 text-sm leading-relaxed text-white/80">{project.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
