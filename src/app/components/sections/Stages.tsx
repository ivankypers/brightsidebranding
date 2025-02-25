"use client"

import React from 'react';
import Image from 'next/image';
import ActionButton from "@/app/components/ActionButton";

import {motion} from 'framer-motion';

import styles from '@/app/styles/Stages.module.scss'
import clsx from "clsx";


const Stages: React.FC = () => {

    const scrollToForm = () => {
        const form = document.getElementById('requestForm');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.titleWrap}>
                    <h2 className={styles.title}>Мы предоставляем полный цикл разработки проекта любой цели и
                        масштаба</h2>
                    <div className={styles.subtitle}>[ЭТАПЫ РАБОТ]</div>
                </div>
                <div className={styles.cardWrap}>
                    <div className={styles.card}>
                        <div className="flex flex-col mb-auto">
                            <div className={styles.cardTitle}>00:<span>00</span></div>
                            <div className={styles.cardDsc}>LET`S ANALYSE!</div>
                        </div>
                        <div className={styles.cardSubtitle}>Полностью с нуля</div>
                    </div>

                    <div className={styles.card}>
                        <div className="flex flex-col mb-auto">
                            <div className={styles.cardTitle}><span>FIGMA</span></div>
                            <div className={styles.cardDsc}>FIGJAM</div>
                            <div className={styles.cardDsc}>MINDOCK</div>
                        </div>
                        <div className={styles.cardSubtitle}>Прототип</div>
                    </div>

                    <div className={styles.card}>
                        <div className={clsx("flex flex-col mb-auto", styles.stageCardImg)}>
                            <Image
                                src="/design.svg"
                                alt="Complex"
                                width={126}
                                height={126}
                            />
                        </div>
                        <div className={styles.cardSubtitle}>Дизайн</div>
                    </div>

                    <div className={styles.card}>
                        <div className={clsx("flex flex-col mb-auto", styles.stageCardImg)}>
                            <Image
                                src="/tabler_flag-question.svg"
                                alt="Support"
                                width={126}
                                height={126}
                            />
                        </div>
                        <div className={styles.cardSubtitle}>Поддержка</div>
                    </div>


                </div>
                <div className={styles.offer}>
                    <div className={styles.offerTitle}>
                        <h2 className={styles.title}>ПЕРВАЯ СТРАНИЦА ТВОЕГО ПРОЕКТА <span>БЕСПЛАТНО</span></h2>
                        <p className={styles.offerDsc}>Ответьте на несколько вопросов и учавствуйте в акции!</p>
                        <div>
                            <ActionButton className={styles.actionButton} text="Пройти опрос" onClick={scrollToForm}/>
                        </div>
                    </div>
                    <div className={clsx('relative', styles.imageBlock)}>
                        <Image
                            className={styles.cardImg}
                            src="/offercards.png"
                            alt="Complex"
                            width={642}
                            height={763}
                        />
                        <Image
                            className={styles.hand}
                            src="/hand.png"
                            alt="Complex"
                            width={1000}
                            height={1000}
                        ></Image>/
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stages