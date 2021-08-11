const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'ultra': ['17.5rem', '18rem'],
    },
    scale: {
      '25': '.25',
      '40': '.40',
      '33': '.33',
      '45': '.45',
      '60': '.60',
    },
    backgroundColor: theme => ({
      'primary': '#1D1E26',
    }),
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        redhatdisplay: ['RedHatDisplay'],
        montserrat: ['Montserrat'],
        roboto: ['Roboto'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
