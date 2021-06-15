import React from 'react'
import { ThemeProvider, ThemeContext, createGlobalStyle } from 'styled-components'

export interface Theme {
  global?: any
  buttons?: any
}

export const GlobalStyles = createGlobalStyle`


  *, *:before, *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const defaultTheme: Theme = {
  global: {
    fontFamily: "'Raleway', sans-serif",
  },
  buttons: {
    colors: {
      primaryBorder: '#64FFDA',
      primaryBg: '#3F9B85',
      primaryColor: '#EEEEEE',

      secondaryBorder: '#EEEEEE',
      secondaryBg: 'transparent',
      secondaryColor: '#EEEEEE',

      invertedBorder: '#64FFDA',
      invertedBg: 'transparent',
      invertedColor: '#64FFDA',

      dangerBorder: '#F83B68',
      dangerBg: '#8C2540',
      dangerColor: '#EEEEEE',
    },
    fontSizes: {
      large: 14,
      small: 12,
    },
    fontWeights: {
      large: 500,
      small: 500,
    },
    heights: {
      large: 40,
      small: 32,
    },
    paddings: {
      large: '8px 32px',
      largeIcon: '8px 24px',
      small: '8px 24px',
      smallIcon: '8px 16px',
    },
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
