/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  darkMode: 'class',
  
  theme: {
    container: {
      center: true,
      padding: '64px',
    },

    extend: {
      colors: {
        dark1: '#303030',
        dark2: '#222222',
        'dark-hover': '#000000',
        green: '#00E59B',
        green2: '#0CCA8D',
      },

      fontFamily: {
        "roboto": ['Roboto'],
      },

      backgroundImage: {
        'background-pattern': "url('/dist/assets/jelajahi/background-pattern.png')",
      },
    },
  },
  plugins: [],
}

