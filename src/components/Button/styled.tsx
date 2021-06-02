import styled, { css } from 'styled-components';
import { Theme } from '../../theme';
import { ButtonProps } from '.';

// eslint-disable-next-line import/prefer-default-export
export const ButtonStyled = styled.button(
  ({ theme: { colors } }: ButtonProps & { theme: Theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.red};
    font-family: 'Nunito Sans', sans-serif;
    padding: 10px;
    font-size: 40px;
    font-weight: 600;
  `
);
