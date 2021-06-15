import React from 'react'
import styled from 'styled-components'
import { Theme } from '../../theme'

export interface ButtonStyleProps {
  variant: 'primary' | 'secondary' | 'inverted' | 'danger'
  size?: 'large' | 'small'
  bg?: string
  color?: string
  borderColor?: string
}
export interface ButtonProps extends ButtonStyleProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
  icon?: React.ReactNode
}

export const ButtonStyled = styled.button<ButtonStyleProps & { theme: Theme; dataIcon: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => `${props.theme.buttons.heights[`${props.size}`]}px`};
  white-space: no-wrap;
  padding: ${(props) =>
    props.theme.buttons.paddings[`${props.size}${props.dataIcon ? 'Icon' : ''}`]};
  color: ${(props) => props.theme.buttons.colors[`${props.variant}Color`]};
  background-color: ${(props) => props.theme.buttons.colors[`${props.variant}Bg`]};
  border: 1px solid ${(props) => props.theme.buttons.colors[`${props.variant}Border`]};
  border-radius: 5px;
  font-family: ${(props) => props.theme.global.fontFamily};
  font-size: ${(props) => `${props.theme.buttons.fontSizes[`${props.size}`]}px`};
  font-weight: ${(props) => props.theme.buttons.fontWeights[`${props.size}`]};
  letter-spacing: 0.025em;
  cursor: pointer;
`

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`
