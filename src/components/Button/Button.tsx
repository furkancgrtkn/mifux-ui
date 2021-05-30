import * as React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
	children: React.ReactNode
	primary?: boolean
	onClick?: () => void
	backgroundColor?: string
	color?: string
}

const ButtonStyled = styled.button<ButtonProps>`
	color: ${props => props.color};
	background-color: ${props => props.backgroundColor};
`

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
