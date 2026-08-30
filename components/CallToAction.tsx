"use client";

import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/i18n";
import HighlightText from "./HighlightText";

export default function CallToAction() {
  const { locale } = useLanguage();
  const ui = t(locale);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-32 pt-12">
      <div className="relative overflow-hidden rounded-3xl border border-champagne/40 bg-warm-white p-10 sm:p-14">
        {/* 背景光 */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-coral/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-champagne/20 blur-3xl" />
        {/* 顶部色条 */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-coral via-champagne to-peach" />

        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-champagne-dark">
              <span className="h-px w-6 bg-champagne" />
              {ui.ctaEyebrow}
            </div>
            <h2 className="font-display text-3xl tracking-tight text-ink-title sm:text-4xl">
              {ui.ctaHeading1}
              <br />
              <span className="text-gradient">{ui.ctaHeading2}</span>
              {ui.ctaHeading3}
            </h2>
            <HighlightText
              text={ui.ctaBody}
              as="p"
              className="mt-4 max-w-lg text-base leading-relaxed text-bronze"
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Xinqiao_Resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream-50 transition-transform hover:scale-105"
              >
                <span>{ui.ctaDownload}</span>
              </a>
              <a
                href={`mailto:${profile.email}?subject=AI%20PM%20%E5%B2%97%E4%BD%8D%E6%9C%BA%E4%BC%9A`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral to-champagne-dark px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                {ui.ctaEmail}
              </a>
            </div>
          </div>

          {/* 联系方式 */}
          <div className="grid gap-3">
            <ContactCard icon="✉" label="Email" value={profile.email} href={`mailto:${profile.email}`} accent="coral" />
            <ContactCard icon="💬" label="WeChat" value={profile.wechat} href="#" accent="champagne" note={ui.ctaWechatNote} />
            <ContactCard icon="in" label="LinkedIn" value="@xinqiao" href={profile.linkedin} accent="bronze" />
            <ContactCard icon="GH" label="GitHub" value="@xinqiao" href={profile.github} accent="peach" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 flex flex-col items-center gap-2 border-t border-champagne/20 pt-8 text-center text-xs text-champagne-dark">
        <div>
          © {new Date().getFullYear()} {locale === "en" ? "Xinqiao" : "欣桥"} · {ui.ctaFooter}
        </div>
        <div className="font-mono">
          {ui.ctaVersion}{" "}
          {new Date().toISOString().slice(0, 10)}
        </div>
      </footer>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  accent,
  note,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
  accent: "coral" | "champagne" | "bronze" | "peach";
  note?: string;
}) {
  const accentMap = {
    coral: "bg-coral/12 text-coral",
    champagne: "bg-champagne/20 text-bronze",
    bronze: "bg-bronze/10 text-bronze-dark",
    peach: "bg-peach/25 text-peach-dark",
  };
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-champagne/30 bg-cream-50 p-3 transition-all hover:border-coral/30 hover:shadow-md hover:shadow-champagne/10"
    >
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${accentMap[accent]} font-bold`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase tracking-widest text-champagne-dark">
          {label}
        </div>
        <div className="truncate text-sm font-medium text-ink-sub">
          {value}
        </div>
        {note && (
          <div className="mt-0.5 text-[10px] text-champagne-dark">{note}</div>
        )}
      </div>
      <span className="text-champagne transition-all group-hover:translate-x-1 group-hover:text-coral">
        →
      </span>
    </a>
  );
}
