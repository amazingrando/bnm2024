import template from './typography.twig';

const component = {
  title: 'Components/Typography',
  render: (args) => template(args),
  args: {},
};

export const TitleElement = {
  name: 'Typography',
};

export default component;
