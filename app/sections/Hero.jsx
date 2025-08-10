import Image from "next/image";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { profile } from "../data";

export default function Hero() {
  return (
    <Section id="home">
      <div className="grid gap-12 sm:gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge>🚀 Available for work</Badge>
              <span className="text-sm text-muted-foreground font-medium">{profile.location}</span>
            </div>
            <h1 className="heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Hi, I'm <span className="text-primary">{profile.name.split(' ')[0]}</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-muted-foreground">
                I build delightful web experiences
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects" className="text-base px-8 py-4">
                View Projects
              </Button>
              <Button 
                href="#contact" 
                className="bg-foreground text-background hover:bg-foreground/90 border border-border hover:border-foreground/20"
              >
                Contact Me
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                📧 <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">{profile.email}</a>
              </span>
              <span className="flex items-center gap-2">
                📱 {profile.phone}
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="relative">
            <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent blur-xl"></div>
            <div className="relative aspect-square rounded-[24px] overflow-hidden ring-1 ring-inset ring-white/10 shadow-premium-lg">
              <Image src="/bishal.jpg" alt="Bishal De" fill className="object-cover" priority />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
