/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ["Exo", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: "#330066",
        secondary:'#4299e1'
      },
    },
  },
  plugins: [],
};
