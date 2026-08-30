"use client";

import React from "react";

/**
 * HighlightText — parses inline markers and renders colored emphasis.
 *
 * Syntax in i18n strings:
 *   <<coral>>keyword<</coral>>      → warm coral accent
 *   <<grad>>keyword<</grad>>        → coral→champagne gradient text
 *   <<warm>>keyword<</warm>>        → champagne warm glow background
 *   <<metric>>20%<</metric>>        → bold mono metric badge
 *
 * Supports nesting inside any text string. Unmatched text renders as-is.
 */

type HighlightType = "coral" | "grad" | "warm" | "metric";

const HIGHLIGHT_RE = /<<(coral|grad|warm|metric)>>(.*?)<<\/\1>>/g;

const styleMap: Record<HighlightType, string> = {
  coral: "text-coral font-semibold",
  grad: "text-gradient-inline font-semibold",
  warm: "highlight-warm",
  metric: "highlight-metric",
};

export default function HighlightText({
  text,
  as: Tag = "span",
  className = "",
}: {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  // Reset regex state
  HIGHLIGHT_RE.lastIndex = 0;

  while ((match = HIGHLIGHT_RE.exec(text)) !== null) {
    // Push text before this match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const type = match[1] as HighlightType;
    const content = match[2];

    parts.push(
      <span key={match.index} className={styleMap[type]}>
        {content}
      </span>
    );

    lastIndex = match.index + match[0].length;
  }

  // Push remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // If no highlights found, just return plain text
  if (parts.length === 0) {
    parts.push(text);
  }

  return React.createElement(Tag, { className }, ...parts);
}

/**
 * Utility: check if a string contains highlight markers.
 * Use this to decide whether to render HighlightText or plain string.
 */
export function hasHighlights(text: string): boolean {
  HIGHLIGHT_RE.lastIndex = 0;
  return HIGHLIGHT_RE.test(text);
}
