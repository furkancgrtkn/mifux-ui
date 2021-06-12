import React from 'react'
import styled from 'styled-components'
import { Theme } from '../../theme'

export interface ButtonProps {
  className?: string
  children?: React.ReactNode
  primary?: boolean
  onClick?: () => void
  bg?: string
  color?: string
}

export const ButtonStyled = styled.button<ButtonProps & { theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  white-space: no-wrap;
  padding: 8px 32px;
  color: ${(props) => props.theme.colors.primaryBtnColor};
  background-color: ${(props) => props.theme.colors.primaryBtnBg};
  border: 1px solid ${(props) => props.theme.colors.primaryBtnBorder};
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.025em;
  cursor: pointer;
`
