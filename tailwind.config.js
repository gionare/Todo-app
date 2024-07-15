/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#171823",
        grey: "#25273d",
        brightblue: "hsl(220, 98%, 61%)",
        white: "#ffffff",
        whitelist: "#fafafa",
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-desktop-dark.jpg')",
        "hero-pattern-light": "url(/bg-desktop-light.jpg)",
      },
    },
  },
  plugins: [],
};
