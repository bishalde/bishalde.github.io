"use client";

import { useEffect, useState } from "react";

// Counts one visit per browser session on a public CountJar counter. Public
// counters need no token, so the browser calls CountJar directly.
const COUNTER = "https://countjar.vercel.app/api/v2/bishalde/portfoliovisits";

export default function VisitorStats() {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    let counted = false;
    try {
      counted = sessionStorage.getItem("visit-counted") === "1";
      sessionStorage.setItem("visit-counted", "1");
    } catch {}

    fetch(counted ? COUNTER : `${COUNTER}/up`, { method: counted ? "GET" : "POST" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => data && setTotal(Number(data.count) || 0))
      .catch(() => {});
  }, []);

  if (total == null) return null;

  return (
    <span>
      {total.toLocaleString()} visits, counted by{" "}
      <a href="https://countjar.vercel.app" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-white/70 hover:underline">
        CountJar
      </a>
    </span>
  );
}
