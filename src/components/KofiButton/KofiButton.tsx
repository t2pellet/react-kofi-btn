import React, { useCallback, useEffect, useMemo } from 'react'
import WebFont from 'webfontloader'
import styles from './KofiButton.module.scss'

const buttonSizings = {
    sm: {
        width: 150,
        height: 33,
        fontSize: 14,
        iconHeight: 13,
        iconWidth: 20,
        border: 7,
        gap: 8,
    },
    md: {
        width: 200,
        height: 44,
        fontSize: 16,
        iconHeight: 15,
        iconWidth: 23,
        border: 12,
        gap: 12,
    },
    lg: {
        width: 300,
        height: 66,
        fontSize: 20,
        iconHeight: 19,
        iconWidth: 29,
        border: 28,
        gap: 16,
    },
}

export type KofiButtonProps = {
    size?: keyof typeof buttonSizings
    color?: string
    label: string
    user: string
    onClick?: (user: string) => void
}

const KofiButton: React.FC<KofiButtonProps> = ({
    size = 'sm',
    color = '#29abe0',
    label,
    user,
    onClick,
}) => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Quicksand'],
            },
        })
    }, [])

    const buttonSizing = useMemo(() => buttonSizings[size], [size])
    const openLink = useCallback(
        (user: string) => {
            if (onClick !== undefined) {
                onClick(user)
            } else if (window) {
                window.open(`https://ko-fi.com/${user}`, '_blank')
            }
        },
        [onClick],
    )

    return (
        <div
            className={styles.KofiBtnContainer}
            style={{ width: buttonSizing.width, height: buttonSizing.height }}
        >
            <a
                title='Support me on ko-fi.com'
                className={styles.KofiButton}
                style={{
                    backgroundColor: color,
                    borderRadius: buttonSizing.border,
                    gap: buttonSizing.gap,
                }}
                onClick={() => openLink(user)}
            >
                <img
                    src='https://storage.ko-fi.com/cdn/cup-border.png'
                    alt='Ko-fi donations'
                    width={buttonSizing.iconWidth}
                    height={buttonSizing.iconHeight}
                    className={styles.KofiImg}
                />
                <span
                    className={styles.KofiText}
                    style={{
                        lineHeight: `${buttonSizing.fontSize}px`,
                        height: buttonSizing.fontSize,
                        fontSize: buttonSizing.fontSize,
                    }}
                >
                    {label}
                </span>
            </a>
        </div>
    )
}

export default KofiButton
