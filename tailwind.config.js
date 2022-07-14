/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'home': "url('/imgs/homebackground.webp')",
      },
    },
  },
  plugins: [],
}
