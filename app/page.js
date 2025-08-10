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

export const metadata = {
  title: "Bishal De | Full-Stack Developer, AI Engineer & DevOps Specialist in Bengaluru",
  description: "Hire Bishal De - Expert Full-Stack Developer with 3+ years experience in React, Next.js, Python, AI/ML, and DevOps. Currently Software Engineer at Twilio. Available for freelance projects and consulting in Bengaluru, India.",
  keywords: [
    "hire full stack developer", "freelance developer bengaluru", "react developer for hire",
    "next.js developer", "python developer india", "AI engineer freelance", "machine learning consultant",
    "DevOps engineer hire", "software engineer twilio", "full stack developer portfolio",
    "web development services", "mobile app developer", "API development expert",
    "freelance software developer", "remote developer hire", "startup CTO consultant"
  ].join(", "),
  openGraph: {
    title: "Hire Bishal De - Expert Full-Stack Developer & AI Engineer",
    description: "Professional Full-Stack Developer with 3+ years experience. Specializing in React, Python, AI/ML, and DevOps. Available for freelance projects.",
    url: "https://bishalde.vercel.app",
    type: "website",
    images: [
      {
        url: "/bishal-de-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bishal De - Full-Stack Developer Portfolio",
      },
    ],
  },
};

export default function Home() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bishalde.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://bishalde.vercel.app#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": "https://bishalde.vercel.app#projects"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://bishalde.vercel.app#contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <main 
        className="mx-auto max-w-7xl px-6 sm:px-8"
        itemScope 
        itemType="https://schema.org/ProfilePage"
      >
        <article itemScope itemType="https://schema.org/Person">
          <header>
            <Hero />
          </header>
          
          <section aria-label="About Bishal De">
            <About />
          </section>
          
          <section aria-label="Professional Services">
            <Services />
          </section>
          
          <section aria-label="Technical Skills">
            <Skills />
          </section>
          
          <section aria-label="Featured Projects">
            <Projects />
          </section>
          
          <section aria-label="Work Experience">
            <Experience />
          </section>
          
          <section aria-label="Education Background">
            <Education />
          </section>
          
          <section aria-label="Achievements and Awards">
            <Achievements />
          </section>
          
          <section aria-label="Languages">
            <Languages />
          </section>
          
          <section aria-label="Call to Action">
            <CTA />
          </section>
          
          <section aria-label="Contact Information">
            <Contact />
          </section>
        </article>
      </main>
    </>
  );
}
