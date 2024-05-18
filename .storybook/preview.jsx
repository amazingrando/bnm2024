/** @type { import('@storybook/react').Preview } */
import Twig from 'twig';
import drupalFilters from 'twig-drupal-filters';
import './_drupal.js';
import '../src/stylesheets/styles.css';
import React from 'react';
import { useEffect } from 'react';

function setupFilters(twig) {
  twig.cache();
  drupalFilters(twig);
  return twig;
}

setupFilters(Twig);

const preview = {
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            padding: '0',
            height: '100vh',
          }}
        >
          <Story />
        </div>
      );
    },
    (storyFn) => {
      useEffect(() => Drupal.attachBehaviors(), []);
      return storyFn();
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen'
  },
};


export default preview;