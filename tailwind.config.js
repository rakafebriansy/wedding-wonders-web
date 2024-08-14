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
        'manropeRegular': 'Manrope-Regular',
        'playfairDisplayRegular': 'PlayfairDisplay-Regular',
        'playfairDisplaySemiBold': 'PlayfairDisplay-SemiBold',
        'playfairDisplayBold': 'PlayfairDisplay-Bold',
        'oxygenMonoRegular': 'OxygenMono-Regular',
        'poppinsRegular': 'Poppins-Regular',
        'parisienneRegular': 'Parisienne-Regular',
        'appleChancery': 'Apple-Chancery',
      }
    },
  },
  plugins: [],
}