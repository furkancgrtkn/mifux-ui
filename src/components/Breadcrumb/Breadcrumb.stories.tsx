import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { GiLobArrow, MdKeyboardArrowRight } from 'react-icons/all'
import { Breadcrumb } from '.'
import { BreadcrumbProps } from './styled'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  description: `A Breadcrumb.`,
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  sections: [
    { key: '1', title: 'Homepage', link: 'https://github.com/miracosmanoglu' },
    { key: '2', title: 'Page', link: 'https://github.com/miracosmanoglu' },
    { key: '3', title: 'Active Page', link: 'https://github.com/miracosmanoglu', active: true },
  ],
  divider: <MdKeyboardArrowRight size='16' color='white' />,
}

export const Custom = Template.bind({})
Custom.args = {
  sections: [
    { key: '1', title: 'Homepage', link: 'https://github.com/miracosmanoglu' },
    { key: '2', title: 'Page', link: 'https://github.com/miracosmanoglu' },
    { key: '3', title: 'Active Page', link: 'https://github.com/miracosmanoglu', active: true },
  ],
  divider: <GiLobArrow size='16' color='white' />,
}
