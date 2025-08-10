import Section from "../components/Section";
import Reveal from "../components/Reveal";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager, Acme",
    quote:
      "They delivered high-quality work on time and elevated our product's UX.",
  },
  {
    name: "John Smith",
    role: "CTO, Globex",
    quote: "A dependable engineer with strong communication and ownership.",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="People say nice things">
      <ul className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <li className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm">“{t.quote}”</p>
              <p className="mt-3 text-xs text-muted-foreground">{t.name} · {t.role}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
