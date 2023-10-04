import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import KofiButton from '../lib/KofiButton'

const meta: Meta<typeof KofiButton> = {
    component: KofiButton,
    args: {
        label: 'Support me',
        user: 't2pellet',
        color: '#29abe0',
    },
    argTypes: {
        color: {
            control: { type: 'color' },
        },
    },
}

export default meta
type Story = StoryObj<typeof KofiButton>

export const Primary: Story = {
    render: (args) => <KofiButton {...args} />,
}
