import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Achievements from "./sections/Achievements";
import Languages from "./sections/Languages";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 sm:px-8">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
  <Experience />
  <Education />
  <Achievements />
      <Languages />
      <CTA />
      <Contact />
    </main>
  );
}
