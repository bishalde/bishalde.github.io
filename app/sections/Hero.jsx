"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { iconMap } from "../components/TechIcon";
import Arrow from "../components/Arrow";
import CompanyLogo from "../components/CompanyLogo";
import { profile } from "../data";

const ease = [0.16, 1, 0.3, 1];

const categories = Object.entries(profile.skills).map(([name, items]) => ({ name, items }));
const totalSkills = categories.reduce((sum, c) => sum + c.items.length, 0);

const companies = profile.experience.map((job) => job.company).slice(0, 3);

const bubbles = [
  { href: "https://github.com/bishalde", label: "GitHub", icon: FaGithub, pos: "left-[26%] top-0" },
  { href: "https://instagram.com/itsbishalde", label: "Instagram", icon: FaInstagram, pos: "right-0 top-2" },
  { href: "/Bishal_Resume.pdf", label: "Resume", icon: HiOutlineDocumentText, pos: "left-0 top-[36%]" },
  { href: "https://www.linkedin.com/in/bishalde/", label: "LinkedIn", icon: FaLinkedinIn, pos: "left-[3%] bottom-0" },
];

function StackRow({ category, active, onEnter }) {
  const loop = [...category.items, ...category.items, ...category.items];
  return (
    <li onMouseEnter={onEnter} onFocus={onEnter} tabIndex={0} className="relative border-b border-white/15 outline-none">
      <div className="relative flex h-12 items-center justify-between overflow-hidden sm:h-[3.25rem]">
        {active && (
          <motion.div
            layoutId="stack-highlight"
            transition={{ duration: 0.45, ease }}
            className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600"
          />
        )}

        {active ? (
          <div className="relative flex min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,#000_75%,transparent)]">
            <div className="marquee flex shrink-0 items-center gap-3 whitespace-nowrap pl-3 text-lg font-medium italic text-white sm:text-xl">
              {loop.map((item, i) => (
                <span key={i} className="flex items-center gap-3">
                  {item} <span aria-hidden="true">→</span>
                </span>
              ))}
            </div>
          </div>
        ) : (
          <span className="relative text-lg text-white/90 sm:text-xl">{category.name}</span>
        )}

        <span
          className={`relative shrink-0 tabular-nums ${
            active ? "pr-3 text-lg font-bold italic text-white" : "text-sm text-white/40"
          }`}
        >
          {category.items.length}
        </span>
      </div>
    </li>
  );
}

const cardLayout = [
  { rot: -6, x: "0%", y: "0%", bg: "bg-[#222]", light: false },
  { rot: 5, x: "33%", y: "18%", bg: "bg-[#f1ecec]", light: true },
  { rot: 9, x: "63%", y: "4%", bg: "bg-[#5e5e5e]", light: false },
];

