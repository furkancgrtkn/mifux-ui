import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { Input } from '.'
import { InputProps } from './styled'

export default {
  title: 'Input',
  component: Input,
  description: `Input`,
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<InputProps> = (args) => <Input {...args} />

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {}

export const BlockWidth = Template.bind({})
BlockWidth.args = {
  width: 'block',
}

export const Warning = Template.bind({})
Warning.args = {
  warning: true,
}

export const WarningWithSubText = Template.bind({})
WarningWithSubText.args = {
  warning: true,
  subText: 'Error reason here',
}

export const DefaultIcon = Template.bind({})
DefaultIcon.args = {
  icon: { item: 'search', position: 'right', area: true },
}

export const TagLabel = Template.bind({})
TagLabel.args = {
  tag: { name: 'Tab Label' },
}

export const Borderless = Template.bind({})
Borderless.args = {
  borderless: true,
  icon: { item: 'search', position: 'right', area: true },
}
