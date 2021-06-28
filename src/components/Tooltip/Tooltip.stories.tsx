import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { Tooltip } from '.'
import { TooltipProps } from './styled'
import { Button } from '../Button'

export default {
  title: 'Tooltip',
  component: Tooltip,
  description: `A tooltip.`,
  argTypes: {
    label: { control: 'text' },
    position: {
      options: ['right', 'bottom', 'top', 'left'],
      control: { type: 'select' },
    },
    color: { control: 'text' },
    background: { control: 'text' },
    fontSize: { control: 'text' },
    fontWeight: {
      options: [400, 500, 600, 700],
      control: { type: 'select' },
    },
    boxShadow: { control: 'text' },
    borderRadius: { control: 'text' },
    padding: { control: 'text' },
    borderless: { control: 'boolean' },
  },
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<TooltipProps> = (args) => (
  <div style={{ marginTop: 40, marginLeft: 40, width: 'fit-content' }}>
    <Tooltip {...args}>
      <Button onClick={() => {}} size='large' variant='primary'>
        Hover
      </Button>
    </Tooltip>
  </div>
)

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  label: 'Tooltip',
  position: 'right',
}
