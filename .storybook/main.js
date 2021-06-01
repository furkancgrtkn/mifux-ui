module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	typescript: {
		reactDocgen: 'react-docgen',
	},
	addons: [
		{
			name: '@storybook/addon-docs',
			options: {
				configureJSX: true,
			},
		},
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
		'@storybook/addon-backgrounds',
		'@storybook/addon-controls',
		'@storybook/addon-essentials',
		'@storybook/addon-actions',
		'@storybook/theming',
		'themeprovider-storybook/register',
	],
}
