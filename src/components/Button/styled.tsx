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
}
export interface ButtonProps extends ButtonStyleProps {
  className?: string
  children: React.ReactNode
  icon?: { item: React.ReactNode; position: 'left' | 'right' }
  onClick?: () => void
  props?: any
}

export const ButtonStyled = styled.button(
  ({
    theme: {
      buttons: { paddings, fontSizes, fontWeights, heights, colors },
      global,
    },
    variant,
    size,
    dataIcon,
    dataIconPos,
    disabled,
    block,
    width,
    borderRadius,
    letterSpacing,
    disabledOpacity,
  }: ButtonStyleProps & {
    theme: Theme
    dataIcon: boolean
    dataIconPos: undefined | 'left' | 'right'
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: no-wrap;
    cursor: pointer;
    position: relative;

    ${width ? `width: ${width};` : null}
    ${block ? 'width: 100%;' : null}
    flex-direction: ${dataIconPos === 'left' ? 'row' : 'row-reverse'};
    background-color: ${colors[`${variant}Bg`]};
    border: 1px solid ${colors[`${variant}Border`]};
    color: ${colors[`${variant}Color`]};
    min-height: ${`${heights[`${size}`]}px`};
    padding: ${paddings[`${size}${dataIcon ? 'Icon' : ''}`]};
    border-radius: ${borderRadius || '5px'};
    font-family: ${global.fontFamily};
    font-size: ${`${fontSizes[`${size}`]}px`};
    line-height: ${`${fontSizes[`${size}`]}px`};
    font-weight: ${fontWeights[`${size}`]};
    letter-spacing: ${letterSpacing || '0.05em'};
    &:hover {
      background-color: ${colors[`${variant}BgHover`]};
      border: 1px solid ${colors[`${variant}BorderHover`]};
      color: ${colors[`${variant}ColorHover`]};
      & svg {
        color: ${colors[`${variant}ColorHover`]} !important;
      }
      transition: 0.1s;
      transition-property: background-color, border, color;
    }

    &:active {
      background-color: ${colors[`${variant}BgActive`]};
      border: 1px solid ${colors[`${variant}BorderActive`]};
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

export const IconWrapper = styled.span(
  ({ dataIconPos }: { dataIconPos: undefined | 'left' | 'right' }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    ${dataIconPos === 'left' ? ' margin-right: 6px;' : 'margin-left: 6px;'}
  `
)
