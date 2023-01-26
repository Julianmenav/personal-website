/** @type {import('tailwindcss').Config} */
const colors = {
  black: 'black',
  white: 'white',
  transparent: 'transparent',
  current: 'currentColor',
  React: "#61dafb",
  Javascript: "#efd81d",
  Tailwind: "#38bdf8",
  Express: "#89bb3c",
  Node: "#3b7f3a",
  PHP: "#4d588e",
  CSS: "#006ab1",
  HTML: "#d84924",
}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": "1900px",
      xl: "1400px",
      lg: "980px",
      sm: "640px",
      xs: "400px",
      "2xs": "345px",
    },
    fontFamily: {
      worksans: ["Work Sans", "sans-serif"],
      roboto: ["'Roboto Condensed'", "sans-serif"],
    },
    colors: colors,
  },
  safelist: Object.keys(colors).map(color => `text-${color}`),
  plugins: [],
};
