"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "zh" | "en" | "ja";

type LanguageContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "zh",
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && ["zh", "en", "ja"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : l === "ja" ? "ja" : "en";
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
