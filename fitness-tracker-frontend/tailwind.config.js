/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
<<<<<<< HEAD
    extend: { colors:{
      back:"#f4f3f2",
      fore:"#48676C"
    }},
=======
    extend: {
      colors: {
        'charcoal': '#364156',
        'richBlack': '#11151C',
        'PrussianBlue': '#212D40',
        'persianRed': '#BB4430',
      },
    },
>>>>>>> 3e17f42d98437f2dc4626c293d5bd43c19d3ca3a
  },
  plugins: [require('daisyui')],
}

