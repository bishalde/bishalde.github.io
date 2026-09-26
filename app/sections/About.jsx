"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import Section from "../components/Section";
import { profile } from "../data";

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 50, suffix: "+", label: "Projects shipped" },
  { value: 5, suffix: "", label: "Hackathon wins" },
  { value: 5, suffix: "★", label: "Fiverr rating" },
];

function Counter({ value, suffix, label, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 30, stiffness: 90 });
  const display = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) mv.set(value);
  }, [isInView, mv, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
      className="border-t border-white/10 pt-5"
    >
      <div className="flex items-start">
        <motion.span className="text-6xl font-medium tracking-[-0.05em] text-white tabular-nums sm:text-7xl">
          {display}
        </motion.span>
        <span className="ml-1 mt-1 text-2xl font-medium text-orange-400">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="about" eyebrow="About Me" title="Engineer, builder, tinkerer">
      <div ref={ref} className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="text-2xl font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-3xl lg:text-[2.35rem]"
          >
            I&apos;m a Software Development Engineer at <span className="italic text-orange-400">Twilio</span>, building
            observability systems for distributed architectures that power global communications.{" "}
            <span className="text-white/40">
              Three years in, I work across the whole stack — React and Next.js frontends, Python and Go services,
              ML &amp; LLM systems, and the AWS, Docker and Kubernetes infrastructure underneath.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="mt-8 max-w-xl leading-relaxed text-muted-foreground"
          >
            I care about real-world problems: intelligent systems that are genuinely useful, web apps that feel
            fast, and cloud infrastructure that stays quiet at 3 a.m.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 divide-y divide-white/10 border-y border-white/10"
          >
            {profile.roles.map((role, i) => (
              <li key={role} className="group flex items-center justify-between py-3.5">
                <span className="text-lg text-white/85 transition-colors group-hover:text-white">{role}</span>
                <span className="text-xs tabular-nums text-white/30">{String(i + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="grid grid-cols-2 content-start gap-x-8 gap-y-12">
          {stats.map((s, i) => (
            <Counter key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
