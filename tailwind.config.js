
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        'mobile': '320px',
        'tablet': '640px',
        'laptop': '1024px',
        '480px': '480px',
      }
    },
  },
  plugins: [],
}