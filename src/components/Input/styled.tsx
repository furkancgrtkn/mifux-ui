import styled, { css } from 'styled-components'
import { Theme } from '../../theme'

export interface InputStyleProps {
  width?: string
  block?: boolean
  borderless?: boolean
}

export interface InputProps extends InputStyleProps {
  className?: string
  warning?: boolean
  icon?: { item: any; position: 'left' | 'right'; area?: boolean }
  subText?: string
  tag?: { name: string; description?: string }
  placeholder?: string
  onChange?: (e: any) => void
  value?: string
  props?: any
}

const handleWidth = (width: InputProps['width'], block: InputProps['block']) => {
  if (block) {
    return '100%'
  }
  if (typeof width === 'string') {
    return width
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
  ({ width, block }: InputProps) => css`
    width: ${handleWidth(width, block)};
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
      ${!icon?.area &&
      (icon?.position === 'left'
        ? css`
            padding-left: 0;
          `
        : css`
            padding-right: 0;
          `)}
      font-size: ${fontSizes.input}px;
      letter-spacing: 0.025em;
      caret-color: ${handleCaretColor(warning, colors)};
      font-family: ${fontFamily};
      font-weight: ${fontWeights.regular};
      :placeholder {
        color: ${colors.placeholder};
      }
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
      input: { colors, paddings },
    },
    warning,
    focus,
    icon,
  }: InputProps & {
    theme: Theme
    focus?: boolean
  }) => css`
    color: ${handleBorderColor(warning, colors, focus)};
    padding: ${paddings.input};
    color: ${handleBorderColor(warning, colors, focus)};
    display: flex;
    align-items: center;
    justify-content: center;
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
    `};
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
