import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1E293B",
          light: "#334155",
          dark: "#0F172A",
        },
        brand: {
          blue: "#2563EB",
          "blue-dark": "#1D4ED8",
          orange: "#F97316",
          "orange-dark": "#EA580C",
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "roof-grid":
          "linear-gradient(rgba(30,41,59,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
