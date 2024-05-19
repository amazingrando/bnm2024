import template from './publishers.twig';
import data from './publishers.yml';
import '../header/header';

const component = {
  title: 'Pages/Publishers Page',
  render: (args) => template(args),
  args: { ...data },
};

export const TitleElement = {
  name: 'Publishers Page',
};

export default component;
