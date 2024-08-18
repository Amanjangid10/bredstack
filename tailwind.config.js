/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "640px",
      },
      colors: {
        custom_blue_dark: "#161C2D",
        custom_bluelight: "#F4F7FA",
        custom_blue: "#473BF0",
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
