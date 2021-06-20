import styled, { css, keyframes } from 'styled-components'
import { Theme } from '../../theme'

export interface CheckboxProps {
  className?: string
  checked?: boolean
  props?: any
  onChange?: (event: any) => void // React.ChangeEvent<HTMLInputElement> olmalı
  size?: number
  borderWidth?: number
  id?: string // zorunlu olmalı
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

const checkboxCheck = keyframes({
  '0%': {
    width: 0,
    height: 0,
    borderColor: '#fff',
    transform: 'translate3d(0, 0, 0) rotate(45deg)',
  },
  '33%': {
    width: '0.2em',
    height: 0,
    transform: 'translate3d(0, 0, 0) rotate(45deg)',
  },
  '100%': {
    width: '0.2em',
    height: '0.5em',
    borderColor: '#fff',
    transform: 'translate3d(0, -0.5em, 0) rotate(45deg)',
  },
})

export const Wrapper = styled.div(
  ({ size }: CheckboxProps) => css`
    display: flex;
    width: ${size}px;
    height: ${size}px;
  `
)

export const CheckboxLabel = styled.label(
  ({
    theme: {
      checkbox: { colors },
    },
    size,
    borderWidth,
  }: CheckboxProps & {
    theme: Theme
  }) => css`
    position: relative;
    display: flex;
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
      background: transparent;
      box-shadow: 0 0 0 ${borderWidth}px ${colors.defaultBorder} inset;
      border-radius: 5px;
      cursor: pointer;
      transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
      background-color: ${colors.defaultBackground};
    }
  `
)

export const CheckboxStyled = styled.input(
  ({
    theme: {
      checkbox: { colors },
    },
    size,
    borderWidth,
  }: CheckboxProps & {
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
        position: absolute;
        top: ${size ? size / 2 + 0.8 : 8.8}px;
        left: ${size ? (size - 8) / 2 : 4}px;
        border-right: 1px solid transparent;
        border-bottom: 1px solid transparent;
        transform: rotate(45deg);
        transform-origin: 0% 100%;
        animation: ${checkboxCheck} 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
      }
    }
  `
)
