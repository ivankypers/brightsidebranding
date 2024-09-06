import React, {useEffect, useRef} from 'react';
import styles from '@/app/styles/ServiceStage.module.scss'
import Image from "next/image";
import gsap from "gsap";

interface popupProps {
    title?: string;
    price?: string;
    deadline?: string;
    description: string;
    imageUrl: string;
}

const ServiceStage: React.FC<popupProps> = ({title, price, deadline, description, imageUrl }) => {
    const stageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (stageRef.current) {
            gsap.fromTo(
                stageRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 2 }
            );
        }
    }, [title]);

    return (
        <div ref={stageRef} className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.flex}>
                <span className={styles.info}>от {price} ₽</span>
                <span className={styles.info}>от {deadline} дней</span>
            </div>
            <p className={styles.stage}>{description}</p>
            <Image className={styles.image} src={imageUrl} alt="landing" width={561} height={525}/>
        </div>
    )
}

export default ServiceStage