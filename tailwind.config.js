/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        fontFamily: {
          'teko': ['Teko', 'sans-serif'],
          'text-me-one': ['Text Me One', 'sans-serif']
        }
      },
    },
  plugins: [],
}
