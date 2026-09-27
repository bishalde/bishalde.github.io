import { Geist, Geist_Mono, Inter, Inter_Tight, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

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

const interTight = Inter_Tight({
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

const SITE_URL = "https://bishalde.vercel.app";
const TITLE = "Bishal De | Software Engineer at Twilio – Full-Stack, AI & DevOps";
const DESCRIPTION =
  "Bishal De is a Software Development Engineer at Twilio in Bengaluru, India, building observability for distributed systems. Full-stack developer (React, Next.js, Python, Go), ML/Gen-AI engineer and DevOps specialist.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Bishal De",
  },
  description: DESCRIPTION,
  applicationName: "Bishal De",
  keywords: [
    "Bishal De",
    "Bishal",
    "bishalde",
    "Bishal De Twilio",
    "Bishal De portfolio",
    "Software Engineer Bengaluru",
    "Full Stack Developer",
    "AI Engineer",
    "DevOps Engineer",
    "Observability",
    "Next.js Developer",
    "Python Developer",
  ],
  authors: [{ name: "Bishal De", url: SITE_URL }],
  creator: "Bishal De",
  publisher: "Bishal De",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Bishal",
    lastName: "De",
    username: "bishalde",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Bishal De",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
  // Set these in Vercel → Settings → Environment Variables after adding the site
  // to Google Search Console / Bing Webmaster Tools (HTML-tag verification method).
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION && { google: process.env.GOOGLE_SITE_VERIFICATION }),
    ...(process.env.BING_SITE_VERIFICATION && {
      other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION },
    }),
  },
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport = {
  themeColor: "#0c0c0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Bishal De",
        givenName: "Bishal",
        familyName: "De",
        alternateName: ["bishalde", "itsbishalde"],
        url: SITE_URL,
        image: `${SITE_URL}/bishal.jpg`,
        email: "mailto:itsbishalde@yahoo.com",
        jobTitle: "Software Development Engineer",
        description: DESCRIPTION,
        worksFor: { "@type": "Organization", name: "Twilio", url: "https://www.twilio.com" },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "SRM Institute of Science and Technology",
          url: "https://www.srmist.edu.in",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        knowsAbout: [
          "Full-Stack Development",
          "Observability",
          "Distributed Systems",
          "Machine Learning",
          "Generative AI",
          "Retrieval-Augmented Generation",
          "DevOps",
          "React",
          "Next.js",
          "Python",
          "Go",
          "AWS",
          "Kubernetes",
        ],
        knowsLanguage: ["English", "Hindi", "Bengali", "Japanese"],
        award: [
          "M2P Hackathon – 1st place",
          "Bajaj Finserv Appathon – 1st place",
          "Synapse Hackathon – 2nd place",
          "SRMJEE Merit Scholarship",
        ],
        sameAs: [
          "https://github.com/bishalde",
          "https://www.linkedin.com/in/bishalde/",
          "https://instagram.com/itsbishalde",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Bishal De",
        alternateName: "Bishal De – Portfolio",
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: TITLE,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${interTight.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
      >
        <ScrollProgress />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
