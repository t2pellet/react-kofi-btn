import React from 'react'
import './KofiButton.css'

type KofiButtonProps = {
    color?: string
    label: string
    user: string
}

const KofiButton: React.FC<KofiButtonProps> = ({
    color = '#29abe0',
    label,
    user,
}) => {
    return (
        <div className='KofiBtnContainer'>
            <a
                title='Support me on ko-fi.com'
                className='KofiButton'
                style={{ backgroundColor: color }}
                href={`https://ko-fi.com/${user}`}
                target='_blank'
                rel='noreferrer'
            >
                <img
                    src='https://storage.ko-fi.com/cdn/cup-border.png'
                    alt='Ko-fi donations'
                    className='KofiImg'
                />
                <span className='KofiText'>{label}</span>
            </a>
        </div>
    )
}

export default KofiButton
