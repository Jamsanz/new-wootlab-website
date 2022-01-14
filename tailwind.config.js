module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily:{
      'urbanist': ['Urbanist', 'sans-serif']
    },
    extend: {
      space:{
        'auto': 'auto'
      },
      height:{
        '100': '100rem'
      }
    },
  },
  plugins: [],
}
