import React from 'react'
import { ButtonProps } from './Button.types'
import { ButtonStyled } from './styled'

export const Button = ({
  children,
  primary = false,
  onClick,
  bg = '#D1D5DB',
  color = '#1F2957',
  className,
}: ButtonProps): JSX.Element => (
  <ButtonStyled
    type='button'
    color={color}
    bg={bg}
    onClick={onClick}
    primary={primary}
    className={className || ''}
  >
    {children || null}
  </ButtonStyled>
)
