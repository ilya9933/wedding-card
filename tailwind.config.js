/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7F0",
        ivory: "#FFFBF7",
        sand: "#F3E7DA",
        blush: "#EFD3C7",
        rose: "#E7BDB0",
        mocha: "#BFA6A0",
        text: "#3A3330",
        muted: "#8C817C",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

