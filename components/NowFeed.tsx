"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { t, getNowFeed } from "@/lib/i18n";
import HighlightText from "./HighlightText";

const tagStyle: Record<string, string> = {
  Hackathon: "bg-coral/12 text-coral-dark border-coral/25",
  Learning: "bg-champagne/20 text-bronze-dark border-champagne/40",
  Reading: "bg-peach/25 text-bronze border-peach/40",
  Building: "bg-coral/10 text-coral border-coral/20",
  Talk: "bg-champagne-pale text-bronze-dark border-champagne/50",
  Thinking: "bg-peach-light/40 text-bronze border-peach/30",
};

const TAGS = ["All", "Hackathon", "Learning", "Reading", "Building", "Talk", "Thinking"];

export default function NowFeed() {
  const [filter, setFilter] = useState<string>("All");
  const { locale } = useLanguage();
  const ui = t(locale);
  const nowFeed = getNowFeed(locale);
  const list = filter === "All" ? nowFeed : nowFeed.filter((n) => n.tag === filter);

  return (
    <section id="now" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow={ui.nowEyebrow}
        title={ui.nowTitle}
        desc={ui.nowDesc}
      />

      <div className="mt-8 flex flex-wrap gap-2 scrollbar-hide">
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              filter === tag
                ? "border-coral bg-coral text-white"
                : "border-champagne/50 bg-champagne-pale/50 text-bronze hover:bg-champagne-light/60"
            }`}
          >
            {tag === "All" ? ui.nowFilterAll : tag}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {list.map((n) => (
          <article
            key={n.id}
            className="bloom-card group relative overflow-hidden rounded-2xl p-5"
          >
            <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-coral/60 via-champagne/40 to-transparent" />
            <div className="flex items-center justify-between">
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                  tagStyle[n.tag] || "bg-champagne/15 text-bronze"
                }`}
              >
                {n.tag}
              </span>
              <time className="font-mono text-[11px] text-champagne-dark">
                {n.date}
              </time>
            </div>
            <h3 className="mt-3 font-display text-lg text-ink-sub">
              {n.title}
            </h3>
            <HighlightText
              text={n.body}
              as="p"
              className="mt-2 text-sm leading-relaxed text-bronze"
            />
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-coral/[0.06] opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs text-champagne-dark">
        <span className="font-mono">// TODO</span>
        <span>{ui.nowTodo}</span>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-champagne-dark">
        <span className="h-px w-6 bg-champagne" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl tracking-tight text-ink-title sm:text-4xl">
        {title}
      </h2>
      {desc && (
        <HighlightText
          text={desc}
          as="p"
          className="mt-3 text-sm leading-relaxed text-bronze"
        />
      )}
    </div>
  );
}
