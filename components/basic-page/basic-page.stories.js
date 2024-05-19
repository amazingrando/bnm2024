import template from './basic-page.twig';
import data from './basic-page.yml';
import '../header/header';

const component = {
  title: 'Pages/Basic Page',
  render: (args) => template(args),
  args: { ...data },
};

export const TitleElement = {
  name: 'Basic Page',
};

export default component;
