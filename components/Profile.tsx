"use client";

import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { t, getProfile } from "@/lib/i18n";
import HighlightText from "./HighlightText";

const toneMap: Record<string, string> = {
  lime: "border-coral/30 bg-coral/8 text-coral-dark",
  violet: "border-champagne bg-champagne/15 text-bronze",
  cyan: "border-peach bg-peach/20 text-bronze-dark",
};

export default function Profile() {
  const { locale } = useLanguage();
  const ui = t(locale);
  const p = getProfile(locale);

  return (
    <section
      id="profile"
      className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 sm:pt-40"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          {/* 顶部小标识 */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-champagne/50 bg-champagne-pale/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-bronze">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            {ui.profileBadge}
          </div>

          {/* 主标题 */}
          <h1 className="font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-ink">{p.nameDisplay}</span>
            <span className="text-gradient mt-2 block">
              {ui.profileTaglinePart1}
            </span>
            <span className="mt-2 block font-body text-3xl font-medium text-bronze sm:text-4xl">
              · {ui.profileTaglinePart2}
            </span>
          </h1>

          <HighlightText
            text={ui.profileSubTagline}
            as="p"
            className="mt-8 max-w-xl text-lg leading-relaxed text-bronze"
          />

          {/* 状态标签 */}
          <div className="mt-8 flex flex-wrap gap-2">
            {p.status.map((s) => (
              <span
                key={s.label}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${toneMap[s.tone]}`}
              >
                {s.label}
              </span>
            ))}
          </div>

          {/* 快捷 CTA */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#agent"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-coral to-champagne-dark px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <span>{ui.profileCtaAgent}</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-champagne bg-champagne-pale/50 px-5 py-2.5 text-sm font-medium text-bronze-dark transition-colors hover:bg-champagne-light"
            >
              {ui.profileCtaPortfolio}
            </a>
            <a
              href="/Xinqiao_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-champagne/50 px-5 py-2.5 text-sm font-medium text-bronze transition-colors hover:bg-champagne-pale"
              download
            >
              {ui.profileCtaResume}
            </a>
          </div>

          {/* 元信息 */}
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 text-sm sm:grid-cols-4">
            <Meta k={ui.profileMetaLocation} v={ui.profileLocation} />
            <Meta k={ui.profileMetaEmail} v={profile.email} />
            <Meta k={ui.profileMetaWechat} v={profile.wechat} />
            <Meta k={ui.profileMetaLinkedin} v="@xinqiao" />
          </div>
        </div>

        {/* 头像 */}
        <div className="hidden lg:block">
          <Avatar readingLabel={ui.profileNowReading} buildingLabel={ui.profileNowBuilding} />
        </div>
      </div>
    </section>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-widest text-champagne-dark">
        {k}
      </div>
      <div className="mt-1 font-mono text-ink-sub">{v}</div>
    </div>
  );
}

function Avatar({ readingLabel, buildingLabel }: { readingLabel: string; buildingLabel: string }) {
  return (
    <div className="relative h-72 w-72">
      <div
        className="absolute inset-0 animate-spin rounded-full bg-gradient-to-tr from-coral/25 via-champagne/20 to-peach/30 blur-2xl"
        style={{ animationDuration: "20s" }}
      />
      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-champagne/50 bg-warm-white">
        <div className="grid h-full w-full place-items-center bg-gradient-to-br from-coral/10 via-cream-50 to-champagne/20">
          <div className="text-center">
            <div className="font-display text-7xl tracking-tighter text-ink-title">
              欣桥
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-champagne-dark">
              Xinqiao
            </div>
          </div>
        </div>
      </div>
      <div className="bloom-card absolute -bottom-2 -left-6 rounded-xl px-3 py-2 text-xs">
        <div className="text-champagne-dark">{readingLabel}</div>
        <div className="font-medium text-ink-sub">LLM / RAG / Agent / Prompt</div>
      </div>
      <div className="bloom-card absolute -right-4 top-4 rounded-xl px-3 py-2 text-xs">
        <div className="text-champagne-dark">{buildingLabel}</div>
        <div className="font-medium text-ink-sub">RCS 后线工作台 · AI Coding</div>
      </div>
    </div>
  );
}
