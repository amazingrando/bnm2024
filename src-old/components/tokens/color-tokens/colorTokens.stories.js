import template from './color-tokens.twig';

import tokens from '../../../tokens/colors.json';

const data = tokens;

export default {
  title: 'Tokens/Colors',
};

export const Colors = () => template(data);
