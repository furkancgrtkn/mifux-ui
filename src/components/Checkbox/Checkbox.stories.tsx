import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from '.'
import { CheckboxProps } from './styled'

export default {
  title: 'Checkbox',
  component: Checkbox,
  description: `Checkbox`,
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<CheckboxProps> = (args) => {
  const { checked } = args
  const [storyValue, setStoryValue] = useState(checked)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoryValue(e.target.checked)
  }
  return <Checkbox checked={storyValue} onChange={handleChange} {...args} />
}

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  size: 20,
  className: 'test',
  borderWidth: 1,
  id: 'test',
}
