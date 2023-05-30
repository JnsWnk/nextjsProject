/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  config: "C:/Users/Jonas/Desktop/nextjsproject/tailwind.config.js",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto-mono)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
};
