module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    typescript: {
      reactDocgen: 'react-docgen',
    },
    addons: [
      '@storybook/addon-backgrounds',
      '@storybook/addon-controls',
      '@storybook/addon-essentials',
      '@storybook/addon-actions',
      '@storybook/theming',
      'themeprovider-storybook/register',
    ],
};
