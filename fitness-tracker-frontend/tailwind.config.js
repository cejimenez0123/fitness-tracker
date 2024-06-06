/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        'charcoal': '#364156',
        'richBlack': '#11151C',
        'PrussianBlue': '#212D40',
        'persianRed': '#BB4430',
      },
    },
  },
  plugins: [require('daisyui')],
}

