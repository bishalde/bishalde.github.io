import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { profile } from "../data";

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Awards & Highlights">
      <ul className="grid gap-8 sm:grid-cols-2">
        {profile.achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <li className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 shadow-premium">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">#{a.rank}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight group-hover:text-primary transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{a.period}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.details}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
