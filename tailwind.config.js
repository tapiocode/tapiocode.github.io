/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'footer': 'auto 1fr auto',
        'projects': 'auto auto 1fr auto',
      }
    },
  },
  plugins: [],
}

