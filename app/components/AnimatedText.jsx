"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedText({ text, className = "", wordByWord = true, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (wordByWord) {
    const words = text.split(" ");
    return (
      <span ref={ref} className={`inline ${className}`}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.4,
              delay: delay + i * 0.05,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </span>
    );
  }

  const letters = text.split("");
  return (
    <span ref={ref} className={`inline ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.02,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </span>
  );
}
