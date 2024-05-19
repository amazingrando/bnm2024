import template from './typography.twig';

const component = {
  title: 'Components/Typography',
  render: (args) => template(args),
  args: {},
  decorators: [
    (story) =>
      `<div style="max-width: 750px; margin: 3rem auto;">${story()}</div>`,
  ],
};

export const TitleElement = {
  name: 'Typography',
};

export default component;
