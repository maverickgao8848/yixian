import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hui-gray": "#C4C8C2",
        "rice-paper": "#EBEAE5",
        cinnabar: "#D87F72",
        "seal-red": "#8B2F22",
        "slate-dark": "#121C22",
        obsidian: "#05090C",
        "neon-jade": "#00FFAA",
        "liquid-gold": "#FFB800",
        "ink-black": "#2B2C2A",
        "ink-gray": "#8D8E8A",
        "silver-gray": "#E4EDF2",
        "iron-blue": "#5C7785",
      },
      fontFamily: {
        serif: ["Noto Serif SC", "serif"],
        mono: ["JetBrains Mono", "Space Grotesk", "monospace"],
      },
      backdropBlur: {
        xs: "12px",
        "2xl": "36px",
        "3xl": "48px",
      },
      animation: {
        "fluid-slow": "fluidDrift 30s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "glitch": "glitch 0.1s steps(2) infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fluidDrift: {
          "0%, 100%": { transform: "scale(1.1) translate(0, 0)" },
          "25%": { transform: "scale(1.12) translate(2%, -1%)" },
          "50%": { transform: "scale(1.08) translate(-1%, 2%)" },
          "75%": { transform: "scale(1.11) translate(1%, -2%)" },
        },
        breathe: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "25%": { transform: "translate(-1px, 1px)" },
          "50%": { transform: "translate(1px, -1px)" },
          "75%": { transform: "translate(-1px, -1px)" },
          "100%": { transform: "translate(1px, 1px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 4px rgba(0, 255, 170, 0.3)" },
          "50%": { boxShadow: "0 0 16px rgba(0, 255, 170, 0.6)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
