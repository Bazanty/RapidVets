import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grandview: ["var(--font-grandview)"],
        sans: ["var(--font-grandview)"],
        mono: ["var(--font-grandview)"],
      },
    },
  },
  plugins: [],
};

export default config;