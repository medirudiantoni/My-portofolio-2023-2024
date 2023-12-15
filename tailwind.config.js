/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins',
        'lexend-deca': 'Lexend Deca',
        'bebas-neue': 'Bebas Neue',
        'macondo': 'Macondo',
        'playfair-display': 'Playfair Display',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shifting: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite reverse',
        'medi-2023': 'marquee 50s linear infinite reverse',
        'marquee-slow': 'marquee 72s linear infinite',
        'marquee-normal': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee 30s linear infinite reverse',
        'blip-blip': 'shifting 50s liner infinite'
      }
    },
  },
  plugins: [],
}