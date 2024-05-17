import parse from 'html-react-parser';

import template from './button.twig';
import data from './button.yml';

const component = {
  title: 'Components/Button',
  render: (args) => parse(template(args)),
  args: { ...data },
};

export const TitleElement = {
  name: 'Button',
};

export default component;