import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Badge from "../components/Badge";
import { profile } from "../data";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Bishal De"
      title="Expert Full-Stack Developer & AI Engineer"
      subtitle="Crafting scalable web applications, intelligent AI solutions, and robust cloud infrastructure for businesses worldwide."
    >
      <Reveal>
        <div className="max-w-3xl mx-auto text-left space-y-6" itemScope itemType="https://schema.org/Person">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              As a <strong>Software Development Engineer at Twilio</strong>, I specialize in building observability systems and distributed architectures that power global communications. With over <strong>3 years of professional experience</strong>, I've delivered scalable solutions across the full technology stack.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans <strong>Full-Stack Web Development</strong> using React, Next.js, and Node.js, <strong>Machine Learning and AI</strong> with Python and TensorFlow, and <strong>DevOps & Cloud Infrastructure</strong> on AWS with Docker and Kubernetes. I've successfully led projects from conception to deployment, consistently delivering high-quality solutions that drive business growth.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              <span itemProp="description">I'm passionate about creating innovative solutions that solve real-world problems. Whether it's developing intelligent chatbots, building performant web applications, or architecting scalable cloud systems, I bring a unique blend of technical expertise and creative problem-solving to every project.</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">My Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {profile.roles.map((role) => (
                <Badge key={role} className="text-sm">
                  {role}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 p-6 rounded-xl glass">
            <div>
              <h4 className="font-semibold text-foreground mb-2">🏆 Track Record</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✅ 3+ years professional experience</li>
                <li>✅ Software Engineer at Twilio</li>
                <li>✅ Multiple hackathon winner</li>
                <li>✅ 9.76 CGPA in AI & ML</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">🎯 Available For</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✅ Full-stack web development</li>
                <li>✅ AI/ML solution development</li>
                <li>✅ DevOps & cloud consulting</li>
                <li>✅ Technical architecture design</li>
              </ul>
            </div>
          </div>
          
          {profile.fiverr && (
            <div className="flex items-center justify-center p-4 rounded-lg bg-primary/10 border border-primary/20">
              <span className="font-medium text-foreground">{profile.fiverr.label}</span>
              <span className="text-primary ml-2 text-lg">({profile.fiverr.rating}★)</span>
              <span className="ml-3 text-sm text-muted-foreground">- Trusted by clients worldwide</span>
            </div>
          )}
          
          {/* Hidden SEO content */}
          <div className="hidden" itemProp="knowsAbout">
            React developer, Next.js expert, Python programmer, JavaScript developer, Go programming, 
            Full stack development, Machine learning engineer, AI development, DevOps specialist, 
            AWS cloud architect, Docker containers, Kubernetes orchestration, API development, 
            Database design, System architecture, Microservices, CI/CD pipelines, Web development, 
            Mobile app development, Freelance developer, Remote work, Software consulting, 
            Technical leadership, Startup CTO, MVP development, Bengaluru developer, India developer
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
