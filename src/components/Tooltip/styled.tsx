import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../../theme'

export interface TooltipStyleProps {
  color?: string
  background?: string
  fontSize?: string
  fontWeight?: number
  boxShadow?: string
  borderRadius?: string
  padding?: string
  position: 'right' | 'bottom' | 'top'
}
export interface TooltipProps extends TooltipStyleProps {
  className?: string
  label: string
  children: React.ReactNode
}

export const TooltipWrapper = styled.div(
  ({ position }: { position: TooltipStyleProps['position'] }) => css`
    width: fit-content;
    position: relative;
    &:hover {
      & > ${TooltipStyled} {
        visibility: visible;
        z-index: 1;
        opacity: 1;
        transform: ${position === 'right' ? 'translateY(-50%) translateX(0%)' : 'translateX(-50%)'}
          scale(1);
        transition: 0.15s ease-in;
        transition-property: transform, visibility, opacity;
      }
    }
  `
)

export const TooltipStyled = styled.div(
  ({
    theme: { global, tooltip },
    color,
    background,
    fontSize,
    fontWeight,
    boxShadow,
    borderRadius,
    padding,
    dataPosition,
    dataPositionX,
    position,
  }: TooltipStyleProps & {
    theme: Theme
    dataPosition: number | undefined
    dataPositionX: number | undefined
  }) => css`
    width: fit-content;
    position: absolute;
    visibility: hidden;
    user-select: none;
    opacity: 0;
    z-index: -10;

    padding: ${padding || tooltip.padding};
    color: ${color || tooltip.color};
    background-color: ${background || tooltip.background};
    border: 1px solid ${color || tooltip.color};
    border-radius: ${borderRadius || tooltip.borderRadius};
    font-family: ${global.fontFamily};
    font-size: ${fontSize || tooltip.fontSize};
    font-weight: ${fontWeight || tooltip.fontWeight};
    box-shadow: ${boxShadow || tooltip.boxShadow};

    transform: ${position === 'right' ? 'translateY(-50%) translateX(0%)' : 'translateX(-50%)'}
      scale(0.5);

    transition: 0.15s ease-out;
    transition-property: transform, visibility, opacity;

    ${position === 'top' &&
    dataPosition &&
    css`
      bottom: ${`${dataPosition + 10}px`};
    `}

    ${position === 'bottom' &&
    dataPosition &&
    css`
      top: ${`${dataPosition + 10}px`};
    `}

    ${position === 'right' && dataPositionX
      ? css`
          top: 50%;
          left: ${`${dataPositionX + 10}px`};
        `
      : css`
          left: 50%;
        `}
  `
)

export const ChildWrapper = styled.div``
