const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      white: colors.white,
      red: colors.rose,
      pink: colors.fuchsia,
      primary: {
        light: '#3867a7',
        default: '#294b7a',
        dark: '#1d3557',
      },
      secondary: {
        light: '#48cae4',
        default: '#00b4d8',
        dark: '#0096c7',
      },
    },
    fontFamily: {
      sans: [
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      serif: ['Merriweather', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
