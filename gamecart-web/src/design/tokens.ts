export const designTokens = {
  colors: {
    bg: "#060a12",
    panel: "#0d1523",
    panelHigh: "#121e31",
    line: "#203247",
    ink: "#eef7ff",
    muted: "#8ea6be",
    neon: "#37e9ff"
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    xxl: "2rem"
  },
  radius: {
    chip: "999px",
    panel: "18px",
    card: "22px"
  },
  shadows: {
    soft: "0 10px 40px rgba(5, 9, 16, 0.5)",
    lift: "0 18px 42px rgba(2, 8, 18, 0.72)",
    neon: "0 0 0 1px rgba(55, 233, 255, 0.35), 0 0 34px rgba(55, 233, 255, 0.18)"
  }
} as const;

export type DesignTokens = typeof designTokens;
