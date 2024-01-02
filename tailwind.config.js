/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        myblack: "#0D0D0D",
        skyblue: "#00BAF2",
        myblue: "#2bc9f8",
        blue: "#0F4A8A",
        blue2: "#225ea0",
        mywhite: "#F5F7FA",
      },
    },
    theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
