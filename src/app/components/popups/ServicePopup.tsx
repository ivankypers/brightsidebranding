import React from 'react';
import styles from '@/app/styles/Service.module.scss'


interface popupProps {
    title?: string;

}

const ServicePopup: React.FC<popupProps> = ({title, }) => {

    return (
        <div className={styles.item}>
            <h2 className={styles.serviceTitle}>{title}</h2>
            <div className={styles.details}>
                ПОКАЗАТЬ ДЕТАЛИ
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.5" cy="15.5" r="15" stroke="white"/>
                    <path d="M15.5 9.9585V21.0418M9.95831 15.5002H21.0416" stroke="white" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </div>
        </div>
    )
}

export default ServicePopup