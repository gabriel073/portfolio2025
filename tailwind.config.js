/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Silkscreen', 'sans-serif'],

    },
    extend: {
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.2)',
        'lg': '4px 4px 6px rgba(0, 0, 0, 0.2)',
        'none': 'none',
      }
    },
  },
  plugins: [

  ],
}

