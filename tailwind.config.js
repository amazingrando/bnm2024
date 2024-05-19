/** @type {import('tailwindcss').Config} */

import colorTokens from './tokens/colors.tailwind';
import fontSizeTokens from './tokens/fontSize.tailwind';

export default {
  content: ['./components/**/*.{html,js,twig}'],
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
