import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../../theme'

export interface ButtonStyleProps {
  variant: 'primary' | 'secondary' | 'inverted' | 'danger' | string
  size?: 'large' | 'small'
  borderColor?: string
  disabled?: boolean
  block?: boolean
  width?: string
  borderRadius?: string
  letterSpacing?: string
  disabledOpacity?: string
  borderless?: boolean
  iconSpacing?: number
}
export interface ButtonProps extends ButtonStyleProps {
  className?: string
  children: React.ReactNode
  icon?: { item: any; position: 'left' | 'right' }
  onClick?: () => void
  props?: any
}

export const ButtonStyled = styled.button(
  ({
    theme: {
      buttons: { paddings, heights, colors },
    },
    variant,
    size,
    dataIcon,
    dataIconPos,
    disabled,
    block,
    width,
    borderRadius,
    disabledOpacity,
    borderless,
  }: ButtonStyleProps & {
    theme: Theme
    dataIcon: boolean
    dataIconPos: undefined | 'left' | 'right'
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    appearance: none;
    user-select: none;

    ${width ? `width: ${width};` : null}
    ${block ? 'width: 100%;' : null}
    flex-direction: ${dataIconPos === 'left' ? 'row' : 'row-reverse'};
    background-color: ${colors[`${variant}Bg`]};
    border: 1px solid ${borderless ? colors[`${variant}Bg`] : colors[`${variant}Border`]};
    color: ${colors[`${variant}Color`]};
    min-height: ${`${heights[`${size}`]}px`};
    padding: ${paddings[`${size}${dataIcon ? 'Icon' : ''}`]};
    border-radius: ${borderRadius || '5px'};

    &:hover {
      background-color: ${colors[`${variant}BgHover`]};
      border: 1px solid
        ${borderless ? colors[`${variant}BgHover`] : colors[`${variant}BorderHover`]};
      color: ${colors[`${variant}ColorHover`]};
      & svg {
        color: ${colors[`${variant}ColorHover`]} !important;
      }
      transition: 0.1s;
      transition-property: background-color, border, color;
    }

    &:active {
      background-color: ${colors[`${variant}BgActive`]};
      border: 1px solid
        ${borderless ? colors[`${variant}BgActive`] : colors[`${variant}BorderActive`]};
      color: ${colors[`${variant}ColorActive`]};
      & svg {
        color: ${colors[`${variant}ColorActive`]} !important;
      }
      transition: 0.1s;
      transition-property: background-color, border, color;
    }

    ${disabled &&
    css`
      opacity: ${disabledOpacity || '0.5'};
    `}
  `
)

export const ButtonText = styled.span(
  ({
    theme: {
      buttons: { fontSizes, fontWeights },
      global,
    },
    size,
    letterSpacing,
  }: {
    theme: Theme
    letterSpacing: ButtonStyleProps['letterSpacing']
    size: ButtonStyleProps['size']
  }) => css`
    direction: rtl;
    display: inline-block;
    white-space: no-wrap;
    vertical-align: middle;

    letter-spacing: ${letterSpacing || '0.05em'};
    text-indent: ${`-${letterSpacing}` || '-0.05em'};
    font-family: ${global.fontFamily};
    font-size: ${`${fontSizes[`${size}`]}px`};
    line-height: ${`${fontSizes[`${size}`]}px`};
    font-weight: ${fontWeights[`${size}`]};
    color: inherit;
  `
)

export const IconWrapper = styled.span(
  ({
    dataIconPos,
    iconSpacing,
  }: {
    dataIconPos: undefined | 'left' | 'right'
    iconSpacing: ButtonStyleProps['iconSpacing']
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    ${dataIconPos === 'left'
      ? `margin-right: ${iconSpacing || 6}px;`
      : `margin-left: ${iconSpacing || 6}px;`}
  `
)
