import React, { useEffect } from 'react'
import WebFont from 'webfontloader'
import styles from './KofiButton.module.css'
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
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Quicksand'],
            },
        })
    }, [])

    return (
        <div className={styles.KofiBtnContainer}>
            <a
                title='Support me on ko-fi.com'
                className={styles.KofiButton}
                style={{ backgroundColor: color }}
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