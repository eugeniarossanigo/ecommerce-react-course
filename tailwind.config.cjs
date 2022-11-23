/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'green-mh': '#387e46',
      'white-mh': '#f1f5e0',
      'dark-mh': '#383838',
      'light-grey': '#F2F2F4',
      'dark-grey': '#777777',
    }
  },
  plugins: [],
}
