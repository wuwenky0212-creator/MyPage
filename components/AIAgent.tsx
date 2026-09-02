"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { t, getAgentSuggestions } from "@/lib/i18n";
import { SectionHeader } from "./NowFeed";
import HighlightText from "./HighlightText";
import { mockReply } from "@/lib/mock-chat";

type Msg = { role: "user" | "assistant"; content: string };

export default function AIAgent() {
  const { locale } = useLanguage();
  const ui = t(locale);
  const suggestions = getAgentSuggestions(locale);

  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: ui.agentWelcome },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset welcome message when locale changes
  useEffect(() => {
    setMessages([{ role: "assistant", content: ui.agentWelcome }]);
  }, [locale, ui.agentWelcome]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: mockReply(content) }]);
      setLoading(false);
    }, 450);
  };

  return (
    <section id="agent" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow={ui.agentEyebrow}
        title={ui.agentTitle}
        desc={ui.agentDesc}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_2fr]">
        {/* 左侧 */}
        <aside className="bloom-card relative space-y-4 rounded-2xl p-5">
          <div className="absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-coral via-champagne to-transparent" />
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-champagne-dark">
              {ui.agentTryAsking}
            </div>
            <h3 className="mt-1 font-display text-base text-ink-sub">
              {ui.agentDontKnow}
            </h3>
          </div>
          <ul className="space-y-2">
            {suggestions.map((q) => (
              <li key={q}>
                <button
                  onClick={() => send(q)}
                  disabled={loading}
                  className="w-full rounded-lg border border-champagne/40 bg-cream-50 px-3 py-2 text-left text-xs text-dark-text/80 transition-all hover:border-coral/30 hover:bg-coral/5 hover:text-ink disabled:opacity-50"
                >
                  → {q}
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t border-warm-line pt-4 text-[11px] leading-relaxed text-champagne-dark">
            <span className="font-mono">{ui.agentBehindScenes}</span>
            <br />
            {ui.agentTechDesc}
          </div>
        </aside>

        {/* 右侧对话框 */}
        <div className="bloom-card-strong overflow-hidden rounded-2xl">
          {/* 顶栏 */}
          <div className="flex items-center justify-between border-b border-warm-line bg-champagne-pale/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-coral to-champagne-dark text-xs font-bold text-white">
                X
              </span>
              <div className="leading-tight">
                <div className="font-display text-sm text-ink-title">
                  {ui.agentDigitalTwin}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-champagne-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                  {ui.agentPowered}
                </div>
              </div>
            </div>
            <span className="rounded-full border border-champagne/50 bg-champagne-pale/60 px-2 py-0.5 font-mono text-[10px] text-bronze">
              {ui.agentMockMode}
            </span>
          </div>

          {/* 消息区 */}
          <div
            ref={scrollRef}
            className="h-[420px] space-y-4 overflow-y-auto px-4 py-5"
          >
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} content={m.content} />
            ))}
            {loading && <Bubble role="assistant" content="" typing />}
          </div>

          {/* 输入区 */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-warm-line bg-champagne-pale/25 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={ui.agentPlaceholder}
              className="flex-1 rounded-lg border border-champagne/40 bg-cream-50 px-3 py-2 text-sm text-ink placeholder-champagne-dark outline-none transition-colors focus:border-coral/40 focus:bg-white"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-lg bg-gradient-to-r from-coral to-champagne-dark px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              {loading ? "..." : ui.agentSend}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Bubble({
  role,
  content,
  typing = false,
}: {
  role: "user" | "assistant";
  content: string;
  typing?: boolean;
}) {
  const isUser = role === "user";
  return (
    <div
      className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
          isUser
            ? "bg-champagne/30 text-ink"
            : "bg-gradient-to-br from-coral to-champagne-dark text-white"
        }`}
      >
        {isUser ? "你" : "X"}
      </div>
      <div
        className={`max-w-[80%] whitespace-pre-wrap break-words rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-champagne/15 text-ink"
            : "border border-champagne/30 bg-warm-white text-dark-text"
        }`}
      >
        {typing ? (
          <span className="inline-flex items-center gap-1">
            <Dot delay="0s" />
            <Dot delay="0.15s" />
            <Dot delay="0.3s" />
          </span>
        ) : (
          content
        )}
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="h-1.5 w-1.5 rounded-full bg-champagne animate-bounce"
      style={{ animationDelay: delay }}
    />
  );
}
