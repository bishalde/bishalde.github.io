import Section from "../components/Section";
import Button from "../components/Button";

export default function CTA() {
  return (
    <Section id="cta" eyebrow="Get in touch" title="Have a project in mind?" subtitle="I’m open to freelance, full-time, and collaboration opportunities.">
      <div className="mx-auto max-w-2xl rounded-2xl bg-primary/10 p-6 ring-1 ring-inset ring-primary/20 text-center">
        <p className="text-sm text-muted-foreground">Let’s talk about how I can help deliver your next idea.</p>
        <div className="mt-4 flex justify-center gap-3">
          <Button href="#contact">Get in touch</Button>
          <Button href="#projects" className="bg-foreground text-background hover:bg-foreground/90">See work</Button>
        </div>
      </div>
    </Section>
  );
}
