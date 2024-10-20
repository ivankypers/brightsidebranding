import React from 'react';
import styles from '@/app/styles/Service.module.scss'


interface popupProps {
    title?: string,
    placeholder?: string,
    name?: string,
    value?: string | number,
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const RequestTextarea: React.FC<popupProps> = ({title, placeholder, name, value, onChange}) => {

    return (
        <div className="relative w-full h-full">
            <label className={styles.label} htmlFor="">
                {title}
            </label>
            <textarea className={styles.textarea} placeholder={placeholder} name={name} onChange={onChange} value={value} maxLength={500} />
        </div>

    )
}

export default RequestTextarea