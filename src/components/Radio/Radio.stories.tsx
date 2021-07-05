import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { Radio } from '.'
import { RadioProps } from './styled'

export default {
  title: 'Radio',
  component: Radio,
  description: `Radio`,
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<RadioProps> = (args) => (
  <>
    <Radio id='1' name='test' {...args} />
    <Radio id='2' name='test' {...args} />
    <Radio id='3' name='test' {...args} />
  </>
)

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  onChange: (e: any) => console.log('Radio value:', e),
  size: 20,
  className: 'test',
  borderWidth: 1,
}
