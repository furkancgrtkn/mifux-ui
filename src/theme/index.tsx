import React from 'react'
import { ThemeProvider, ThemeContext, createGlobalStyle } from 'styled-components'

export interface Theme {
  colors?: any
  global?: any
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
  global: {
    fontFamily: "'Raleway', sans-serif",
    bodyColor: '#0D1117',
  },
  input: {
    colors: {
      default: '#FFFFFF',
      placeholder: '#EEEEEE',
      warning: '#F83B68',
      focus: '#64FFDA',
      iconArea: 'rgba(139, 139, 139, 0.1)',
      defaultbackground: '#24262a',
      borderlessBackground: '#393b3f',
    },
    fontSizes: {
      input: 14,
      caption: 12,
      tag: 14,
    },
    fontWeights: {
      regular: 400,
      semiBold: 600,
      bold: 800,
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
