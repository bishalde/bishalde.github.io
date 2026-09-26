"use client";
import { motion } from "framer-motion";
import Section from "../components/Section";
import CompanyLogo from "../components/CompanyLogo";
import { profile } from "../data";

const ease = [0.16, 1, 0.3, 1];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      count={profile.experience.length}
      subtitle="From client websites to observability at global scale."
    >
      <ol className="border-t border-white/10">
        {profile.experience.map((job, i) => {
          const isCurrent = i === 0;
          return (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
              className="group grid gap-6 border-b border-white/10 py-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16 lg:py-14"
            >
              {/* Left: company + meta */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <CompanyLogo
                  company={job.company}
                  size={64}
                  className="mb-6 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                />
                <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/45">
                  {job.period}
                  {isCurrent && (
                    <span className="flex items-center gap-1.5 normal-case tracking-normal text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Now
                    </span>
                  )}
                </p>
                <h3
                  className={`mt-3 text-5xl font-medium tracking-[-0.05em] transition-colors sm:text-6xl ${
                    isCurrent ? "text-white" : "text-white/80 group-hover:text-white"
                  }`}
                >
                  {job.company}
                  {isCurrent && <span className="text-orange-400">.</span>}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{job.location}</p>
              </div>

              {/* Right: role + bullets */}
              <div>
                <p className="text-xl font-medium italic tracking-[-0.02em] text-white sm:text-2xl">{job.role}</p>
                <ul className="mt-6 space-y-4">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="grid grid-cols-[2rem_1fr] text-[15px] leading-relaxed text-white/65">
                      <span className="pt-0.5 text-xs tabular-nums text-orange-400/80">{String(j + 1).padStart(2, "0")}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
