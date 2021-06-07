import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from '.'
import { ButtonProps } from './styled'

export default {
  title: 'Button',
  component: Button,
  description: `A button.`,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    primary: { control: 'boolean' },
  },
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args}>BUTTON</Button>

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {}
