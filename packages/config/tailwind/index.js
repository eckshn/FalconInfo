/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      darkgrey: "#262626",
      gold: "EFAE04",
      white: "F5F5F5",
      grey: "373737",
      green: "85C96D",
      blue: "6DC9C3",
    },
    extend: {},
  },
  plugins: [],
};

module.exports = config;
