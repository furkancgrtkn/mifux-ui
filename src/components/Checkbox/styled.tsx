import styled, { css, keyframes } from 'styled-components'
import { Theme } from '../../theme'

export interface CheckboxProps {
  className?: string
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

export const CheckboxLabel = styled.label(
  () => css`
    position: relative;
    display: flex;
    margin: 0.6em 0;
    align-items: center;
    color: #9e9e9e;
    transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);
    :after {
      content: '';
    }
    :before {
      content: '';
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1em;
      width: 1em;
      height: 1em;
      background: transparent;
      box-shadow: 0 0 0 1px #eeeeee inset;
      border-radius: 5px;
      cursor: pointer;
      transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
    }
  `
)

export const CheckboxStyled = styled.input(
  () => css`
    width: 0;
    height: 0;
    :checked + label {
      :before {
        box-shadow: 0 0 0 0.5em rgba(255, 255, 255, 0.05) inset;
        border: 1px solid white;
        animation: ${shrinkBounce} 200ms cubic-bezier(0.4, 0, 0.23, 1);
      }
      :after {
        position: absolute;
        top: 0.55em;
        left: 0.25em;
        border-right: 1px solid transparent;
        border-bottom: 1px solid transparent;
        transform: rotate(45deg);
        transform-origin: 0% 100%;
        animation: ${checkboxCheck} 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
      }
    }
  `
)
