import React from 'react';
import { CacheProvider } from '@emotion/react';
import GlobalStyles from '../src/styles/GlobalStyles';
import createCache from '@emotion/cache';
import { Preview } from '@storybook/react';
// import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import '@/styles/globals.css';

// const cache = createCache({ prepend: true, key: 'twin' });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },

  controls: {
    controls: { expanded: true },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'white',
          value: '#FFFFFF',
        },
        {
          name: 'light',
          value: '#F4F6FA',
        },
        {
          name: 'dark',
          value: '#444',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
