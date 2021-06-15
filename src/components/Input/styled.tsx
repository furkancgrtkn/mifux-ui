import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../../theme'

export interface InputStyleProps {
  primary?: boolean
  // bg?: string
  // color?: string
}
export interface InputProps extends InputStyleProps {
  className?: string
  width?: 'block' | number
  warning?: boolean
  icon?: { name: 'string'; position: 'left' | 'right'; area?: boolean }
  subText?: string
  tag?: { name: string; description?: string }
  borderless?: boolean
}

const handleWidth = (width: InputProps['width']) => {
  if (width === 'block') {
    return '100%'
  }
  if (typeof width === 'number') {
    return `${width}px`
  }
  return null
}

const handleBorderColor = (warning: InputProps['warning'], focus: boolean) => {
  if (warning) {
    return '#F83B68'
  }
  if (focus) {
    return '#64FFDA'
  }

  return '#EEEEEE'
}

const handleFontColor = (warning: InputProps['warning']) => {
  if (warning) {
    return '#F83B68'
  }
  return '#EEEEEE'
}

const handleCaretColor = (warning: InputProps['warning'], focus: boolean) => {
  if (warning) {
    return '#F83B68'
  }
  return '#64FFDA'
}

export const InputStyled = styled.div<InputProps & { theme: Theme; focus: boolean }>`
  input {
    border: none;
    background: none;
    width: 100%;
    color: ${(props) => handleFontColor(props.warning)};
    outline: none;
    padding: 12px 14px;
    font-size: 14px;
    letter-spacing: 0.025em;
    caret-color: ${(props) => handleCaretColor(props.warning, props.focus)};
  }
  & > div {
    padding: 12px 14px;
    color: ${(props) => handleBorderColor(props.warning, props.focus)};
    ${(props) =>
      props.icon?.area &&
      css`
        background-color: rgba(139, 139, 139, 0.1);
        ${props.icon.position === 'left'
          ? css`
              border-right: 1px solid;
            `
          : css`
              border-left: 1px solid;
            `}
        border-color: ${handleBorderColor(props.warning, props.focus)};
        display: flex;
        align-items: center;
        justify-content: center;
      `};
  }
  display: flex;
  flex-direction: ${(props) => (props.icon?.position === 'left' ? 'row-reverse' : 'row')};
  color: ${(props) => handleFontColor(props.warning)};
  border-radius: 5px;
  width: ${(props) => handleWidth(props.width)};

  ${(props) =>
    props.borderless
      ? css`
          background-color: #393b3f;
        `
      : css`
          background-color: #24262a;
          border: 1px solid;
          border-color: ${handleBorderColor(props.warning, props.focus)};
        `}
`

export const Caption = styled.p<InputProps & { theme: Theme }>`
  color: ${(props) => handleFontColor(props.warning)};
  font-size: 12px;
  letter-spacing: 0.025em;
  padding: 8px 14px;
`
export const Tag = styled.div<InputProps & { theme: Theme }>`
  color: ${(props) => handleFontColor(props.warning)};
  font-size: 14px;
  letter-spacing: 0.025em;
  padding: 12px 0;
`
