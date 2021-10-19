// const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  important: true,
  purge: ['./public/**/*.html'],
  theme: {
    extend: {
      // fontFamily: {
      // 	sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        neutral: '#151515',
        primary: '#24BECA',
        secondary: '#E11D65',
        tertiary: '#976695',
        info: '#0074FF',
        success: '#008D15',
        error: '#E51D2F',
        gray: {
          light: '#F7FEFF',
          DEFAULT: '#E6F4F4',
          dark: '#180F12',
        },
        'gray-medium': '#7F7E7E',
        'gray-medDark': '#4E4D4D'
      },
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '4rem',
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    }
  },
  plugins: [],
};