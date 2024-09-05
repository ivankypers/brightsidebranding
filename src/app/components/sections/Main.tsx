"use client"

import React from 'react';
import styles from '@/app/styles/Main.module.scss'
import ActionButton from "@/app/components/ActionButton";

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
                <ActionButton text="Бесплатная консультация" onClick={() => {}} />
            </div>
        </div>
    )
}

export default Main