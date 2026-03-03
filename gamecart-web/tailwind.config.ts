import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--gc-bg) / <alpha-value>)",
        panel: "rgb(var(--gc-panel) / <alpha-value>)",
        "panel-hi": "rgb(var(--gc-panel-hi) / <alpha-value>)",
        line: "rgb(var(--gc-line) / <alpha-value>)",
        ink: "rgb(var(--gc-ink) / <alpha-value>)",
        muted: "rgb(var(--gc-muted) / <alpha-value>)",
        neon: "rgb(var(--gc-neon) / <alpha-value>)"
      },
      borderRadius: {
        panel: "var(--gc-radius-panel)",
        chip: "var(--gc-radius-chip)"
      },
      boxShadow: {
        soft: "var(--gc-shadow-soft)",
        lift: "var(--gc-shadow-lift)",
        neon: "var(--gc-shadow-neon)"
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "'Inter'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
