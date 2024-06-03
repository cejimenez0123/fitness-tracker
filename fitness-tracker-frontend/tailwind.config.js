/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: { colors:{
      back:"#f4f3f2",
      fore:"#48676C"
    }},
  },
  plugins: [require('daisyui')],
}

