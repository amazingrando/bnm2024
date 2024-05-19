import template from './home.twig';
import data from './home.yml';
import '../header/header';

const component = {
  title: 'Pages/Home Page',
  render: (args) => template(args),
  args: { ...data },
};

export const TitleElement = {
  name: 'Home Page',
};

export default component;
