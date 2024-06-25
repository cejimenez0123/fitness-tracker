/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      fontFamily: {
        'merriweather-sans': ['Merriweather Sans', 'sans-serif'],
      },
      colors: {
        'charcoal': '#364156',
        'richBlack': '#11151C',
        'PrussianBlue': '#212D40',
        'persianRed': '#BB4430',
        back:"#f4f3f2",
        fore:"#48676C"
      },
    },
  },
  plugins: [require('daisyui')
  
  ],
  
  daisyui: {
themes: ["cupcake",   "dracula", "dark", "cmyk"],
   
  },
  
}

