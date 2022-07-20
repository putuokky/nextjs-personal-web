/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem', /* 16px */
    },
    colors: {
      'light': '#ffffff99',
    },
    extend: {},
  },
  plugins: [],
}
