
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { profile } from "../data";

export default function Services() {
  return (
    <Section id="services" eyebrow="Services" title="How I can help">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profile.services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <li className="group glass-strong rounded-2xl p-6 h-full shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
              <div className="mb-3 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-xl">💻</span>
              </div>
              <h3 className="heading text-xl font-semibold tracking-tight mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
