/** @type {import('tailwindcss').Config} */

const colorTokens = require('./src-old/tokens/colors.json');
// const fontSizeTokens = require('./src/tokens/typography.json');

const createTailwindPreset = (tokens) => ({
  theme: {
    extend: {
      colors: {
        ...tokens,
      },
    },
  },
});

const preset = createTailwindPreset(colorTokens);

module.exports = {
  content: ['./src/components/**/*.{html,js,twig}'],
  presets: [preset],
  theme: {
    extend: {},
  },
  plugins: [],
};
