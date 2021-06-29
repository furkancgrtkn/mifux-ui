import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../../theme'

export interface SectionProps {
  key: string
  title: string
  link: string
  active?: boolean
}

export interface BreadcrumbProps {
  className?: string
  sections: SectionProps[]
  props?: any
  divider?: React.ReactNode
}

export const Wrapper = styled.div(
  () => css`
    display: flex;
    align-items: center;
  `
)

export const Section = styled.div(
  ({
    theme: {
      global: { fontFamily, fontWeights },
      breadcrumb: { paddings, heights, colors },
    },
    active,
  }: {
    theme: Theme
    active?: boolean
  }) => css`
    display: flex;
    span {
      color: ${active ? '#64FFDA' : '#eeeeee'};
      letter-spacing: 0.025em;
      font-family: ${fontFamily};
      font-weight: ${fontWeights.semiBold};
      font-size: 12px;
    }
  `
)

export const Divider = styled.div(
  ({
    theme: {
      breadcrumb: { paddings, heights, colors },
    },
  }: {
    theme: Theme
  }) => css`
    color: #eeeeee;
    margin: 0 10px;
    display: flex;
  `
)
