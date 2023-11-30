/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color-1": "#fff",
        "bg-color-2": "#f3f4f6",
        "text-color-1": "#0a0a0a",
        "text-color-2": "#a3a3a3",
        "accent-color-1": "#fb7185",
        "accent-color-2": "#f43f5e",
        "border-color": "#f3f4f6",
      },
      fontFamily: {
        sans: ["var(--font-openSans)"],
      },
    },
  },
  plugins: [],
};
