import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import KofiWidget from '../components/KofiWidget'

const meta: Meta<typeof KofiWidget> = {
    component: KofiWidget,
    args: {
        label: 'Support me',
        user: 't2pellet',
        color: '#29abe0',
        size: 'md',
    },
    argTypes: {
        color: {
            control: { type: 'color' },
        },
    },
}

export default meta
type Story = StoryObj<typeof KofiWidget>

export const Primary: Story = {
    render: (args) => <KofiWidget {...args} />,
}
