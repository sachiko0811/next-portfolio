const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans Condensed', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: {
          dark: '#111827',
        },
        blue: {
          light: '#60A5FA',
        },
        icons: {
          react: '#61dbfb',
          html5: '#E44D26',
          css3: '#3573B5',
          sass: '#cd6799',
          js: '#f0d64f',
          wp: '#00669e',
          git: '#f1502f',        },
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [require('./node_modules/tailwind-hamburgers')],
}
