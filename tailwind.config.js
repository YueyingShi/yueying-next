// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        garamond: ["var(--font-garamond)", "serif"],
      },
      // Document custom font families in your README for clarity
    },
  },
  plugins: [],
};
