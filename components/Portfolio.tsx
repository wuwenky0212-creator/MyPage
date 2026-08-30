"use client";

import { useLanguage } from "@/lib/language-context";
import { t, getPortfolio } from "@/lib/i18n";
import { SectionHeader } from "./NowFeed";
import HighlightText from "./HighlightText";

const coverAccent: Record<string, string> = {
  violet: "from-champagne/30 to-transparent",
  cyan: "from-peach/20 to-transparent",
  lime: "from-coral/15 to-transparent",
  rose: "from-champagne-light/40 to-transparent",
};

const coverDot: Record<string, string> = {
  violet: "bg-champagne",
  cyan: "bg-peach-dark",
  lime: "bg-coral",
  rose: "bg-bronze-light",
};

export default function Portfolio() {
  const { locale } = useLanguage();
  const ui = t(locale);
  const portfolio = getPortfolio(locale);

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow={ui.portEyebrow}
        title={ui.portTitle}
        desc={ui.portDesc}
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {portfolio.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bloom-card group relative overflow-hidden rounded-2xl p-6"
          >
            <div
              className={`pointer-events-none absolute -top-24 left-0 h-48 w-full bg-gradient-to-b ${coverAccent[p.cover]}`}
            />
            <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-coral/50 via-champagne/30 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${coverDot[p.cover]} animate-pulse`}
                />
                <span className="font-mono text-[10px] uppercase tracking-wider text-champagne-dark">
                  Case · {p.id}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl tracking-tight text-ink-title">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-bronze">{p.subtitle}</p>

              <HighlightText
                text={p.description}
                as="p"
                className="mt-5 text-sm leading-relaxed text-dark-text/80"
              />

              <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-warm-line pt-4">
                {p.metrics.map((m) => (
                  <div key={m.k}>
                    <dt className="text-[10px] uppercase tracking-wider text-champagne-dark">
                      {m.k}
                    </dt>
                    <dd className="mt-1 font-mono text-base text-ink-sub">
                      {m.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-champagne/50 bg-champagne-pale/50 px-2.5 py-0.5 text-[11px] text-bronze"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-champagne-dark transition-all group-hover:text-coral group-hover:gap-2">
                  {ui.portReadMore}
                  <span className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
