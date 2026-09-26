"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { iconMap } from "../components/TechIcon";
import { profile } from "../data";

const ease = [0.16, 1, 0.3, 1];

// Brand colors that disappear on a near-black tile get a readable stand-in.
const displayColor = { Django: "#44B78B" };

const categories = Object.entries(profile.skills).map(([name, items]) => ({ name, items }));
const allTech = categories.flatMap(({ name, items }) => items.map((tech) => ({ tech, category: name })));

const filters = [{ name: "All", items: allTech }, ...categories.map((c) => ({ name: c.name, items: c.items }))];

function brand(tech) {
  const entry = iconMap[tech];
  return { Icon: entry?.icon, color: displayColor[tech] || entry?.color || "#fb923c" };
}

function MarqueeRow({ items, reverse = false }) {
  const loop = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
      <div className={`flex shrink-0 gap-3 pr-3 ${reverse ? "marquee-slow-reverse" : "marquee-slow"}`}>
        {loop.map(({ tech }, i) => {
          const { Icon, color } = brand(tech);
          return (
            <span
              key={i}
              className="group flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] py-2 pl-2.5 pr-4 text-sm text-white/70 transition-colors hover:border-white/25 hover:text-white"
            >
              {Icon && (
                <Icon
                  size={16}
                  className="text-[var(--c)] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ "--c": color }}
                />
              )}
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function TechTile({ tech, category }) {
  const { Icon, color } = brand(tech);
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, ease }}
      style={{ "--c": color }}
      className="tech-tile group relative flex aspect-[5/4] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.07] bg-[#141414] p-4 sm:p-5"
    >
      {/* brand glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--c)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

      <div className="relative flex items-start justify-between">
        {Icon ? (
          <Icon
            size={34}
            className="text-[var(--c)] opacity-75 grayscale-[35%] transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
          />
        ) : (
          <span className="h-8 w-8" />
        )}
        <span className="translate-x-1 text-sm text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true">
          ↗
        </span>
      </div>

      <div className="relative">
        <p className="text-[15px] font-medium leading-tight tracking-[-0.01em] text-white sm:text-base">{tech}</p>
        {category && <p className="mt-1 truncate text-[11px] uppercase tracking-wider text-white/35">{category}</p>}
      </div>
    </motion.li>
  );
}

export default function Skills() {
  const [active, setActive] = useState("All");
  const current = filters.find((f) => f.name === active);
  const tiles = active === "All" ? allTech : current.items.map((tech) => ({ tech, category: active }));

  const half = Math.ceil(allTech.length / 2);

  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      {/* Header */}
      <div className="grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Technical Expertise</p>
          <h2 className="heading flex items-start text-5xl sm:text-6xl lg:text-7xl">
            Technologies
            <sup className="ml-2 mt-2 text-xl font-normal tracking-normal text-white/70 sm:text-2xl">({allTech.length})</sup>
          </h2>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:pb-2 lg:text-right">
          The toolkit I reach for to design, ship and run production software — from the first
          component to the last dashboard.
        </p>
      </div>

      {/* Marquee */}
      <div className="mt-10 space-y-3">
        <MarqueeRow items={allTech.slice(0, half)} />
        <MarqueeRow items={allTech.slice(half)} reverse />
      </div>

      {/* Filters */}
      <div className="mt-12 -mx-5 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0">
        <div role="tablist" aria-label="Filter technologies" className="flex w-max gap-2">
          {filters.map((f) => {
            const isActive = f.name === active;
            return (
              <button
                key={f.name}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f.name)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-filter"
                    transition={{ duration: 0.45, ease }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-600"
                  />
                )}
                {!isActive && <span className="absolute inset-0 rounded-full border border-white/10" />}
                <span className="relative">{f.name}</span>
                <span className={`relative tabular-nums text-xs ${isActive ? "text-white/90" : "text-white/35"}`}>
                  {f.items.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <motion.ul layout className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <AnimatePresence mode="popLayout">
          {tiles.map(({ tech, category }) => (
            <TechTile key={tech + category} tech={tech} category={active === "All" ? category : null} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
