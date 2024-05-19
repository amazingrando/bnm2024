import template from './button.twig';
import data from './button.yml';

const component = {
  title: 'Components/Button',
  render: (args) => template(args),
  args: { ...data },
};

export const TitleElement = {
  name: 'Button',
};

export default component;