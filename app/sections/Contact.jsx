"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiSend } from "react-icons/fi";
import Arrow from "../components/Arrow";
import Section from "../components/Section";

const contactInfo = [
  { title: "Location", value: "Bengaluru, India" },
  { title: "Response", value: "Within 24 hours" },
];

export default function Contact() {
  const [status, setStatus] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Failed");
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      setStatus(err.message || "error");
      setTimeout(() => setStatus(null), 5000);
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      subtitle="Tell me about your project — I usually reply within a day."
    >
      <div ref={ref} className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-12"
        >
          <p className="text-3xl font-medium leading-[1.15] tracking-[-0.03em] text-white sm:text-4xl">
            Got a product to ship, a system to scale, or an AI idea to prototype?{" "}
            <span className="italic text-orange-400">Let&apos;s make it real.</span>
          </p>

          <dl className="divide-y divide-white/10 border-y border-white/10">
            {contactInfo.map(({ title, value }) => (
              <div key={title} className="flex items-center justify-between py-4">
                <dt className="text-xs uppercase tracking-wider text-white/45">{title}</dt>
                <dd className="text-sm text-white">{value}</dd>
              </div>
            ))}
            <div className="flex items-center justify-between py-4">
              <dt className="text-xs uppercase tracking-wider text-white/45">Elsewhere</dt>
              <dd className="flex gap-5 text-sm">
                {[
                  { href: "https://www.linkedin.com/in/bishalde/", label: "LinkedIn" },
                  { href: "https://github.com/bishalde", label: "GitHub" },
                  { href: "https://instagram.com/itsbishalde", label: "Instagram" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-white/80 transition-colors hover:text-white"
                  >
                    {s.label}
                    <Arrow dir="up-right" className="h-2.5 w-2.5 text-orange-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-10"
        >
          <div className="grid gap-10 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-white/45">(01) Name</span>
              <input name="name" required className="line-input" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-white/45">(02) Email</span>
              <input type="email" name="email" required className="line-input" placeholder="you@example.com" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-wider text-white/45">(03) Message</span>
            <textarea name="message" rows="4" required className="line-input resize-none" placeholder="Tell me about your project…" />
          </label>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-base font-medium text-black transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 transition-transform duration-500 group-hover:scale-x-100" />
              <span className="relative transition-colors group-hover:text-white">
                {status === "loading" ? "Sending…" : "Send message"}
              </span>
              <FiSend className="relative h-4 w-4 transition-colors group-hover:text-white" />
            </button>

            {status === "success" && <p className="text-sm text-green-400">Message sent — talk soon!</p>}
            {status && status !== "loading" && status !== "success" && (
              <p className="text-sm text-red-400">{String(status)}</p>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
