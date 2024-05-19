import template from './footer.twig';

const component = {
  title: 'Components/Footer',
  render: (args) => template(args),
  args: {},
};

export const TitleElement = {
  name: 'Footer',
};

export default component;
