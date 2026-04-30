import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1B4FA0",
          "blue-dark": "#143D7A",
          "blue-light": "#2563C4",
          orange: "#E84518",
          "orange-dark": "#C43A12",
          "orange-light": "#FF5A2B",
          dark: "#0A1628",
          gray: "#F5F7FA",
          "gray-mid": "#E8ECF2",
          "text-muted": "#6B7A90",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "card": "0 4px 24px rgba(27, 79, 160, 0.08)",
        "card-hover": "0 8px 40px rgba(27, 79, 160, 0.15)",
        "hero": "0 20px 60px rgba(27, 79, 160, 0.20)",
      },
    },
  },
  plugins: [],
};

export default config;
