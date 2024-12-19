import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: { scalepulse: "scalepulse 8s ease-in-out infinite" },
      keyframes: {
        scalepulse: {
          "0%": { scale: "1" },
          "50%": { scale: "1.05" },
          "100%": { scale: "1" },
        },
      },
      fontFamily: {
        sans: ["var(--font-Rubik)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
