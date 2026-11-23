/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fbf6f2',
          100: '#f4e8e2',
          200: '#e7d0c6',
          300: '#d2a99b',
          400: '#b07668',
          500: '#8f4f47',
          600: '#733a36',
          700: '#5a2a2a',
          800: '#421b1e',
          900: '#2c1114',
          950: '#18090b',
        },
        ink: { DEFAULT: '#18090b', soft: '#2c1114', mute: '#8a7672' },
        blush: { light: '#f8ece6', DEFAULT: '#efd6cc', dark: '#c9a45c' },
        cereja: { DEFAULT: '#a3121f', dark: '#7a0d17' },
        champagne: { DEFAULT: '#c9a45c', light: '#f1e4c6', dark: '#9a7433' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Mrs Saint Delafield"', 'cursive'],
      },
    },
  },
  plugins: [],
}
