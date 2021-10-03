// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        primary: {
          light: '#1cb49c',
          DEFAULT: '#158876'
        }
      },
      fontFamily: {
        lato: [
          'Lato'
        ]
      }
    },
  },
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
