"use client";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { profile } from "../data";

const ease = [0.16, 1, 0.3, 1];

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Awards"
      count={profile.achievements.length}
      subtitle="Hackathons where the idea, the build and the demo all came together."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {profile.achievements.map((a, i) => {
          const isFirst = a.rank === "1st";
          return (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="group relative flex min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#141414] p-7 transition-colors hover:border-white/20"
            >
              {isFirst && (
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/25 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
              )}

              <div className="relative flex items-start justify-between">
                <span
                  className={`-ml-1 py-1 pl-1 pr-4 text-8xl font-bold italic leading-none tracking-[-0.07em] ${
                    isFirst
                      ? "bg-gradient-to-br from-amber-300 via-orange-500 to-red-600 bg-clip-text text-transparent"
                      : "text-white/85"
                  }`}
                >
                  {a.rank}
                </span>
                <span className="text-xs uppercase tracking-wider text-white/40">{a.period}</span>
              </div>

              <div className="relative mt-auto pt-16">
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">{a.title}</h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-muted-foreground">{a.details}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
