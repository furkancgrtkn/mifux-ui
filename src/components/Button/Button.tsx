import * as React from 'react'
import { ButtonStyled } from './styles'

export interface ButtonProps {
	children: React.ReactNode
	primary?: boolean
	onClick?: () => void
	backgroundColor?: string
	color?: string
}

export const Button = ({
	children,
	primary = false,
	onClick,
	backgroundColor = '#D1D5DB',
	color = '#1F2937',
}: ButtonProps): JSX.Element => (
	<ButtonStyled
		type='button'
		color={color}
		backgroundColor={backgroundColor}
		onClick={onClick}
		primary={primary}
	>
		{children}
	</ButtonStyled>
)
