"use client"

import React from 'react';
import styles from '@/app/styles/About.module.scss'
import AboutCard from "@/app/components/cards/AboutCard";


const AboutUs : React.FC = () => {

    return (
        <section className="pt-[64px] pb-[70px] bg-black">
            <div className="container">
                <div className={styles.titleWrap}>
                    <div className={styles.subtitle}>[О нас]</div>
                    <div className={styles.title}>ПОЧЕМУ <span>ВЫБИРАЮТ НАС?</span></div>
                </div>
                <div className={styles.cardWrapper}>
                    <AboutCard title="Новое поколение веб-разработки" customClass="bgFirst"  description="Мы делаем крутой веб-дизайн и используем новейшие технологии, чтобы ваш проект выглядел выразительно на фоне конкурентов"/>
                    <div className={styles.cardSplit}>
                        <AboutCard title="Используем наш опыт для вас" customClass="bgSecond"  description="Во всех сферах, в разработке и маркетинге"/>
                        <AboutCard title="Реализуем даже самую сложную задачу" customClass="bgThird"  description="Более 20 специалистов в команде, включая дизайнеров, веб-разработчиков и менеджеров проектов"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;