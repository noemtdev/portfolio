module.exports = {
  content: ['./src/**/*.js', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'text': '#f5f5f5',
        'background': '#101010',
        'primary': '#7158e2',
        'secondary': '#424242',
        'accent': '#61c0bf',
      },
    },
  },
  variants: {},
  plugins: [],
};