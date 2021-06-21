import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { Checkbox } from '.'
import { CheckboxProps } from './styled'

export default {
  title: 'Checkbox',
  component: Checkbox,
  description: `Checkbox`,
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  onChange: (e: any) => console.log('checkbox value:', e.target.checked),
  size: 20,
  className: 'test',
  checked: false,
  borderWidth: 1,
  id: 'test',
}
