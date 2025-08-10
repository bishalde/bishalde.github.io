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
  title: "BISHAL DE | Full-Stack Developer & AI Engineer",
  description: "Award-winning developer specializing in AI/ML, full-stack development, and DevOps. Building the future with cutting-edge technology.",
  metadataBase: new URL("https://bishalde.dev"),
  openGraph: {
    title: "BISHAL DE | Full-Stack Developer & AI Engineer",
    description: "Award-winning developer specializing in AI/ML, full-stack development, and DevOps.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BISHAL DE | Full-Stack Developer & AI Engineer",
    description: "Award-winning developer specializing in AI/ML, full-stack development, and DevOps.",
  },
  keywords: ["Full Stack Developer", "AI Engineer", "Machine Learning", "DevOps", "React", "Next.js", "Python"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} ${dmSans.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
