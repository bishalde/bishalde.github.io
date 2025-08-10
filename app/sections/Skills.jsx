import Section from "../components/Section";
import Badge from "../components/Badge";
import Reveal from "../components/Reveal";
import { profile } from "../data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(profile.skills).map(([cat, values], i) => (
          <Reveal key={cat} delay={i * 0.04}>
            <div className="card rounded-2xl p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <div className="w-3 h-3 rounded-sm bg-white"></div>
                </div>
                <h3 className="font-semibold tracking-tight group-hover:text-primary transition-colors">{cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {values.map((v) => (
                  <Badge key={v}>{v}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
