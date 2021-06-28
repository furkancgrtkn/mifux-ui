import styled, { css, keyframes } from 'styled-components'
import { Theme } from '../../theme'

export interface RadioProps {
  className?: string
  defaultChecked: boolean
  props?: any
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  size?: number
  borderWidth?: number
  id: string
  name: string
}

const shrinkBounce = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '33%': {
    transform: 'scale(0.85)',
  },
  '100%': {
    transform: 'scale(1)',
  },
})

const radioCheck = (size: number) => keyframes`
    0% {
      width: 0;
      height: 0;
     borderColor: #fff;
      transform: translate3d(0, 0, 0) rotate(45deg) scale(1);
    }
    33% {
    width: ${size / 2}px;
    height: ${size / 2}px;
    transform: translate3d(0, 0, 0) rotate(45deg) scale(0.85);
    }
    100% {
      width: ${size}px;
      height: ${size}px;
      borderColor: #fff;
      transform: translate3d(0, 0, 0) rotate(45deg) scale(1);
    }
`

export const Wrapper = styled.div(
  ({ size }: { size?: number }) => css`
    display: flex;
    width: ${size}px;
    height: ${size}px;
  `
)

export const RadioLabel = styled.label(
  ({
    theme: {
      radio: { colors },
    },
    size,
    borderWidth,
  }: {
    theme: Theme
    size?: number
    borderWidth?: number
  }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${size}px;
    height: ${size}px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);
    :after {
      content: '';
    }
    :before {
      content: '';
      position: absolute;
      display: flex;
      width: ${size}px;
      height: ${size}px;
      box-shadow: 0 0 0 ${borderWidth}px ${colors.defaultBorder} inset;
      border-radius: 100%;
      cursor: pointer;
      transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
      background-color: ${colors.defaultBackground};
    }
  `
)

export const RadioStyled = styled.input(
  ({
    theme: {
      radio: { colors },
    },
    size,
    borderWidth,
  }: RadioProps & {
    theme: Theme
  }) => css`
    width: 0;
    height: 0;
    display: none;
    :checked + label {
      :before {
        background-color: ${colors.checkedBackground};
        box-shadow: 0 0 0 ${size ? size / 2 : 8}px ${colors.checkedBackground} inset;
        border: ${borderWidth}px solid ${colors.checkedBorder};
        animation: ${shrinkBounce} 200ms cubic-bezier(0.4, 0, 0.23, 1);
      }
      :after {
        background-color: #eeeeee;
        width: 0;
        height: 0;
        border-radius: 100%;
        transform: translate3d(0, -0.5em, 0) rotate(45deg);
        animation: ${radioCheck(size ? size * 0.6 : 12)} 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1)
          forwards;
      }
    }
  `
)
