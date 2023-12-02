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
        "bg-color-3": "#e5e7eb",
        "text-color-1": "#0a0a0a",
        "text-color-2": "#474747",
        "text-color-3": "#858585",
        "accent-color-1": "#fb7185",
        "accent-color-2": "#f43f5e",
        "border-color": "#f3f4f6",
      },
      fontFamily: {
        sans: ["var(--font-openSans)"],
      },
      borderRadius: {
        none: "0px",
        "top-left": "90px 80px",
        "top-right": "65px 70px",
        "bottom-right": "100px 120px",
        "bottom-left": "65px 95px",
      },
      backgroundImage: {
        "project-tracker": "url('/public/project-tracker.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
