import React from 'react'
import { ThemeProvider, ThemeContext, createGlobalStyle } from 'styled-components'

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

export const defaultTheme: Theme = {
  colors: {
    primaryBtnBorder: '#64FFDA',
    primaryBtnBg: '#3F9B85',
    primaryBtnColor: '#ffffff',
  },
}

export const MifuxUIProvider = ({
  children,
  theme = defaultTheme,
}: {
  children: React.ReactNode
  theme?: Theme
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export const useTheme = () => React.useContext(ThemeContext) || {}
