import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { Tooltip } from '.'
import { TooltipProps } from './styled'
import { Button } from '../Button'

export default {
  title: 'Tooltip',
  component: Tooltip,
  description: `A tooltip.`,
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<TooltipProps> = (args) => (
  <div style={{ marginTop: 40, marginLeft: 40, width: 'fit-content' }}>
    <Tooltip {...args}>
      <Button onClick={() => {}} size='large' variant='primary'>
        BUTTON
      </Button>
    </Tooltip>
  </div>
)

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  variant: 'primary',
  disabled: false,
}
