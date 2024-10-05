import React from 'react';
import styles from '@/app/styles/Service.module.scss'


interface popupProps {
    title?: string,
    placeholder?: string,
    name?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const RequestInput: React.FC<popupProps> = ({title, placeholder, name, value, onChange}) => {

    return (
        <div className="relative w-full h-full">
            <label className={styles.label} htmlFor="">
                {title}
            </label>
            <input className={styles.input} type="text" placeholder={placeholder}/>
        </div>

    )
}

export default RequestInput