/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B88F4",
        orange: "#FF7724",
        lightOrange: "#FFF4ED",
        lightBlue: "#F2F4F7",
        textLight: "#4B5665",
      },
    },
  },
  plugins: [],
};
