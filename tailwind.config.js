/** @type {import('tailwindcss').Config} */

const colorTokens = require('./dist/tokens/colors.tailwind.js');
// const fontSizeTokens = require('./src/tokens/typography.json');

const createTailwindPreset = (tokens) => ({
  theme: {
    extend: {
      colors: {
        ...tokens.color,
      },
    },
  },
});

const preset = createTailwindPreset(colorTokens);

export default {
  content: ["./src/**/*.{html,js,twig}"],
  theme: {
    extend: {
      colors: {
        ...colorTokens,
      },
    },
  },
  plugins: [],
}

