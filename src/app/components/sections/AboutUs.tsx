import React from 'react';
import styles from '../styles/About.module.scss'
import AboutCard from "@/app/components/cards/AboutCard";

interface Props {
    text: string;

}

const AboutUs : React.FC = () => {


    return (
        <section>
            <div className="container">
                <div className={styles.titleWrap}>
                    <div className={styles.subtitle}>[О нас]</div>
                    <div className={styles.title}>ПОЧЕМУ <span>ВЫБИРАЮТ НАС?</span></div>
                </div>
                <div className={styles.cardWrapper}>
                    <AboutCard title="Новое поколение веб-разработки"  description="Мы делаем крутой веб-дизайн и используем новейшие технологии, чтобы ваш проект выглядел выразительно на фоне конкурентов"/>
                    <div className={styles.cardSplit}>
                        <AboutCard title="Используем наш опыт для вас"  description="Во всех сферах, в разработке и маркетинге"/>
                        <AboutCard title="Реализуем даже самую сложную задачу"  description="Более 20 специалистов в команде"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;