/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': '1900px',
      'xl': '1400px',
      'lg': '980px',
      'sm': '640px'
    },
    fontFamily: {
      'worksans': ['Work Sans', 'sans-serif'],
      'roboto': ["'Roboto Condensed'", 'sans-serif'],
    }
  },
  plugins: [],
}
