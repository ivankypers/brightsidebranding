"use client"

import React, {useEffect, useRef} from 'react';

import ActionButton from "@/app/components/ActionButton";
import SplineModel from "@/app/components/SplineModel";
import Image from "next/image";
import gsap from "gsap";

import styles from '@/app/styles/Main.module.scss'

const Main: React.FC = () => {


    const titleRef = useRef<HTMLHeadingElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        gsap.fromTo(titleRef.current, {opacity: 0, y: -20},
            {
                opacity: 1, y: 0, duration: 1, delay: 0, ease: "power2.inOut",

            });

        gsap.fromTo(divRef.current, {opacity: 0, y: 10},
            {
                opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.inOut",

            });

        gsap.fromTo(buttonRef.current, {opacity: 0, y: -10},
            {
                opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.inOut"

            });


    }, []);




    return (
        <section className={styles.main}>
            <div className="container">


                <h1 ref={titleRef} className={styles.title}>
                    <span>РАЗРАБАТЫВАЕМ </span>
                    <span>ЭФФЕКТИВНЫЕ САЙТЫ</span>
                    <br/>
                    <span className={styles.titleAccent}>С ГАРАНТИЕЙ РЕЗУЛЬТАТА</span>
                </h1>


                <div ref={buttonRef} className={styles.buttonWrap}>
                    <ActionButton
                        className={styles.button}
                        text="Бесплатная консультация"
                        onClick={() => {

                    }}/>
                </div>
                <div ref={divRef} className={styles.about}>
                    <div className={styles.aboutContent}>
                        <Image className="mb-[21px]" src="/mainicon.png" alt="IT WORKS!" width={80} height={27}/>
                        <h2 className={styles.service}>Создаём удобный и функциональный дизайн, который выведет ваш
                            проект на новый уровень</h2>
                        <h3 className={styles.types}>Многостраничные сайты | Интернет-магазины | Соц. сети | Лендинги |
                            Фирменный стиль | Презентации</h3>
                        <ActionButton className={styles.adaptiveButton} text="Бесплатная консультация" onClick={() => {
                            alert('oy')
                        }}/>
                    </div>
                </div>
            </div>
            {/*<SplineModel />*/}
        </section>
    )
}

export default Main