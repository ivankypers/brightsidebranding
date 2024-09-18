import React, {useRef, useState} from 'react';
import styles from '@/app/styles/Service.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "@/redux/store";
import {selectService} from '@/redux/slices/serviceSlice';
import ServiceStage from "@/app/components/ServiceStage";

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
    const handleClick = () => {
        dispatch(selectService({title, price, deadline, description, imageUrl}));


        if (accordionRef.current && titleRef.current) {
            setAccordionOpen(true);

        }

    };

    const titleRef = useRef<HTMLHeadingElement>(null);
    const accordionRef = useRef<HTMLDivElement>(null);


    const isActive = selectedService.title === title;


    return (
        <>
            <div onClick={handleClick} className={`${styles.item} ${isActive ? styles.active : ''} ${className || ''}`}>
                <h2 ref={titleRef} className={styles.serviceTitle}>{title}</h2>
            </div>

            <div ref={accordionRef}
                 className={`${styles.accordion} ${isAccordionOpen ? styles.accordionActive : ''} ${className || ''}`}>
                {
                    selectedService.title && (
                        <ServiceStage
                            title={selectedService.title}
                            price={selectedService.price}
                            deadline={selectedService.deadline}
                            description={selectedService.description}
                            imageUrl={selectedService.imageUrl}
                        />
                    )
                }
            </div>


        </>


    )
}

export default ServicePopup