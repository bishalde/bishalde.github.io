import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { profile } from "../data";

export default function Languages() {
  return (
    <Section id="languages" eyebrow="Languages" title="I speak">
      <ul className="mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3">
        {profile.languages.map((l, i) => (
          <Reveal key={l.name} delay={i * 0.04}>
            <li className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 ring-1 ring-inset ring-white/10">
              <span className="font-medium">{l.name}</span>
              <span className="text-sm text-muted-foreground">{l.level}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
