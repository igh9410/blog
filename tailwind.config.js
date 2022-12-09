/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx,json}',
    './components/**/*.{html,js,jsx,ts,tsx,json}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
