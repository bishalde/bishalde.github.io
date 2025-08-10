import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Badge from "../components/Badge";
import { profile } from "../data";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A bit about me"
      subtitle="I love crafting clean, intuitive interfaces and performant systems."
    >
      <Reveal>
        <div className="max-w-3xl mx-auto text-left space-y-4">
          <p className="text-muted-foreground">{profile.summary}</p>
          <div className="flex flex-wrap gap-2">
            {profile.roles.map((r) => (
              <Badge key={r}>{r}</Badge>
            ))}
          </div>
          {profile.fiverr && (
            <div className="pt-2 text-sm">
              <span className="font-medium">{profile.fiverr.label}</span>
              <span className="text-primary"> ({profile.fiverr.rating}★)</span>
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
