/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xl2: '1360px',
    },
    colors: {
      darkNavy: '#192735',
      midNavy: '#233340',
      lightNavy: '#2F4658',
      sky: '#3D6374',

      lightIvory: '#F1EDDA',
      midIvory: '#E8E1C1',
      darkIvory: '#392F31',
      greyBeige: '#C4BEA3',
      lighttext: '#392F31',
      pointGreen: '#327559',

      white: '#FFF',
      black: '#000',
    },
    extend: {
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
      },
    },
  },
  variants: {},

  plugins: [],
  // require('@tailwindcss/forms')
};
