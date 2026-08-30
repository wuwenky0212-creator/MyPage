"use client";

import { useEffect, useState } from "react";
import { useLanguage, Locale } from "@/lib/language-context";
import { t } from "@/lib/i18n";

const NAV_KEYS = [
  { id: "profile", key: "navProfile" },
  { id: "now", key: "navNow" },
  { id: "experience", key: "navExperience" },
  { id: "portfolio", key: "navPortfolio" },
  { id: "skills", key: "navSkills" },
  { id: "agent", key: "navAgent" },
  { id: "contact", key: "navContact" },
] as const;

const LOCALES: { code: Locale; label: string }[] = [
  { code: "zh", label: "中" },
  { code: "en", label: "EN" },
  { code: "ja", label: "日" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("profile");
  const { locale, setLocale } = useLanguage();
  const ui = t(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV_KEYS.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? "bg-cream-50/85 shadow-md shadow-champagne/15 backdrop-blur-xl border border-champagne/30"
            : ""
        }`}
      >
        <a
          href="#profile"
          className="flex items-center gap-2 text-sm tracking-wide"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-coral to-champagne font-display text-xs text-white">
            X
          </span>
          <span className="font-display text-ink-title">欣桥 · Xinqiao</span>
        </a>

        <ul className="hidden items-center gap-1 text-xs text-bronze md:flex">
          {NAV_KEYS.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  active === n.id
                    ? n.id === "agent"
                      ? "bg-coral text-white"
                      : "bg-ink text-cream-50"
                    : "hover:bg-champagne/20 hover:text-ink"
                }`}
              >
                {ui[n.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* 语言切换 */}
          <div className="flex items-center rounded-full border border-champagne/40 bg-champagne-pale/40 p-0.5">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLocale(l.code)}
                className={`rounded-full px-2 py-1 text-[11px] font-medium transition-all ${
                  locale === l.code
                    ? "bg-ink text-cream-50 shadow-sm"
                    : "text-bronze hover:text-ink"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-coral to-champagne-dark px-4 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:block"
          >
            {ui.navHire}
          </a>
        </div>
      </nav>
    </header>
  );
}
