/** @type {import('tailwindcss').Config} */

import colorTokens from './src/tokens/colors.tailwind.js';
import fontSizeTokens from './src/tokens/fontSize.tailwind.js';

export default {
  content: ['./src/**/*.{html,js,twig}'],
  theme: {
    extend: {
      colors: {
        ...colorTokens,
      },
      fontSize: {
        ...fontSizeTokens,
      },
      fontFamily: {
        sans: ['Merriweather Sans'],
        serif: ['Merriweather'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.red.1000'),
            a: {
              color: theme('colors.link'),
              // '&:hover': {
              //   color: '#2c5282',
              // },
            },
          },
        },
      }),
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography')],
};
