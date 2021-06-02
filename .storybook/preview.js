import { defaultTheme } from '../src/theme'
import { GlobalStyles } from '../src/theme'
import { addDecorator } from '@storybook/react'
import { withThemesProvider, DEFAULT_SETTINGS } from 'themeprovider-storybook'
import { ThemeProvider } from 'styled-components'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#0D1117',
      },
    ],
  },
}

const themes = [defaultTheme]
addDecorator(withThemesProvider(themes, DEFAULT_SETTINGS, ThemeProvider))

addDecorator((Story) => (
  <>
    <GlobalStyles />
    <Story />
  </>
))
