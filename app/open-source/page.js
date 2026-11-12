import Link from "next/link";
import Arrow from "../components/Arrow";
import OrgLogo from "../components/OrgLogo";
import contributions from "../content/open-source.json";

export const metadata = {
  title: "Open Source Contributions",
  description:
    "Merged open source pull requests by Bishal De to Grafana projects, with a plain-English summary of what each one fixes.",
  alternates: { canonical: "/open-source" },
};

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function OpenSourcePage() {
  const prs = contributions;
  const repos = [...new Set(prs.map((p) => p.repo))];

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <section className="pt-36 pb-20 sm:pt-44 sm:pb-28">
        <Link href="/#open-source" className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white">
          <Arrow dir="up-left" className="h-3.5 w-3.5" /> Back home
        </Link>

        <div className="mt-10 grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Open Source</p>
            <h1 className="heading flex items-start text-5xl text-balance sm:text-6xl lg:text-7xl">
              <span>Merged pull requests</span>
              <sup className="ml-2 mt-2 text-xl font-normal tracking-normal text-white/70 sm:text-2xl">({prs.length})</sup>
            </h1>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:pb-2 lg:text-right">
            Bug fixes I&apos;ve landed across {repos.length} Grafana repositories, explained without the jargon.
          </p>
        </div>

        <ol className="mt-12 sm:mt-16">
          {prs.map((p, i) => (
            <li key={p.url} className="grid gap-4 border-b border-white/10 py-10 sm:grid-cols-[4rem_1fr] sm:gap-8">
              <span className="text-sm tabular-nums text-white/40">({String(i + 1).padStart(2, "0")})</span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
                  <span className="flex items-center gap-2.5 text-white/50">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ring-white/10">
                      <OrgLogo name={p.logo} className="h-[18px] w-[18px]" />
                    </span>
                    {p.repo}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ab7df8]/40 px-2.5 py-0.5 text-[#ab7df8]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ab7df8]" /> Merged {formatDate(p.merged)}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">{p.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{p.summary}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/60">
                      {t}
                    </span>
                  ))}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group ml-auto inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300"
                  >
                    View PR #{p.number}
                    <Arrow dir="up-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-white/50">
          More in progress on{" "}
          <a href="https://github.com/bishalde" target="_blank" rel="noopener noreferrer" className="text-white underline-offset-4 hover:underline">
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
}
