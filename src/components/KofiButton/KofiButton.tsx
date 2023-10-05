import React, { useEffect } from 'react'
import WebFont from 'webfontloader'
import styles from './KofiButton.module.scss'
type KofiButtonProps = {
    width?: number
    height?: number
    color?: string
    border?: number
    label: string
    user: string
}

const KofiButton: React.FC<KofiButtonProps> = ({
    width = 150,
    height = 33,
    border = 7,
    color = '#29abe0',
    label,
    user,
}) => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Quicksand'],
            },
        })
    }, [])

    return (
        <div className={styles.KofiBtnContainer} style={{ width, height }}>
            <a
                title='Support me on ko-fi.com'
                className={styles.KofiButton}
                style={{ backgroundColor: color, borderRadius: border }}
                href={`https://ko-fi.com/${user}`}
                target='_blank'
                rel='noreferrer'
            >
                <img
                    src='https://storage.ko-fi.com/cdn/cup-border.png'
                    alt='Ko-fi donations'
                    className={styles.KofiImg}
                />
                <span className={styles.KofiText}>{label}</span>
            </a>
        </div>
    )
}

export default KofiButton
