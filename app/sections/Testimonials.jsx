"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import Section from "../components/Section";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager, Acme",
    quote: "They delivered high-quality work on time and elevated our product's UX significantly. Communication was seamless throughout.",
  },
  {
    name: "John Smith",
    role: "CTO, Globex",
    quote: "A dependable engineer with strong communication and ownership. Consistently went above expectations.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What People Say">
      <div ref={ref} className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative rounded-2xl p-6 bg-white/[0.02] border border-white/[0.06] hover:border-primary/10 transition-all duration-300"
          >
            <FiMessageCircle className="w-5 h-5 text-primary/30 mb-4" />
            <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-semibold text-primary">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
