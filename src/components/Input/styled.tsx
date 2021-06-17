import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../../theme'

export interface InputProps {
  className?: string
  width?: 'block' | number
  warning?: boolean
  icon?: { item: React.ReactNode; position: 'left' | 'right'; area?: boolean }
  subText?: string
  tag?: { name: string; description?: string }
  borderless?: boolean
  placeholder?: string
  onChange?: (e: any) => void
  value?: string
}

const handleWidth = (width: InputProps['width']) => {
  if (width === 'block') {
    return '100%'
  }
  if (typeof width === 'number') {
    return `${width}px`
  }
  return null
}

const handleBorderColor = (
  warning: InputProps['warning'],
  colors: Theme['input']['colors'],
  focus?: boolean
) => {
  if (warning) {
    return colors.warning
  }
  if (focus) {
    return colors.focus
  }

  return colors.default
}

const handleFontColor = (warning: InputProps['warning'], colors: Theme['input']['colors']) => {
  if (warning) {
    return colors.warning
  }
  return colors.default
}

const handleCaretColor = (warning: InputProps['warning'], colors: Theme['input']['colors']) => {
  if (warning) {
    return colors.warning
  }
  return colors.focus
}

export const Wrapper = styled.div(
  ({ width }: InputProps) => css`
    width: ${handleWidth(width)};
  `
)

export const InputStyled = styled.div(
  ({
    theme: {
      global: { fontFamily },
      input: { colors, fontSizes, fontWeights, paddings },
    },
    warning,
    icon,
    borderless,
    focus,
  }: InputProps & {
    theme: Theme
    focus?: boolean
  }) => css`
    input {
      border: none;
      background: none;
      width: 100%;
      color: ${handleFontColor(warning, colors)};
      outline: none;
      padding: ${paddings.input};
      font-size: ${fontSizes.input}px;
      letter-spacing: 0.025em;
      caret-color: ${handleCaretColor(warning, colors)};
      font-family: ${fontFamily};
      font-weight: ${fontWeights.regular};
      :placeholder {
        color: ${colors.placeholder};
      }
    }
    & > div {
      padding: ${paddings.input};
      color: ${handleBorderColor(warning, colors, focus)};
      ${icon?.area &&
      css`
        background-color: ${colors.iconArea};
        ${icon.position === 'left'
          ? css`
              border-right: 1px solid;
            `
          : css`
              border-left: 1px solid;
            `}
        border-color: ${handleBorderColor(warning, colors, focus)};
        display: flex;
        align-items: center;
        justify-content: center;
      `};
    }
    display: flex;
    flex-direction: ${icon?.position === 'left' ? 'row-reverse' : 'row'};
    color: ${handleFontColor(warning, colors)};
    border-radius: 5px;
    width: 100%;
    ${borderless
      ? css`
          background-color: ${colors.borderlessBackground};
        `
      : css`
          background-color: ${colors.defaultBackground};
          border: 1px solid;
          border-color: ${handleBorderColor(warning, colors, focus)};
        `}
  `
)

export const IconWrapper = styled.div(
  ({
    theme: {
      input: { colors },
    },
    warning,
    focus,
  }: InputProps & {
    theme: Theme
    focus?: boolean
  }) => css`
    color: ${handleBorderColor(warning, colors, focus)};
  `
)

export const Caption = styled.p(
  ({
    theme: {
      global: { fontFamily },
      input: { colors, fontSizes, fontWeights, paddings },
    },
    warning,
  }: InputProps & {
    theme: Theme
  }) => css`
    color: ${handleFontColor(warning, colors)};
    font-size: ${fontSizes.caption}px;
    letter-spacing: 0.025em;
    padding: ${paddings.caption};
    font-family: ${fontFamily};
    font-weight: ${fontWeights.regular};
  `
)

export const Tag = styled.div(
  ({
    theme: {
      global: { fontFamily },
      input: { colors, fontSizes, fontWeights, paddings },
    },
    warning,
  }: InputProps & {
    theme: Theme
  }) => css`
    color: ${handleFontColor(warning, colors)};
    font-size: ${fontSizes.tag}px;
    letter-spacing: 0.025em;
    padding: ${paddings.tag};
    font-family: ${fontFamily};
    font-weight: ${fontWeights.regular};
  `
)
