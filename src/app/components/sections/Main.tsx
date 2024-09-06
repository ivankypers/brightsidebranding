"use client"

import React from 'react';
import styles from '@/app/styles/Main.module.scss'
import ActionButton from "@/app/components/ActionButton";
import Image from "next/image";

const Main : React.FC = () => {


    return (
        <div className={styles.main}>
            <div className="container">
                <h1 className={styles.title}>
                    <span>РАЗРАБАТЫВАЕМ </span>
                    <span>ЭФФЕКТИВНЫЕ САЙТЫ</span>
                    <br/>
                    <span className={styles.titleAccent}>С ГАРАНТИЕЙ РЕЗУЛЬТАТА</span>
                </h1>
                <div className="mb-auto">
                    <ActionButton className={styles.button} text="Бесплатная консультация" onClick={() => {}} />
                </div>
                <div className={styles.about}>
                    <Image className="mb-[21px]" src="/mainicon.png" alt="IT WORKS!" width={80} height={27} />
                    <h2 className={styles.service}>Создаём удобный и функциональный дизайн, который выведет ваш проект на новый уровень</h2>
                    <h3 className={styles.types}>Многостраничные сайты | Интернет-магазины | Соц. сети | Лендинги | Фирменный стиль | Презентации</h3>
                </div>
            </div>
        </div>
    )
}

export default Main