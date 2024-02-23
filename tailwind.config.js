/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,css}"],
  theme: {
    extend: {
      colors:{
        primary:"#1B1B1B",
        secondary:"#08FF09",
        tertiary:"#FCCB00",
        quaternary:"#7B66FF"
      },
      fontFamily:{
        'sans':"BigBlueTerm Nerd Font"
      }
    },
  },
  plugins: [],
}

