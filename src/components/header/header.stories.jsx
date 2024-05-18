import parse from 'html-react-parser';
import template from './header.twig';
import './header';

const component = {
  title: 'Components/Header',
  render: (args) => parse(template(args)),
  args: {},
};

export const TitleElement = {
  name: 'Header',
};

export default component;
