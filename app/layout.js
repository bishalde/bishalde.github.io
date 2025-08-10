import { Geist, Geist_Mono, Inter, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: {
    default: "Bishal De | Full-Stack Developer, AI Engineer & DevOps Specialist",
    template: "%s | Bishal De - Software Engineer"
  },
  description: "Bishal De - Expert Full-Stack Developer, AI/ML Engineer & DevOps Specialist. 3+ years building scalable web applications, machine learning solutions, and cloud infrastructure. Currently SDE at Twilio. Available for freelance projects.",
  keywords: [
    // Primary Keywords
    "Bishal De", "Full Stack Developer", "Software Engineer", "AI Engineer", "Machine Learning Engineer", "DevOps Engineer",
    // Technical Skills
    "React Developer", "Next.js Developer", "Python Developer", "JavaScript Developer", "Go Developer",
    "MERN Stack Developer", "Django Developer", "Flask Developer", "FastAPI Developer",
    // AI/ML Keywords
    "Machine Learning Specialist", "Deep Learning Engineer", "GenAI Developer", "LLM Engineer", "RAG Developer",
    "Artificial Intelligence Engineer", "Data Science", "Computer Vision", "NLP Engineer",
    // DevOps & Cloud
    "AWS Cloud Engineer", "Docker Kubernetes", "Terraform", "CI/CD", "Cloud Architecture",
    "Microservices", "System Design", "DevOps Automation", "Infrastructure Engineer",
    // Location & Availability
    "Freelance Developer", "Remote Developer", "Bengaluru Developer", "India Developer",
    "Software Consultant", "Technical Lead", "Startup CTO", "MVP Development",
    // Industry Terms
    "Web Development", "Mobile App Development", "API Development", "Database Design",
    "Frontend Development", "Backend Development", "Full Stack Development"
  ],
  authors: [{ name: "Bishal De", url: "https://bishalde.vercel.app" }],
  creator: "Bishal De",
  publisher: "Bishal De",
  metadataBase: new URL("https://bishalde.vercel.app"),
  alternates: {
    canonical: "https://bishalde.vercel.app",
    languages: {
      "en-US": "https://bishalde.vercel.app",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bishalde.vercel.app",
    siteName: "Bishal De - Software Engineer Portfolio",
    title: "Bishal De | Full-Stack Developer, AI Engineer & DevOps Specialist",
    description: "Expert Full-Stack Developer with 3+ years experience in AI/ML, web development, and cloud infrastructure. Currently Software Engineer at Twilio. Available for freelance projects and consulting.",
    images: [
      {
        url: "/bishal-de-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bishal De - Full-Stack Developer & AI Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@itsbishalde",
    creator: "@itsbishalde",
    title: "Bishal De | Full-Stack Developer, AI Engineer & DevOps Specialist",
    description: "Expert Software Engineer specializing in AI/ML, full-stack development, and DevOps. 3+ years experience. Currently at Twilio.",
    images: ["/bishal-de-og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here", // Add your Google Search Console verification code
    yandex: "yandex-verification-code-here", // Add if needed
    yahoo: "yahoo-verification-code-here", // Add if needed
  },
  category: "technology",
  classification: "Software Development Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#FFD700" },
    ],
  },
  other: {
    "msapplication-TileColor": "#FFD700",
    "theme-color": "#FFD700",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bishal De",
    "jobTitle": "Software Development Engineer",
    "description": "Full-Stack Developer, AI Engineer, and DevOps Specialist with 3+ years of experience building scalable applications and machine learning solutions.",
    "url": "https://bishalde.vercel.app",
    "image": "https://bishalde.vercel.app/bishal.jpg",
    "email": "itsbishalde@gmail.com",
    "telephone": "+91-8299260163",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Twilio",
      "url": "https://twilio.com"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "SRM Institute of Science & Technology",
      "url": "https://www.srmist.edu.in"
    },
    "knowsAbout": [
      "Full Stack Development",
      "Machine Learning",
      "Artificial Intelligence",
      "DevOps",
      "Cloud Computing",
      "React",
      "Next.js",
      "Python",
      "JavaScript",
      "Go",
      "AWS",
      "Docker",
      "Kubernetes"
    ],
    "sameAs": [
      "https://github.com/bishalde",
      "https://www.linkedin.com/in/bishalde/",
      "https://instagram.com/itsbishalde",
      "https://bishalde.github.io"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "B.Tech in Computer Science & Engineering with specialization in AI & ML",
        "credentialCategory": "degree",
        "educationalLevel": "Undergraduate",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "SRM Institute of Science & Technology"
        }
      }
    ],
    "award": [
      "M2P Hackathon 1st Place Winner",
      "Bajaj Finserv Appathon 1st Place Winner",
      "Synapse Hackathon 2nd Place Winner",
      "SRMJEE Merit Scholarship Recipient"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Bishal De - Software Development Services",
    "description": "Professional software development, AI/ML solutions, and DevOps services by Bishal De",
    "url": "https://bishalde.vercel.app",
    "logo": "https://bishalde.vercel.app/bishal.jpg",
    "image": "https://bishalde.vercel.app/bishal.jpg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8299260163",
      "contactType": "customer service",
      "email": "itsbishalde@gmail.com",
      "availableLanguage": ["English", "Hindi", "Bengali"]
    },
    "serviceType": [
      "Full Stack Web Development",
      "Machine Learning Solutions",
      "AI Application Development",
      "DevOps and Cloud Infrastructure",
      "Mobile App Development",
      "API Development",
      "Database Design",
      "System Architecture"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    }
  };

  return (
    <html lang="en" itemScope itemType="https://schema.org/Person">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" title="Bishal De - Latest Updates" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
        itemScope 
        itemType="https://schema.org/WebPage"
      >
        <Navbar />
        <main role="main" itemProp="mainContentOfPage">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
