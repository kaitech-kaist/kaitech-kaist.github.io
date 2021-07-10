const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      '25' : '.25',
      '40' : '.40',
      '33' : '.33',
      '45' : '.45',
      '60' : '.60',
    },

    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        redhatdisplay: ['RedHatDisplay'],
        montserrat : ['Montserrat'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
