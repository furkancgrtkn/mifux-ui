module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	typescript: {
		reactDocgen: 'react-docgen',
	},
	addons: [
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
		'@storybook/addon-essentials',
		'@storybook/theming',
		'themeprovider-storybook/register',
	],
}
