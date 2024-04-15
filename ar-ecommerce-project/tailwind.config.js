/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'purple-layer': "url('../src/components/images/background.jpg)",
      }
    },
  },
  plugins: [],
}

