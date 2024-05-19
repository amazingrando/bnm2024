import template from './login.twig';
import data from './login.yml';
import '../header/header';

const component = {
  title: 'Pages/Login Page',
  render: (args) => template(args),
  args: { ...data },
  decorators: [(story) => `<div style="height: 100vh;">${story()}</div>`],
};

export const TitleElement = {
  name: 'Login Page',
};

export default component;
