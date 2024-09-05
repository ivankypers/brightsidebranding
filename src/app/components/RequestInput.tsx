import React from 'react';
import styles from '@/app/styles/Service.module.scss'


interface popupProps {
    title?: string;
    placeholder?: string;
}

const ServicePopup: React.FC<popupProps> = ({title, placeholder }) => {

    return (
        <div className="relative w-full h-full">
            <label className={styles.label} htmlFor="">
                {title}
            </label>
            <input className={styles.input} type="text" placeholder={placeholder}/>
        </div>

    )
}

export default ServicePopup