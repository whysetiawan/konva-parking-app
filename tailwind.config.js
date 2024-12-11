/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        md: "calc(var(--radius) - 4px)",
      },
      width: {
        "main-content": "var(--main-content-width)",
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
