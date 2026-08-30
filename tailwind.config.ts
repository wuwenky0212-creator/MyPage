import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFBF3",
          100: "#FFF8EC",
          200: "#F5EEE1",
        },
        champagne: {
          DEFAULT: "#D6BF99",
          light: "#EDE0C8",
          pale: "#F5EEE1",
          dark: "#B8A47E",
        },
        bronze: {
          DEFAULT: "#8B6D48",
          dark: "#604B30",
          light: "#A6895E",
        },
        peach: {
          DEFAULT: "#F2C8AF",
          light: "#F8DFD0",
          dark: "#E0A88A",
        },
        coral: {
          DEFAULT: "#E48458",
          light: "#EDA07A",
          dark: "#C96E42",
        },
        ink: {
          DEFAULT: "#3A2E22",
          heading: "#3A2E22",
          title: "#4A3C2C",
          sub: "#604B30",
        },
        "dark-text": "#3E382E",
        caramel: "#A6895E",
        "warm-line": "#E6DCC8",
        "warm-white": "#FAF6EE",
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "Georgia",
          "PingFang SC",
          "Microsoft YaHei",
          "serif",
        ],
        body: [
          "var(--font-body)",
          "system-ui",
          "-apple-system",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        bloom: "bloom 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        bloom: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
