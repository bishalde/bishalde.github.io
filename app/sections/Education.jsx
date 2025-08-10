import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { profile } from "../data";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="How I learned">
      <ul className="space-y-6">
        {profile.education.map((ed, i) => (
          <Reveal key={ed.school} delay={i * 0.06}>
            <li className="card group rounded-2xl p-6 hover:scale-[1.02] hover-tilt transition-all duration-300 border-gradient">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold tracking-tight text-lg group-hover:text-primary transition-colors">
                    {ed.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{ed.school}</p>
                  {ed.details && (
                    <p className="mt-3 chip inline-block">{ed.details}</p>
                  )}
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {ed.period}
                </span>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
