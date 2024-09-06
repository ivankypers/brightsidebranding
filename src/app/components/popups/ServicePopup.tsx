import React from 'react';
import styles from '@/app/styles/Service.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "@/redux/store";
import {selectService} from '@/redux/slices/serviceSlice';

interface ServicePopupProps {
    className?: string;
    title: string;
    price: string;
    deadline: string;
    description: string;
    imageUrl: string;
}

const ServicePopup: React.FC<ServicePopupProps> = ({className, title, price, deadline, description, imageUrl}) => {
    const dispatch = useDispatch();
    const selectedService = useSelector((state: RootState) => state.service);
    const handleClick = () => {
        dispatch(selectService({ title, price, deadline, description, imageUrl }));
    };

    const isActive = selectedService.title === title;

    return (
        <div onClick={handleClick} className={`${styles.item} ${isActive ? styles.active : ''} ${className || ''}`}>
            <h2 className={styles.serviceTitle}>{title}</h2>
        </div>
    )
}

export default ServicePopup