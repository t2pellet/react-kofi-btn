import React, { useState } from 'react'
import KofiButton, { KofiButtonProps } from '../KofiButton'

import styles from './KofiWidget.module.scss'

export type KofiWidgetProps = Omit<
    KofiButtonProps,
    'onClick' | 'width' | 'height' | 'border' | 'fontSize'
>

const KofiWidget: React.FC<KofiWidgetProps> = ({
    user,
    size = 'lg',
    ...props
}) => {
    const [showing, setShowing] = useState(false)

    return (
        <div className={styles.KofiWidgetContainer}>
            <div className={styles.KofiModal}>
                <iframe
                    id='kofiframe'
                    src={`https://ko-fi.com/${user}/?hidefeed=true&widget=true&embed=true&preview=true`}
                    title={user}
                    className={showing ? styles.show : styles.hide}
                />
            </div>
            <KofiButton
                user={user}
                size={size}
                onClick={() => setShowing(!showing)}
                {...props}
            />
        </div>
    )
}

export default KofiWidget
