/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Bebas Neue", "sans-serif"],
        subtitle: ["Figtree", "sans-serif"],
        grotesk: ["Hanken Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#330066",
        secondary: "#4299e1",
      },
    },
  },
  plugins: [],
};
