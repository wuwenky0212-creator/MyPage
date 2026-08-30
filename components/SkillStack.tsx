"use client";

import { useLanguage } from "@/lib/language-context";
import { t, getSkills } from "@/lib/i18n";
import { SectionHeader } from "./NowFeed";

const dotColor = [
  "bg-coral",
  "bg-champagne",
  "bg-bronze",
  "bg-peach-dark",
  "bg-champagne-dark",
];

export default function SkillStack() {
  const { locale } = useLanguage();
  const ui = t(locale);
  const skills = getSkills(locale);
  const allSkills = Object.values(skills).flat();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow={ui.skillEyebrow}
        title={ui.skillTitle}
        desc={ui.skillDesc}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, list], idx) => (
          <div key={group} className="bloom-card relative rounded-2xl p-5">
            <div className="absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-coral/40 via-champagne/30 to-transparent" />
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${dotColor[idx % dotColor.length]}`} />
              <h3 className="font-display text-sm uppercase tracking-wider text-ink-sub">
                {group}
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {list.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-champagne/40 bg-champagne-pale/40 px-2.5 py-1 text-xs text-dark-text/80 transition-all hover:border-coral/30 hover:bg-coral/8 hover:text-coral-dark"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 relative overflow-hidden rounded-2xl border border-champagne/30 bg-warm-white py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-warm-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-warm-white to-transparent" />
        <Marquee items={allSkills} />
        <Marquee items={allSkills} reverse className="mt-3" />
      </div>
    </section>
  );
}

function Marquee({
  items,
  reverse = false,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"} ${className}`}>
      {doubled.map((s, i) => (
        <span
          key={`${s}-${i}`}
          className="mx-2 inline-flex shrink-0 items-center gap-2 rounded-full border border-champagne/30 bg-cream-50 px-3 py-1 text-xs text-bronze"
        >
          <span className="h-1 w-1 rounded-full bg-coral" />
          {s}
        </span>
      ))}
    </div>
  );
}
