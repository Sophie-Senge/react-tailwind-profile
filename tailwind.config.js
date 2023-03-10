/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/background-edited.jpg')",
      },
      fontFamily: {
        road: ['Road'],
        headings: ['Oswald', 'sans-serif']

      },
    },
  },
  plugins: [],
}
