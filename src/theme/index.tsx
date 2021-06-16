import React from 'react'
import { ThemeProvider, ThemeContext, createGlobalStyle } from 'styled-components'

export interface Theme {
  colors?: any
  input?: any
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
  input: {
    colors: {
      default: '#EEEEEE',
      warning: '#F83B68',
      focus: '#64FFDA',
      iconArea: 'rgba(139, 139, 139, 0.1)',
      defaultbackground: '#24262a',
      borderlessBackground: '#393b3f',
    },
    fontSizes: {
      input: 14,
      caption: 14,
      tag: 12,
    },
    paddings: {
      caption: '8px 14px',
      tag: '12px 0',
      input: '12px 14px',
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
