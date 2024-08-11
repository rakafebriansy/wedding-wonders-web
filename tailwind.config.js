/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,mjs}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'manropeBold': 'Manrope-Bold',
        'manropeSemiBold': 'Manrope-SemiBold',
        'manropeLight': 'Manrope-Light',
        'manropeRegular': 'Manrope-Regular',
        'playfairDisplayRegular': 'PlayfairDisplay-Regular',
        'playfairDisplaySemiBold': 'PlayfairDisplay-SemiBold',
        'playfairDisplayBold': 'PlayfairDisplay-Bold',
      }
    },
  },
  plugins: [],
}