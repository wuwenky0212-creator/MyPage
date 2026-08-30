import type { Metadata } from "next";
import { Young_Serif, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const youngSerif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "欣桥 · AI Product Architect",
  description:
    "吴欣桥的 AI 产品经理个人主页：AI 应用层、AI Coding、RAG 与 AI+金融产品实践。",
  keywords: [
    "AI Product Manager",
    "AI 产品经理",
    "RAG",
    "LLM",
    "FinTech",
    "欣桥",
    "Xinqiao",
  ],
  openGraph: {
    title: "欣桥 · AI Product Architect",
    description: "Self-as-a-Service · 把履历变成可对话的 AI 产品。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-CN"
      className={`${youngSerif.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-cream-50 font-body text-ink antialiased">
        {/* 全局背景 */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 champagne-dots opacity-50" />
          <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-champagne/[0.08] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-peach/[0.1] blur-3xl" />
          <div className="absolute bottom-1/3 left-0 h-[300px] w-[300px] rounded-full bg-coral/[0.05] blur-3xl" />
        </div>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
