import Section from "../components/Section";
import Button from "../components/Button";
import Image from "next/image";
import Reveal from "../components/Reveal";
import { profile } from "../data";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="Here are a few projects that showcase my range—from design systems to data-heavy apps."
    >
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profile.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
              <li className="card group rounded-2xl p-6 hover:scale-105 hover-tilt transition-all duration-300 border-gradient">
              <div className="relative h-12 mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Image src="/next.svg" alt="" width={24} height={24} className="dark:invert" />
                </div>
              </div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-gradient">{p.title}</h3>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="mt-6">
                <Button href="#" className="w-full justify-center">View project</Button>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
