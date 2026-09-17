/** @type {import('tailwindcss').Config} */

// ============================================================
// Daily Jokhon Somoy NewsPro — Design System
// দৈনিক যখন সময় — "সত্য প্রকাশে বদ্ধ পরিকর"
//
// This file is the single source of truth for the visual
// identity of the newspaper. All components must consume
// these tokens rather than hard-coded hex values, so the
// theme stays consistent and easy to retune later.
// ============================================================

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    // Mobile-first breakpoints, with extra granularity on the
    // small-screen end where most Bangladeshi readers land.
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        // Deep Navy — primary brand color (header, footer, nav, masthead)
        navy: {
          50: "#EEF2F8",
          100: "#D6E0EE",
          200: "#AEC1DD",
          300: "#7E9BC4",
          400: "#4E73A3",
          500: "#2F5480",
          600: "#1F3F66",
          700: "#152D4E",
          800: "#0F2038", // primary navy
          900: "#0A1626",
          950: "#060D18",
          DEFAULT: "#0F2038",
        },
        // Gold / Yellow — premium accents, dividers, highlights
        gold: {
          50: "#FBF6E7",
          100: "#F5E9C2",
          200: "#EDD68C",
          300: "#E2C158",
          400: "#D4AF37", // primary gold
          500: "#BC9527",
          600: "#96741E",
          700: "#715618",
          800: "#4D3A10",
          900: "#2A1F08",
          DEFAULT: "#D4AF37",
        },
        // Red — reserved for Breaking News / alerts / urgent notices only
        breaking: {
          50: "#FDECEC",
          100: "#F9C7C7",
          200: "#F09B9B",
          300: "#E56C6C",
          400: "#D93F3F",
          500: "#C41E1E", // primary breaking red
          600: "#A11616",
          700: "#7D1010",
          800: "#590A0A",
          900: "#360505",
          DEFAULT: "#C41E1E",
        },
        // Neutral grays — body text, borders, subdued UI
        ink: {
          50: "#F7F7F8",
          100: "#EDEEEF",
          200: "#D9DBDD",
          300: "#B9BCC1",
          400: "#8B8F97",
          500: "#666B74",
          600: "#4C505A",
          700: "#383B43",
          800: "#25272D",
          900: "#151619",
          DEFAULT: "#25272D",
        },
        paper: "#FFFFFF",
        "paper-tint": "#FAF9F6",
      },
      fontFamily: {
        // Body / UI Bangla text. Loaded locally via @font-face in
        // src/styles/fonts.css — no external CDN dependency.
        bangla: [
          "Hind Siliguri",
          "Noto Sans Bengali",
          "system-ui",
          "sans-serif",
        ],
        // Editorial headline face — swap for a licensed Bangla
        // display/serif face later without touching components.
        banglaHeadline: [
          "Noto Serif Bengali",
          "Hind Siliguri",
          "serif",
        ],
        // Latin fallback for numerals, English proper nouns, dates.
        latin: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Slightly larger baseline + generous line-height, tuned
        // for Bangla conjunct readability rather than Latin defaults.
        base: ["1rem", { lineHeight: "1.8" }],
        lg: ["1.125rem", { lineHeight: "1.8" }],
        xl: ["1.25rem", { lineHeight: "1.75" }],
        "2xl": ["1.5rem", { lineHeight: "1.7" }],
        "3xl": ["1.875rem", { lineHeight: "1.6" }],
        "4xl": ["2.25rem", { lineHeight: "1.5" }],
        "5xl": ["3rem", { lineHeight: "1.35" }],
      },
      maxWidth: {
        content: "70ch",
        container: "1280px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 32, 56, 0.08), 0 1px 2px rgba(15, 32, 56, 0.06)",
        "card-hover": "0 4px 12px rgba(15, 32, 56, 0.12)",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
        lg: "6px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
