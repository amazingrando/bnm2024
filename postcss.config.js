const autoPrefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [tailwindcss(), autoPrefixer()],
};
