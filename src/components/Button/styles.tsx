import styled, { css } from 'styled-components'
import { Theme } from '../../theme/theme'
import { ButtonProps } from './Button'

// eslint-disable-next-line import/prefer-default-export
export const ButtonStyled = styled.button(
	({ theme: { colors } }: ButtonProps & { theme: Theme }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		color: ${colors.red};
		padding: 10px;
	`
)
