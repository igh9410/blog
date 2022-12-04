/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};
