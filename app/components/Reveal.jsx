"use client";
import { useEffect, useRef } from "react";

export default function Reveal({ children, className = "", as: As = "div", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-3");
            el.classList.add("animate-fadeUp");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    const timer = setTimeout(() => observer.observe(el), delay);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <As ref={ref} className={`opacity-0 translate-y-3 will-change-transform ${className}`}>
      {children}
    </As>
  );
}
