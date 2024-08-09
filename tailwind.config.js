/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_purple_extradark: "#1f084c",
        custom_purple_dark: "#6210cc",
        custom_purple_light: "#dcc8fe",
        custom_blueish_purple: "#6a65ff",
        custom_blue: "#1556ff",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 5s linear infinite",
        "line-left-to-right": "line-left-to-right 0.5s ease-in-out forwards",
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "line-left-to-right": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      backgroundImage: {
        herobackground: "url('background.jpg')",
        devsection: "url('/sparkle1.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-animated")],
};
