/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
    colors: {
      'green-mh': '#387e46',
      'white-mh': '#f1f5e0',
      'dark-mh': '#383838',
      'light-grey': '#F2F2F4',
      'dark-grey': '#777777',
      'red': 'red'
    }
  },
  plugins: [],
}
