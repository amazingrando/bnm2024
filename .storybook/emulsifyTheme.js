// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Branding
  brandTitle: 'Bits and Mortar',
  brandUrl: 'https://bits-and-mortar.com',
  brandImage:
    'https://raw.githubusercontent.com/amazingrando/bnm2024/main/assets/images/bnm-logo.png',
});
