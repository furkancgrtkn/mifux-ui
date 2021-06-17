import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { FaAdjust } from 'react-icons/all'
import { Input } from '.'
import { InputProps } from './styled'

export default {
  title: 'Input',
  component: Input,
  description: `Input`,
  argTypes: {
    className: { control: 'text' },
    warning: { control: 'boolean' },
    subText: { control: 'text' },
    borderless: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<InputProps> = (args) => {
  const [value, setValue] = React.useState(args.value)
  return <Input value={value} onChange={(e) => setValue(e.target.value)} {...args} />
}

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  placeholder: 'Placeholder',
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
  icon: { item: <FaAdjust size={16} color='white' />, position: 'right', area: false },
}

export const DefaultIconWithArea = Template.bind({})
DefaultIcon.args = {
  icon: { item: <FaAdjust size={16} color='white' />, position: 'right', area: true },
}

export const TagLabel = Template.bind({})
TagLabel.args = {
  tag: { name: 'Tab Label' },
}

export const Borderless = Template.bind({})
Borderless.args = {
  borderless: true,
  icon: { item: <FaAdjust size={16} color='white' />, position: 'right', area: true },
  tag: { name: 'Tab Label' },
}

export const BlockWidth = Template.bind({})
BlockWidth.args = {
  block: true,
}
