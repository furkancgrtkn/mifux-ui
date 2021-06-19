import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { Tooltip } from '.'
import { TooltipProps } from './styled'

export default {
  title: 'Tooltip',
  component: Tooltip,
  description: `A tooltip.`,
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<TooltipProps> = (args) => <Tooltip {...args}>Tooltip</Tooltip>

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  variant: 'primary',
  disabled: false,
}
