/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add 'Poppins' as a font option
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #fde1ff, #e1ffea22 80%)',
        'custom-gradient2': 'linear-gradient(180deg, #fde1ff, #e1ffea22 100%)',
        'clip-gradient': 'linear-gradient(45deg, rgba(222, 184, 135, 0.902),rgba(222, 184, 135, 0.702),rgba(222, 184, 135, 0.402),rgba(222, 184, 135, 0.102),rgba(222, 184, 135, 0.02) )',
      },
      animation: {
        'spin-slow': 'bounce 5s 1 ',
       
      },
      gridTemplateColumns: {
        // Custom grid template with 0.5fr 2fr 1fr 1fr 1fr 1fr
        'custom-layout': '0.5fr 2fr 1fr 1fr 1fr 1fr',
      },
    },
  },
  plugins: [],
}