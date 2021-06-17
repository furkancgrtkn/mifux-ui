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
  const { value } = args
  const [valueS, setValueS] = React.useState(value)
  return <Input value={valueS} onChange={(e) => setValueS(e.target.value)} {...args} />
}

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  placeholder: 'Placeholder',
}

export const Warning = Template.bind({})
Warning.args = {
  placeholder: 'Placeholder',
  warning: true,
}

export const WarningWithSubText = Template.bind({})
WarningWithSubText.args = {
  placeholder: 'Placeholder',
  warning: true,
  subText: 'Error reason here',
}

export const TagLabel = Template.bind({})
TagLabel.args = {
  placeholder: 'Placeholder',
  tag: { name: 'Tab Label' },
}

export const Borderless = Template.bind({})
Borderless.args = {
  placeholder: 'Placeholder',
  borderless: true,
  icon: { item: <FaAdjust size={16} color='white' />, position: 'right', area: true },
  tag: { name: 'Tab Label' },
}

export const DefaultWithIcon = Template.bind({})
DefaultWithIcon.args = {
  placeholder: 'Placeholder',
  icon: { item: <FaAdjust size={16} color='white' />, position: 'right', area: false },
}

export const WarningWithIcon = Template.bind({})
WarningWithIcon.args = {
  placeholder: 'Placeholder',
  icon: { item: <FaAdjust size={16} color='white' />, position: 'right', area: false },
  warning: true,
}

export const WithIconLeft = Template.bind({})
WithIconLeft.args = {
  placeholder: 'Placeholder',
  icon: { item: <FaAdjust size={16} color='white' />, position: 'left', area: false },
}

export const WithIconArea = Template.bind({})
WithIconArea.args = {
  placeholder: 'Placeholder',

  icon: { item: <FaAdjust size={16} color='white' />, position: 'right', area: true },
}

export const BlockWidth = Template.bind({})
BlockWidth.args = {
  placeholder: 'Placeholder',
  block: true,
}
