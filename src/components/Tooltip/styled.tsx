import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../../theme'

export interface TooltipStyleProps {}
export interface TooltipProps extends TooltipStyleProps {
  className?: string
  children: React.ReactNode
}

export const TooltipWrapper = styled.div(
  () => css`
    width: fit-content;
    position: relative;
  `
)

export const TooltipStyled = styled.div(
  ({
    theme: { global },
    dataPosition,
  }: TooltipStyleProps & {
    theme: Theme
    dataPosition: number | undefined
  }) => css`
    width: fit-content;
    position: absolute;
    padding: 6px 12px;
    color: #c5c5c5;
    z-index: 1;
    ${dataPosition &&
    css`
      bottom: ${`${dataPosition + 10}px`};
    `}
    left: 50%;
    transform: translateX(-50%);
    background-color: #2f3235;
    border: 1px solid #c5c5c5;
    border-radius: 5px;
    font-family: ${global.fontFamily};
    font-size: 12px;
    font-weight: 400;
  `
)

export const ChildWrapper = styled.div``
