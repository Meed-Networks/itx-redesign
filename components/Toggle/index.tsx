import { useState } from 'react'
import styles from './toggle.module.scss';

export const Toggle = ({ label, label2, toggled, onClick }:{label: string, label2: string, toggled: boolean, onClick: Function}) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <label className={styles.toggleBox}>
            <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span />
            <p className={styles.labelText}>{label}</p>
            <p className={styles.labelText2}>{label2}</p>
        </label>
    )
}