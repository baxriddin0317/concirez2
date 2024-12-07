/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand": {
          'black': {
            DEFAULT: "#121212",
            100: "#505050",
            200: "#B0B0B0"
          },
          'main': {
            DEFAULT: "#FF462D"
          },
          'gray': "#E7E7F6"
        }
      },
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans serif']
      },
      maxWidth: {
        '8xl': "1400px"
      },
      backgroundImage:{
        'main-gradient': "linear-gradient(90deg, rgba(246, 246, 246, 0.05) 0%, rgba(144, 144, 144, 0.05) 100%)",
        'bottom': "linear-gradient(180deg, transparent 0%, #121212 100%)",
        'card': "linear-gradient(90deg, rgba(18, 18, 18, 0.80) 0%, rgba(36, 36, 36, 0.80) 100%)",
        'modal': "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(144, 144, 144, 0.05) 100%)",
        'add-card': "linear-gradient(270deg, rgba(246, 246, 246, 0.05) 0%, rgba(144, 144, 144, 0.05) 100%)"
      }
    },
  },
  plugins: [],
}
