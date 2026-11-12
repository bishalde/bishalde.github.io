"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Arrow from "../components/Arrow";
import { profile } from "../data";

const ease = [0.16, 1, 0.3, 1];

export default function OpenSource() {
  const prs = profile.openSource;
  const repos = [...new Set(prs.map((p) => p.repo))];

  return (
    <Section
      id="open-source"
      eyebrow="Open Source"
      title="Contributions"
      count={prs.length}
      subtitle="Merged fixes in the Grafana ecosystem, the observability tools I use every day."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-stretch">
        <ul className="grid gap-4 sm:grid-cols-3">
          {prs.map((p, i) => (
            <motion.li
              key={p.url}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#141414] p-6 transition-colors hover:border-white/20"
              >
                <span className="text-xs text-white/40">
                  {p.repo} <span className="text-orange-400">#{p.number}</span>
                </span>
                <h3 className="mt-3 text-lg font-medium leading-snug tracking-[-0.02em] text-white">{p.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs text-[#ab7df8]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ab7df8]" /> Merged
                  <Arrow dir="up-right" className="ml-auto h-4 w-4 text-orange-400 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </a>
            </motion.li>
          ))}
        </ul>

        <Link
          href="/open-source"
          className="group flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 p-6 text-black transition-transform hover:scale-[1.02] lg:w-64"
        >
          <span className="text-xs font-semibold uppercase tracking-widest">{repos.length} repositories</span>
          <span className="text-2xl font-semibold leading-tight tracking-[-0.03em]">
            See what each fix does
            <Arrow dir="up-right" className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      </div>
    </Section>
  );
}
