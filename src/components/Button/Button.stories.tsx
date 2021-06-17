import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { GoCloudDownload, FaAdjust } from 'react-icons/all'
import { Button } from '.'
import { ButtonProps } from './styled'

export default {
  title: 'Button',
  component: Button,
  description: `A button.`,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'inverted', 'danger', 'custom'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'select' },
    },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
    borderless: { control: 'boolean' },
    width: { control: 'text' },
    borderRadius: { control: 'text' },
    letterSpacing: { control: 'text' },
    disabledOpacity: { control: 'text' },
    iconSpacing: { control: 'number' },
  },
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args}>BUTTON</Button>

// 👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  disabled: false,
}

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
  variant: 'primary',
  size: 'small',
  disabled: false,
}

export const PrimaryIcon = Template.bind({})
PrimaryIcon.args = {
  variant: 'primary',
  size: 'large',
  icon: { item: <FaAdjust size={16} color='white' />, position: 'left' },
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  disabled: false,
}

export const SecondarySmall = Template.bind({})
SecondarySmall.args = {
  variant: 'secondary',
  size: 'small',
  disabled: false,
}

export const SecondaryIcon = Template.bind({})
SecondaryIcon.args = {
  variant: 'secondary',
  size: 'large',
  icon: { item: <FaAdjust size={16} color='white' />, position: 'right' },
  disabled: false,
}

export const Inverted = Template.bind({})
Inverted.args = {
  variant: 'inverted',
  disabled: false,
}

export const InvertedSmall = Template.bind({})
InvertedSmall.args = {
  variant: 'inverted',
  size: 'small',
  disabled: false,
}

export const InvertedIcon = Template.bind({})
InvertedIcon.args = {
  variant: 'inverted',
  size: 'large',
  icon: { item: <GoCloudDownload size='16' color='white' />, position: 'left' },
  disabled: false,
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  disabled: false,
}

export const DangerSmall = Template.bind({})
DangerSmall.args = {
  variant: 'danger',
  size: 'small',
  disabled: false,
}

export const DangerIcon = Template.bind({})
DangerIcon.args = {
  variant: 'danger',
  size: 'large',
  icon: { item: <FaAdjust size='16' color='white' />, position: 'right' },
  disabled: false,
}

export const CustomType = Template.bind({})
CustomType.args = {
  variant: 'custom',
  disabled: false,
}

export const CustomTyperSmall = Template.bind({})
CustomTyperSmall.args = {
  variant: 'custom',
  size: 'small',
  disabled: false,
}

export const CustomTypeIcon = Template.bind({})
CustomTypeIcon.args = {
  variant: 'custom',
  size: 'large',
  icon: { item: <FaAdjust size='16' color='white' />, position: 'right' },
  disabled: false,
}
