import React from 'react'
import KofiButton from '.'
import { render } from '@testing-library/react'

describe('KofiButton', () => {
    it('renders properly', () => {
        const { container } = render(
            <KofiButton label='Support me' user='t2pellet' />,
        )
        expect(container).toMatchSnapshot()
    })
})
