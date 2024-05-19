import template from './basic-page.twig';

const component = {
  title: 'Pages/Basic Page',
  render: (args) => template(args),
  args: {},
};

export const TitleElement = {
  name: 'Basic Page',
};

export default component;
