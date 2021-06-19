import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../../theme'

export interface TooltipStyleProps {}
export interface TooltipProps extends TooltipStyleProps {
  className?: string
  children: React.ReactNode
}

export const TooltipStyled = styled.span(
  ({
    theme,
  }: TooltipStyleProps & {
    theme: Theme
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    appearance: none;
    user-select: none;
  `
)
