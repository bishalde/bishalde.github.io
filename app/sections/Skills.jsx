import Section from "../components/Section";
import Badge from "../components/Badge";
import Reveal from "../components/Reveal";
import { profile } from "../data";

const skillIcons = {
  "Languages": "💻",
  "Frontend": "🎨",
  "Backend": "⚙️",
  "Database": "🗄️",
  "Android Development": "📱",
  "DevOps & Observability": "☁️"
};

export default function Skills() {
  return (
    <Section 
      id="skills" 
      eyebrow="Technical Expertise" 
      title="Technologies I Work With"
      subtitle="A comprehensive toolkit for building modern, scalable applications from frontend to cloud infrastructure"
    >
      <div className="max-w-6xl mx-auto">
        {/* Skills Overview */}
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass mb-6">
              <span className="text-2xl">🚀</span>
              <span className="font-semibold text-foreground">Full-Stack Technology Stack</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expertise across the complete development lifecycle - from responsive frontend interfaces 
              to scalable backend systems, cloud infrastructure, and intelligent AI solutions.
            </p>
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {Object.entries(profile.skills).map(([category, technologies], index) => (
            <Reveal key={category} delay={index * 0.1}>
              <div className="group h-full">
                <div className="card rounded-2xl p-8 h-full min-h-[320px] border-gradient hover:scale-[1.02] transition-all duration-300 hover:shadow-premium text-center flex flex-col">
                  {/* Category Header */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                      <span className="text-3xl">{skillIcons[category] || "🔧"}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent mt-2"></div>
                  </div>

                  {/* Technologies - Flex grow to fill available space */}
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 justify-center min-h-[120px] items-start content-start">
                      {technologies.map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          className={`hover:scale-110 transition-transform duration-200 ${
                            techIndex % 3 === 0 ? 'hover:bg-primary/20' : 
                            techIndex % 3 === 1 ? 'hover:bg-blue-500/20' : 'hover:bg-green-500/20'
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Skill Level Indicator - Fixed at bottom */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full ${
                              i < (category === "Languages" || category === "Frontend" || category === "Backend" ? 5 : 4) 
                                ? 'bg-primary' 
                                : 'bg-primary/20'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground ml-2">
                        {category === "Languages" || category === "Frontend" || category === "Backend" ? "Expert" : "Advanced"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <Reveal delay={0.6}>
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">Core Competencies</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300">
                  <div className="text-3xl mb-3">🌐</div>
                  <h4 className="font-semibold text-foreground mb-2">Web Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Modern, responsive web applications with optimal performance and user experience
                  </p>
                </div>
                <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300">
                  <div className="text-3xl mb-3">🤖</div>
                  <h4 className="font-semibold text-foreground mb-2">AI & Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Intelligent solutions using LLMs, RAG systems, and custom ML models
                  </p>
                </div>
                <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300">
                  <div className="text-3xl mb-3">☁️</div>
                  <h4 className="font-semibold text-foreground mb-2">Cloud & DevOps</h4>
                  <p className="text-sm text-muted-foreground">
                    Scalable infrastructure, CI/CD pipelines, and monitoring solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Call to Action */}
        <Reveal delay={0.8}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
              <span className="text-lg">🚀</span>
              <span className="font-semibold text-foreground">Ready to bring your ideas to life?</span>
              <a 
                href="#contact" 
                className="ml-4 px-6 py-2 bg-primary text-black rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
