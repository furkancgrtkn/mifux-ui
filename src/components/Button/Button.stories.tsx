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
    variant: {
      options: ['primary', 'secondary', 'inverted', 'danger'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'select' },
    },
  },
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args}>BUTTON</Button>

// 👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
  variant: 'primary',
  size: 'small',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

export const SecondarySmall = Template.bind({})
SecondarySmall.args = {
  variant: 'secondary',
  size: 'small',
}

export const Inverted = Template.bind({})
Inverted.args = {
  variant: 'inverted',
}

export const InvertedSmall = Template.bind({})
InvertedSmall.args = {
  variant: 'inverted',
  size: 'small',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
}

export const DangerSmall = Template.bind({})
DangerSmall.args = {
  variant: 'danger',
  size: 'small',
}
