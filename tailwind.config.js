module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        402: '402px',
      },
      height: {
        469: '469px',
        220: '220px',
      },
    },
    fontFamily: {
      Poppins: ['Poppins'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
