"use client";

import { useLanguage } from "@/lib/language-context";
import { t, getExperience } from "@/lib/i18n";
import { SectionHeader } from "./NowFeed";
import HighlightText from "./HighlightText";

export default function Experience() {
  const { locale } = useLanguage();
  const ui = t(locale);
  const experience = getExperience(locale);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow={ui.expEyebrow}
        title={ui.expTitle}
        desc={ui.expDesc}
      />

      <div className="mt-12 relative">
        <div className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-coral/50 via-champagne/40 to-transparent md:left-[7.5rem]" />

        <ol className="space-y-10">
          {experience.map((e) => (
            <li key={e.id} className="relative pl-10 md:pl-44">
              <span className="absolute left-2 top-1.5 grid h-3 w-3 place-items-center rounded-full bg-coral ring-4 ring-coral/15 md:left-[7.4rem]">
                <span className="h-1 w-1 rounded-full bg-white" />
              </span>

              <div className="absolute left-0 top-0 hidden w-28 text-right md:block">
                <div className="font-mono text-xs text-champagne-dark">
                  {e.period}
                </div>
              </div>

              <div className="bloom-card relative overflow-hidden rounded-2xl p-5">
                <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-coral via-champagne to-transparent" />
                <div className="md:hidden mb-2 font-mono text-xs text-champagne-dark">
                  {e.period}
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl text-ink-sub">
                    {e.role}
                    <span className="ml-2 font-body text-sm font-normal text-caramel">
                      @ {e.company}
                    </span>
                  </h3>
                  <span className="text-xs text-champagne-dark">{e.location}</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-dark-text/85">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="relative pl-4">
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-coral" />
                      <HighlightText text={b} />
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-champagne/50 bg-champagne-pale/50 px-2.5 py-0.5 text-[11px] text-bronze"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
