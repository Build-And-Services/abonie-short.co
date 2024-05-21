/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1a1a1a",
        charcoal: "#33333",
        primary: "#e916a3",
        secondary: "#709aec",
      },
    },
  },
  plugins: [],
};
