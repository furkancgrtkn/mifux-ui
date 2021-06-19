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
Default.args = {}
