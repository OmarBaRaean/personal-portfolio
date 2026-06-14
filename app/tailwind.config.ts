// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#d8e2ff",
        "tertiary-fixed": "#ffdad7",
        "primary-fixed": "#6ffbbe",
        "surface-container-high": "#2a2a2a",
        "on-secondary-container": "#e6ecff",
        "tertiary-fixed-dim": "#ffb3af",
        "surface-tint": "#4edea3",
        "inverse-surface": "#e5e2e1",
        "surface-container-low": "#1c1b1b",
        outline: "#86948a",
        "on-tertiary-fixed": "#410005",
        surface: "#131313",
        "tertiary-container": "#fc7c78",
        "on-error": "#690005",
        "on-secondary-fixed": "#001a42",
        background: "#131313",
        "on-surface-variant": "#bbcabf",
        "surface-variant": "#353534",
        "inverse-on-surface": "#313030",
        tertiary: "#ffb3af",
        "secondary-container": "#0566d9",
        "on-primary-fixed-variant": "#005236",
        "surface-container-highest": "#353534",
        "surface-container": "#201f1f",
        "outline-variant": "#3c4a42",
        "on-tertiary-fixed-variant": "#842225",
        "error-container": "#93000a",
        "on-primary-fixed": "#002113",
        "on-background": "#e5e2e1",
        "on-secondary-fixed-variant": "#004395",
        "on-tertiary-container": "#711419",
        secondary: "#adc6ff",
        "on-primary": "#003824",
        "inverse-primary": "#006c49",
        "surface-dim": "#131313",
        primary: "#4edea3",
        "on-primary-container": "#00422b",
        "secondary-fixed-dim": "#adc6ff",
        "primary-container": "#10b981",
        "on-secondary": "#002e6a",
        "primary-fixed-dim": "#4edea3",
        error: "#ffb4ab",
        "on-tertiary": "#650911",
        "on-error-container": "#ffdad6",
        "surface-container-lowest": "#0e0e0e",
        "surface-bright": "#3a3939",
        "on-surface": "#e5e2e1",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        gutter: "24px",
        sm: "8px",
        md: "16px",
        "container-max": "1280px",
        xs: "4px",
        base: "4px",
        lg: "24px",
        "2xl": "64px",
        xl: "40px",
      },
      fontFamily: {
        "button-text": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"],
        "code-label": ["JetBrains Mono", "monospace"],
        "body-sm": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "display-lg-mobile": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
      },
      fontSize: {
        "button-text": [
          "14px",
          { lineHeight: "1", letterSpacing: "0.01em", fontWeight: "600" },
        ],
        "display-lg": [
          "48px",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "code-label": ["13px", { lineHeight: "1.2", fontWeight: "500" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "display-lg-mobile": [
          "32px",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};

export default config;

// ─────────────────────────────────────────────
// globals.css  (add to your existing globals.css)
// ─────────────────────────────────────────────
//
// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@500&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
//
// body {
//   background-color: #0a0a0a;
//   color: #e5e2e1;
// }
//
// .card-border-hover:hover {
//   border-color: #3b82f6;
// }
//
// .glow-effect:hover {
//   box-shadow: 0 0 15px rgba(59, 130, 246, 0.1);
// }
