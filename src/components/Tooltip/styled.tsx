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
    theme: { global, tooltip },
    dataPosition,
  }: TooltipStyleProps & {
    theme: Theme
    dataPosition: number | undefined
  }) => css`
    width: fit-content;
    position: absolute;
    padding: ${tooltip.padding};
    color: ${tooltip.color};
    z-index: 1;
    ${dataPosition &&
    css`
      bottom: ${`${dataPosition + 10}px`};
    `}
    left: 50%;
    transform: translateX(-50%);
    background-color: ${tooltip.background};
    border: 1px solid ${tooltip.color};
    border-radius: ${tooltip.borderRadius};
    font-family: ${global.fontFamily};
    font-size: ${tooltip.fontSize};
    font-weight: ${tooltip.fontWeight};
  `
)

export const ChildWrapper = styled.div``
