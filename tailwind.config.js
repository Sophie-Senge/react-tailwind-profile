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
        'hero-pattern': "url('./images/IMG_6282.jpg')",
      },
      fontFamily: {
        road: ['Road'],
        headings: ['Oswald', 'sans-serif'],
        accent: ['Fira Code', 'monospace']

      },
          borderRadius: {
            extraLarge: '12rem'
          },
        
      
    },
  },
  plugins: [],
}
