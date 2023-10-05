import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import KofiButton from '../components/KofiButton/KofiButton'

const meta: Meta<typeof KofiButton> = {
    component: KofiButton,
    args: {
        label: 'Support me',
        user: 't2pellet',
        color: '#29abe0',
        size: 'sm',
    },
    argTypes: {
        color: {
            control: { type: 'color' },
        },
        onClick: {
            table: {
                disable: true,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof KofiButton>

export const Primary: Story = {
    render: (args) => <KofiButton {...args} onClick={undefined} />,
}
