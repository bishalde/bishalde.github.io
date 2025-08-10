import Image from "next/image";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center scroll-mt-20 py-8 sm:py-10">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="max-w-2xl" itemScope itemType="https://schema.org/Person">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge>🚀 Available for Freelance Work</Badge>
                <span className="text-sm text-muted-foreground font-medium" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="addressLocality">{profile.location}</span>
                </span>
              </div>
              <h1 className="heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight" itemProp="name">
                Hi, I'm <span className="text-primary" itemProp="givenName">{profile.name.split(' ')[0]}</span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-muted-foreground leading-tight" itemProp="jobTitle">
                  Platform Engineer & AI/ML Specialist
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl" itemProp="description">
                Expert Full-Stack Developer with 3+ years of experience building scalable web applications, AI/ML solutions, and cloud infrastructure. Currently Software Development Engineer at Twilio.
              </p>
              
              {/* Key Skills for SEO */}
              <div className="mt-6 hidden" itemProp="knowsAbout">
                React, Next.js, Python, JavaScript, Go, Node.js, Django, Flask, FastAPI, AWS, Docker, Kubernetes, Machine Learning, Artificial Intelligence, DevOps, Full Stack Development, Web Development, Mobile App Development, API Development, Database Design, System Architecture, Cloud Computing, Microservices, CI/CD, Terraform, Monitoring, Observability
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="#projects" className="text-sm px-6 py-3" aria-label="View Bishal's portfolio projects">
                  View Projects
                </Button>
                <Button 
                  href="#contact" 
                  className="bg-foreground text-background hover:bg-foreground/90 border border-border hover:border-foreground/20 text-sm px-6 py-3"
                  aria-label="Contact Bishal for freelance work"
                >
                  Hire Me Now
                </Button>
              </div>
              
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  📧 <a 
                      href={`mailto:${profile.email}`} 
                      className="hover:text-foreground transition-colors"
                      itemProp="email"
                      aria-label="Email Bishal De for project inquiries"
                    >
                      {profile.email}
                    </a>
                </span>
                <span className="flex items-center gap-2" itemProp="telephone">
                  📱 <a href={`tel:${profile.phone}`} className="hover:text-foreground transition-colors">
                    {profile.phone}
                  </a>
                </span>
              </div>
              
              {/* Additional SEO-friendly content */}
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">🏆 Award-winning developer</span>
                <span className="flex items-center gap-1">⭐ 5-star Fiverr rating</span>
                <span className="flex items-center gap-1">🚀 Available for remote work</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-2 rounded-[24px] bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent blur-xl"></div>
              <div className="relative aspect-square rounded-[20px] overflow-hidden ring-1 ring-inset ring-white/10 shadow-premium-lg">
                <Image 
                  src="/bishal.jpg" 
                  alt="Bishal De - Full-Stack Developer and AI Engineer from Bengaluru, India" 
                  fill 
                  className="object-cover" 
                  priority
                  itemProp="image"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
