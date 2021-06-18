import React from 'react'
import { ThemeProvider, ThemeContext, createGlobalStyle } from 'styled-components'

export interface Theme {
  global?: any
  buttons?: any
  input?: any
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
    bodyColor: '#0D1117',
  },
  buttons: {
    colors: {
      primaryBorder: '#64FFDA',
      primaryBg: '#3F9B85',
      primaryColor: '#EEEEEE',
      primaryBorderActive: '#14aa87',
      primaryBgActive: '#317669',
      primaryColorActive: '#cecece',
      primaryBorderHover: '#17FFC7',
      primaryBgHover: '#44AA94',
      primaryColorHover: '#ffffff',

      secondaryBorder: '#EEEEEE',
      secondaryBg: 'transparent',
      secondaryColor: '#EEEEEE',
      secondaryBorderActive: '#cecece',
      secondaryBgActive: 'transparent',
      secondaryColorActive: '#cecece',
      secondaryBorderHover: '#ffffff',
      secondaryBgHover: '#2D2E31',
      secondaryColorHover: '#ffffff',

      invertedBorder: '#64FFDA',
      invertedBg: 'transparent',
      invertedColor: '#64FFDA',
      invertedBorderActive: '#57D3B6',
      invertedBgActive: 'transparent',
      invertedColorActive: '#57D3B6',
      invertedBorderHover: '#64FFDA',
      invertedBgHover: '#283335',
      invertedColorHover: '#64FFDA',

      dangerBorder: '#F83B68',
      dangerBg: '#8C2540',
      dangerColor: '#EEEEEE',
      dangerBorderActive: '#b9294b',
      dangerBgActive: '#712036',
      dangerColorActive: '#cecece',
      dangerBorderHover: '#F83B68',
      dangerBgHover: '#A42A49',
      dangerColorHover: '#ffffff',

      customBorder: '#3b87f8',
      customBg: '#255a8c',
      customColor: '#EEEEEE',
      customBorderActive: '#296cb9',
      customBgActive: '#205371',
      customColorActive: '#cecece',
      customBorderHover: '#3bb3f8',
      customBgHover: '#2a69a4',
      customColorHover: '#ffffff',
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
      large: '32px',
      largeIcon: '24px',
      small: '24px',
      smallIcon: '16px',
    },
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
      tag: '0 0 12px 0',
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
