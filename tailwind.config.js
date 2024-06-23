/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif']
      },
      screens: {
        lg1166: '1166px',
        lg1165: '1165px',
        lg1371: '1371px',
      }
    },
  },
  plugins: [],
}

