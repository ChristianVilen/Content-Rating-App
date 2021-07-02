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
      primary: '#222831',
      secondary: '#393E46',
      turq: {
        light: '#b3f1f5',
        default: '#00ADB5',
        dark: 'rgba(0,173,181,0.38)',
      },
      background: '#EEEEEE',
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
