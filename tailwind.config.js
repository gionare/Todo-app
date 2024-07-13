/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#171823",
        grey: "#25273d",
        brightblue: "hsl(220, 98%, 61%)",
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-desktop-dark.jpg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
