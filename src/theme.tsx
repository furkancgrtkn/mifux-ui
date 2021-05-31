/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useContext } from 'react'
import {
	ThemeProvider,
	ThemeContext,
	createGlobalStyle,
} from 'styled-components'

export interface Theme {
	colors?: any
}

export const GlobalStyles = createGlobalStyle`
  body{
    min-height: 100vh;
  }

  *, *:before, *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const theme: Theme = {
	colors: {
		red: '#ff241b',
	},
}

export const MifuxUIProvider = ({ children }: { children: ReactNode }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		{children}
	</ThemeProvider>
)

export const useTheme = () => useContext(ThemeContext) || {}
