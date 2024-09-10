"use client"

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
    const titleRef = useRef<HTMLHeadingElement>(null);
    const priceRef = useRef<HTMLSpanElement>(null);
    const deadlineRef = useRef<HTMLSpanElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (stageRef.current) {
            gsap.fromTo(titleRef.current, { opacity: 0}, { opacity: 1, duration: 1, ease: "power2.inOut" });
            gsap.fromTo(priceRef.current, { opacity: 0}, { opacity: 1, duration: 1.5, ease: "power2.inOut" });
            gsap.fromTo(deadlineRef.current, { opacity: 0}, { opacity: 1, duration: 1.5, ease: "power2.inOut" });
            gsap.fromTo(descriptionRef.current, { opacity: 0}, { opacity: 1, duration: 1.5, ease: "power2.inOut" });
            gsap.fromTo(imageRef.current, { opacity: 0}, { opacity: 1, duration: 1.5, ease: "power2.inOut" });
        }
    }, [title]);

    return (
        <div ref={stageRef} className={styles.container}>
            <h2 ref={titleRef} className={styles.title}>{title}</h2>
            <div className={styles.flex}>
                <span ref={priceRef} className={styles.info}>от {price} ₽</span>
                <span ref={deadlineRef} className={styles.info}>от {deadline} дней</span>
            </div>
            <p ref={descriptionRef} className={styles.stage}>{description}</p>
            <Image ref={imageRef} className={styles.image} src={imageUrl} alt="landing" width={561} height={525}/>
        </div>
    )
}

export default ServiceStage