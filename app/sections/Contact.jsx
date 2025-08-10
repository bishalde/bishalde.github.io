"use client";
import { useState } from "react";
import Section from "../components/Section";
import Button from "../components/Button";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus(err.message || "error");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something together"
      subtitle="Send a quick message and I’ll get back to you."
    >
    <form onSubmit={onSubmit} className="mx-auto max-w-xl grid gap-4 card rounded-2xl p-6 border-gradient">
        <div>
          <label className="block text-sm mb-1">Name</label>
      <input name="name" required className="input" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
      <input type="email" name="email" required className="input" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
      <textarea name="message" rows="4" required className="input textarea" />
        </div>
        <div className="flex items-center gap-3">
          <Button as="button" type="submit">Send</Button>
          {status === "loading" && <p className="text-sm text-muted-foreground">Sending…</p>}
          {status === "success" && <p className="text-sm text-green-500">Message sent!</p>}
          {status && status !== "loading" && status !== "success" && (
            <p className="text-sm text-red-500">{String(status)}</p>
          )}
        </div>
      </form>
    </Section>
  );
}
