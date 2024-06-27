// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Manrope", 'sans-serif'],
      },
      colors: {
        subBlack: '#101010', 
        heroYellow: '#FDCA09',
        
      },
    },
  },
  plugins: [],
}
