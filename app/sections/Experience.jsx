import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { profile } from "../data";

export default function Experience() {
  return (
        <Section id="experience" eyebrow="Experience" title="Where I've worked">
            <ol className="space-y-6">
        {profile.experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <li className="card rounded-2xl p-6 hover:scale-[1.02] hover-tilt transition-all duration-300 border-gradient">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                  <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {job.bullets.map((b, i2) => (
                  <li key={i2} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
