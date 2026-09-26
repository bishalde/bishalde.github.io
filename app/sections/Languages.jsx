"use client";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { profile } from "../data";

const ease = [0.16, 1, 0.3, 1];

export default function Languages() {
  return (
    <Section id="languages" eyebrow="Languages" title="I speak" count={profile.languages.length}>
      <ul className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {profile.languages.map((l, i) => (
          <motion.li
            key={l.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
            className="group border-b border-white/10 py-8 sm:border-r sm:px-6 sm:first:pl-0 lg:border-b-0 lg:last:border-r-0"
          >
            <span className="text-xs tabular-nums text-white/35">({String(i + 1).padStart(2, "0")})</span>
            <p className="mt-6 text-4xl font-medium tracking-[-0.05em] text-white transition-all duration-300 group-hover:italic group-hover:text-orange-400 sm:text-5xl">
              {l.name}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{l.level}</p>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
