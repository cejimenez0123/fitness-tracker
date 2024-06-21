/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {

    extend: {
      screens:{
        ml:"950px"
      },
      colors: {
      
      back:"#f4f3f2",
      fore:"#48676C",

        'charcoal': '#364156',
        'richBlack': '#11151C',
        'PrussianBlue': '#212D40',
        'persianRed': '#BB4430',
      },
    },

  },
  plugins: [require('daisyui')],
}

