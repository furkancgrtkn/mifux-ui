import styled, { css } from 'styled-components'
import { Theme } from '../../theme'
import { ButtonProps } from '.'

// eslint-disable-next-line import/prefer-default-export
export const ButtonStyled = styled.button(
  ({ theme: { colors } }: ButtonProps & { theme: Theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    white-space: no-wrap;
    padding: 8px 32px;
    color: ${colors.primaryBtnColor};
    background-color: ${colors.primaryBtnBg};
    border: 1px solid ${colors.primaryBtnBorder};
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.025em;
    cursor: pointer;
  `
)