function FloatingCards({ category }) {
  return (
    <div className="pointer-events-none absolute right-0 top-[62%] hidden h-44 w-[62%] lg:block">
      <AnimatePresence mode="popLayout">
        {category.items.slice(0, 3).map((name, i) => {
          const tech = iconMap[name];
          const Icon = tech?.icon;
          const l = cardLayout[i];
          const color = tech?.color === "#ffffff" && l.light ? "#111" : tech?.color;
          return (
            <motion.div
              key={category.name + name}
              initial={{ opacity: 0, y: 30, rotate: 0, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotate: l.rot, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              style={{ left: l.x, top: l.y }}
              className={`absolute flex h-36 w-32 flex-col justify-between rounded-2xl p-4 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] ${l.bg}`}
            >
              {Icon ? <Icon size={34} style={{ color }} /> : <span />}
              <span className={`text-sm font-semibold leading-tight ${l.light ? "text-neutral-900" : "text-white"}`}>
                {name}
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const [active, setActive] = useState(Math.min(2, categories.length - 1));

  return (
    <section id="home" className="relative pt-24 pb-10 sm:pt-28" itemScope itemType="https://schema.org/Person">
      <div className="relative isolate overflow-hidden bg-[#161616] lg:aspect-[1.41/1] lg:max-h-[860px] lg:min-h-[680px]">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
          className="relative aspect-[4/5] w-full sm:aspect-[4/3] lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[56%]"
        >
          <Image
            src="/bishal.jpg"
            alt="Bishal De - Full-Stack Developer and AI Engineer from Bengaluru, India"
            fill
            priority
            className="object-cover object-[50%_35%] grayscale contrast-[1.1]"
            sizes="(max-width: 1024px) 100vw, 56vw"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#161616] lg:bg-gradient-to-r lg:via-60%" />
        </motion.div>

        {/* About Me tab */}
        <a
          href="#about"
          className="about-tab absolute left-0 top-0 z-20 bg-[#161616] pb-6 pl-5 pr-10 pt-5 text-lg font-medium leading-[1.05] text-white"
        >
          About
          <br />
          Me <Arrow className="h-3.5 w-3.5 text-orange-400" />
        </a>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="pointer-events-none relative z-10 -mt-[38vw] px-5 leading-[0.8] tracking-[-0.06em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)] sm:-mt-[30vw] sm:px-8 lg:absolute lg:bottom-[13%] lg:left-[25%] lg:mt-0 lg:px-0"
          itemProp="name"
        >
          <span className="block pl-[0.35em] text-[22vw] font-medium sm:text-[16vw] lg:text-[9.5rem] xl:text-[10.5rem]">
            Bishal
          </span>
          <span className="block text-[26vw] font-bold italic sm:text-[19vw] lg:text-[11.5rem] xl:text-[12.5rem]">
            De<span className="text-orange-400">.</span>
          </span>
        </motion.h1>

        {/* Stack panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative z-10 px-5 pt-10 sm:px-8 lg:absolute lg:right-[4.5%] lg:top-[6%] lg:w-[40%] lg:px-0 lg:pt-0"
        >
          <div className="flex items-end justify-between gap-4 border-b border-white/15 pb-5">
            <h2 className="flex items-start text-5xl font-medium tracking-[-0.05em] text-white sm:text-6xl">
              Stack
              <sup className="ml-1 mt-1 text-xl font-normal tracking-normal text-white/90">({totalSkills})</sup>
            </h2>
            <ul className="hidden items-center gap-3 pb-2 sm:flex" aria-label="Companies">
              {companies.map((name) => (
                <li key={name} title={name}>
                  <CompanyLogo company={name} size={34} className="rounded-xl" />
                </li>
              ))}
            </ul>
          </div>

          <ul>
            {categories.map((c, i) => (
              <StackRow key={c.name} category={c} active={i === active} onEnter={() => setActive(i)} />
            ))}
          </ul>

          <FloatingCards category={categories[active]} />
        </motion.div>

        {/* Bottom meta */}
        <div className="relative z-10 grid grid-cols-2 gap-6 px-5 pb-6 pt-10 sm:px-8 lg:absolute lg:inset-x-0 lg:bottom-0 lg:grid-cols-3 lg:px-6 lg:pb-6 lg:pt-0">
          <div className="leading-tight">
            <p className="text-[11px] uppercase tracking-wide text-white/50">Availability</p>
            <p className="mt-0.5 flex items-center gap-2 text-sm font-medium italic text-white">
              Open to freelance
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
            </p>
          </div>
          <div className="leading-tight lg:text-center">
            <p className="text-[11px] uppercase tracking-wide text-white/50">Location</p>
            <p className="mt-0.5 text-sm text-white" itemProp="address">
              {profile.location}, India
            </p>
          </div>
        </div>

        {/* Bubble cluster */}
        <div className="relative z-20 mx-auto mb-8 h-52 w-60 lg:absolute lg:bottom-5 lg:right-5 lg:mb-0">
          {bubbles.map(({ href, label, icon: Icon, pos }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.08, ease }}
              whileHover={{ scale: 1.1 }}
              className={`bubble absolute ${pos} flex h-14 w-14 items-center justify-center text-neutral-300 hover:text-white`}
            >
              <Icon size={20} />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            whileHover={{ scale: 1.05 }}
            className="bubble absolute bottom-3 right-2 flex h-32 w-32 flex-col items-start justify-center pl-7 text-xl font-medium leading-[1.05] text-white"
          >
            Book a
            <span>
              Call <Arrow dir="up-left" className="h-4 w-4 text-orange-400" />
            </span>
          </motion.a>
        </div>
      </div>

      <div className="hidden" itemProp="knowsAbout">
        React, Next.js, Python, JavaScript, Go, Node.js, Django, Flask, FastAPI, AWS, Docker, Kubernetes, Machine Learning, Artificial Intelligence, DevOps
      </div>
    </section>
  );
}
