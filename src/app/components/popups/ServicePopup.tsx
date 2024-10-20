import React, {useRef, useState, useCallback} from 'react';
import styles from '@/app/styles/Service.module.scss';
import ServiceStage from "@/app/components/ServiceStage";

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "@/redux/store";

import {selectService} from '@/redux/slices/serviceSlice';
import {setOpenItem} from "@/redux/slices/accordionSlice";

interface ServicePopupProps {
    className?: string;
    title: string;
    price: string;
    deadline: string;
    description: string;
    imageUrl: string;
}

const ServicePopup: React.FC<ServicePopupProps> = ({className, title, price, deadline, description, imageUrl}) => {
    const [isAccordionOpen, setAccordionOpen] = useState<boolean>(false);

    const dispatch = useDispatch();
    const selectedService = useSelector((state: RootState) => state.service);
    const openAccordion = useSelector((state: RootState) => state.accordion.openAccordion);

    const titleRef = useRef<HTMLHeadingElement>(null);
    const accordionRef = useRef<HTMLDivElement>(null);

    const handleClick = useCallback(() => {
        dispatch(selectService({title, price, deadline, description, imageUrl}));
        dispatch(setOpenItem(openAccordion === title ? null : title));

        if (accordionRef.current && titleRef.current) {
            setAccordionOpen(prev => !prev);
        }

        setTimeout(() => {
            if (window.innerWidth < 988 && titleRef.current) {
                titleRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        }, 50);

    }, [title, openAccordion]);


    const isActive = selectedService.title === title;
    const isOpen = openAccordion === title;

    return (
        <>
            <div
                onClick={handleClick}
                className={`${styles.item} ${isActive ? styles.active : ''} ${className || ''}`}
            >
                <h2 ref={titleRef} className={styles.serviceTitle}>{title}</h2>
            </div>

            <div
                ref={accordionRef}
                className={`${styles.accordion} ${isOpen ? styles.accordionActive : ''} ${className || ''}`}
            >
                {isOpen && selectedService.title && (
                    <ServiceStage
                        title={selectedService.title}
                        price={selectedService.price}
                        deadline={selectedService.deadline}
                        description={selectedService.description}
                        imageUrl={selectedService.imageUrl}
                    />
                )}
            </div>
        </>
    );
};

export default ServicePopup;