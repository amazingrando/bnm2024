/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/components/**/*.mdx",
  "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  previewBody: (body) => `
    <script>
    window.Drupal = window.Drupal || {behaviors: {}};
    window.drupalSettings = Object.assign(window.drupalSettings || {}, {
      // Mock any drupalSettings your behaviors need here.
    });
    // Mock Drupal's once library too.
    window.once = (_, selector) => document.querySelectorAll(selector);
    document.addEventListener('DOMContentLoaded', () => {
      Object.entries(window.Drupal.behaviors).forEach(([key, object]) => object.attach(document));
    })
  </script>
  ${body}
  `
};
export default config;
