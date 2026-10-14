"use client";

import { useEffect, useState } from "react";

// Counts one visit per browser session via /api/visits (counterapi.dev).

export default function VisitorStats() {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    let counted = false;
    try {
      counted = sessionStorage.getItem("visit-counted") === "1";
      sessionStorage.setItem("visit-counted", "1");
    } catch {}

    fetch("/api/visits", { method: counted ? "GET" : "POST" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => data && setTotal(data.total))
      .catch(() => {});
  }, []);

  if (total == null) return null;

  return <span>{total.toLocaleString()} visits</span>;
}
