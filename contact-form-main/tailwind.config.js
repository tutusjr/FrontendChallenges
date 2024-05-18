/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'background-color': 'var(--background-color)',
        'accent-color': 'var(--accent-color)',
        'error-color': 'var(--error-color)',
        'success-color': 'var(--success-color)',
        'medium-gray-color': 'var(--medium-gray-color)',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
      }
    },
  },
  plugins: [],
}