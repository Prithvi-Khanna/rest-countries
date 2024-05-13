/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "280px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        ["2xl"]: "1530px",
      },
      colors: {
        "primary-50": "hsl(0, 0%, 96%)", // Light Mode Background
        "primary-100": "hsl(200, 15%, 8%)", // Light Mode Text
        "primary-200": "hsl(0, 0%, 100%)", // Light Mode Elements
        "primary-300": "hsl(0, 0%, 92%)", // Light Mode Input
        "primary-dark-50": "hsl(207, 26%, 17%)", // Dark Mode Background
        "primary-dark-100": "hsl(0, 0%, 100%)", // Dark Mode Text
        "primary-dark-200": "hsl(209, 23%, 22%)", // Dark Mode Elements
        "primary-dark-300":"hsl(209, 11%, 32%)",
      },
      fontFamily: {
        nunitoSans: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
};
