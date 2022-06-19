/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'pl': '#d5e2ae', //primary light
      'sl': '#B0A7A4', //secondary light
      'sd': '#5D5229', //secondary dark
      'tp': '#212121', //text primary
      'light': '#f8f5f1', //light
      'td': '#9E9E9E', //text disabled
      'pd': '#424242', //paper dark
      'black': '#303030', //default dark
      'white': '#FFFFFF', //white
    },
    extend: {},
  },
  plugins: [],
}
