"use client"

import React, {useEffect, useRef} from 'react';
import styles from '@/app/styles/ServiceStage.module.scss'
import Image from "next/image";
import gsap from "gsap";

import {useSelector} from "react-redux";
import {selectService} from "@/redux/slices/serviceSlice";

interface popupProps {
    title: string;
    price: string;
    deadline: string;
    description: string;
    imageUrl: string;
}

const ServiceStage: React.FC<popupProps> = ({title, price, deadline, description, imageUrl }) => {
    const selectedService = useSelector(selectService);

    const stageRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const priceRef = useRef<HTMLSpanElement>(null);
    const deadlineRef = useRef<HTMLSpanElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const imageWrapRef = useRef<HTMLDivElement>(null);

    const innerUserWidth = window.innerWidth;


    useEffect(() => {
        if (stageRef.current) {
            gsap.fromTo(titleRef.current, { opacity: 0, y: 50}, { opacity: 1, y:0, duration: 1, ease: "power2.inOut", stagger: 0.2 });
            gsap.fromTo(priceRef.current, { opacity: 0, y: 50}, { opacity: 1, y:0, duration: 1.2, ease: "power2.inOut" });
            gsap.fromTo(deadlineRef.current, { opacity: 0, y: 50}, { opacity: 1, y: 0, duration: 1.3, ease: "power2.inOut" });
            gsap.fromTo(descriptionRef.current, { opacity: 0, y: 70}, { opacity: 1, y: 0, duration: 1.3, ease: "power2.inOut" });
            gsap.fromTo(imageWrapRef.current, { opacity: 0, scale: 0.9}, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.inOut" });
        }

        return () => {
            gsap.fromTo(titleRef.current, { opacity: 1}, { opacity: 0, duration: 1, ease: "power2.inOut" });
        }
    }, [innerUserWidth, selectedService]);

    return (

            <div ref={stageRef} className={styles.container}>
                <div className={styles.overflowh}>
                    <h2 ref={titleRef} className={styles.title}>{title}</h2>
                </div>
                <div className={styles.overflowh}>
                    <div className={styles.flex}>
                        <span ref={priceRef} className={styles.info}>от {price} ₽</span>
                        <span ref={deadlineRef} className={styles.info}>от {deadline} дней</span>
                    </div>
                </div>
                <div className={styles.overflowh}>
                    <p ref={descriptionRef} className={styles.stage}>{description}</p>
                </div>
                <div ref={imageWrapRef} className={styles.imageWrapper}>
                    <Image ref={imageRef} className={styles.image} src={imageUrl} alt="landing" width={561} height={525}/>
                </div>

            </div>


    )
}

export default ServiceStage