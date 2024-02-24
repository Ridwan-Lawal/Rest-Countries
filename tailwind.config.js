/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        // (Dark Mode Elements)
        darkBlue: "hsl(209, 23%, 22%)",
        // (Dark Mode Background)
        veryDarkBlue: "hsl(207, 26%, 17%)",
        // (Light Mode Text)
        veryDarkBlue2: "hsl(200, 15%, 8%)",
        // (Light Mode Input)
        DarkGray: "hsl(0, 0%, 52%)",
        // (Light Mode Background)
        veryLightGray: "hsl(0, 0%, 98%)",
        // (Dark Mode Text & Light Mode Elements)
        white: "hsl(0, 0%, 100%)",
      },

      boxShadow: {
        custom: "2px 2px 5px 3px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
