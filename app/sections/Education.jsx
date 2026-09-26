"use client";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { profile } from "../data";

const ease = [0.16, 1, 0.3, 1];

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <ul className="border-t border-white/10">
        {profile.education.map((ed, i) => (
          <motion.li
            key={ed.school}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
            className="grid gap-4 border-b border-white/10 py-10 lg:grid-cols-[12rem_1fr_auto] lg:items-end lg:gap-12"
          >
            <p className="text-xs uppercase tracking-wider text-white/45">{ed.period}</p>
            <div>
              <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                {ed.degree}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{ed.school}</p>
            </div>
            {ed.details && (
              <p className="text-4xl font-bold italic tracking-[-0.05em] text-orange-400 sm:text-5xl lg:text-right">
                {ed.details}
              </p>
            )}
          </motion.li>
        ))}
      </ul>

      {profile.scholarships && (
        <div className="mt-16">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/45">Scholarships &amp; recognition</p>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
            {profile.scholarships.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#111] p-6 transition-colors hover:bg-[#161616]"
              >
                <span className="text-xs tabular-nums text-orange-400">({String(i + 1).padStart(2, "0")})</span>
                <h4 className="mt-6 text-lg font-medium tracking-[-0.02em] text-white">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
