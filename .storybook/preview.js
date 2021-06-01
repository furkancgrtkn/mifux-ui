import { theme } from '../src/theme/theme'
import { GlobalStyles } from '../src/theme/theme'
import { addDecorator } from '@storybook/react'
import { withThemesProvider, DEFAULT_SETTINGS } from 'themeprovider-storybook'
import { ThemeProvider } from 'styled-components'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	viewMode: 'docs',
}

const themes = [theme]
addDecorator(withThemesProvider(themes, DEFAULT_SETTINGS, ThemeProvider))

addDecorator(Story => (
	<>
		<GlobalStyles />
		<Story />
	</>
))
