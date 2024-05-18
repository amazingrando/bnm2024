import parse from 'html-react-parser';

import template from './typography.twig';

const component = {
  title: 'Components/Typography',
  render: (args) => parse(template(args)),
  args: {},
};

export const TitleElement = {
  name: 'Typography',
};

export default component;