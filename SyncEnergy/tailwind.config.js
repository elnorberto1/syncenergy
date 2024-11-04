/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html", "./src/**/*.ts"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

