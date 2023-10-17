import type { StorybookConfig } from '@storybook/nextjs';

const path = require('path');

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  babel: async (config) => ({
    ...config,
    presets: [['next/babel']],
    plugins: [
      'babel-plugin-macros',
      [
        '@emotion/babel-plugin-jsx-pragmatic',
        {
          export: 'jsx',
          import: '__cssprop',
          module: '@emotion/react',
        },
      ],
      [
        '@babel/plugin-transform-react-jsx',
        {
          pragma: '__cssprop',
        },
        'emotion-css-prop',
      ],
    ],
  }),
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }

    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      if (!test) {
        return false;
      }

      return test.test('.svg');
    }) as { [key: string]: any };

    imageRule.exclude = /\.svg$/;

    config.module?.rules?.push(
      ...[
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
          use: {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeViewBox',
                    active: false,
                  },
                ],
              },
            },
          },
        },
      ],
    );

    return config;
  },
};

export default config;
