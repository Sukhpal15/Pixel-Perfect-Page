/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

    module.exports = {
      content: ["*"],
    theme: {
      fontFamily: {
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1436px',
    },
    extend: {
      fontFamily: {
      'jost': ['Jost'],
      },

    maxHeight: {
      '98': '42.5rem',
      },
    },
  },
    plugins: [],
}