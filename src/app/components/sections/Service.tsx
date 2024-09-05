"use client"

import React from 'react';
import ServicePopup from "@/app/components/popups/ServicePopup";
import styles from '@/app/styles/Service.module.scss'
import ActionButton from "@/app/components/ActionButton";
import Image from "next/image";
import RequestInput from "@/app/components/RequestInput";


const Stages: React.FC = () => {

    return (
        <section className="pt-[128px]" >
            <div className="container">
                <div className="mb-[128px]">
                    <h4>[УСЛУГИ]</h4>
                    <p>6+ НАПРАВЛЕНИЙ</p>
                </div>
                <div className={styles.serviceWrap}>
                    <ServicePopup title="ЛЕНДИНГИ" />
                    <ServicePopup title="МНОГОСТРАНИЧНЫЕ САЙТЫ" />
                    <ServicePopup title="ИНТЕРНЕТ МАГАЗИНЫ" />
                    <ServicePopup title="ФИРМЕННЫЙ СТИЛЬ" />
                    <ServicePopup title="ДИЗАЙН ПРЕЗЕНТАЦИЙ" />
                    <ServicePopup title="УПАКОВКА СОЦ. СЕТЕЙ" />
                </div>
                <div className="flex justify-end mb-[120px]">
                    <ActionButton className={styles.button} text="Обсудить проект" onClick={() => {}} />
                </div>
                <div>
                    <div className={styles.banner}>
                        <h2 className={styles.actionTitle}>
                            ХОТИТЕ <span>ОБСУДИТЬ ПРОЕКТ?</span>
                        </h2>
                        <div className="flex flex-col relative">
                            <div className={styles.contact}>
                                [СВЯЗАТЬСЯ С НАМИ]
                            </div>
                            <p className={styles.requestDsc}>
                                Оставьте заявку ниже и наш менеджер свяжется с вами в ближайшее время
                            </p>
                            <Image
                                className={styles.star}
                                src="/star.svg"
                                alt="Star Procent"
                                width={377}
                                height={377}
                            />
                        </div>
                    </div>
                    <form action="">
                        <div className={styles.inputs}>
                            <div className="flex flex-col gap-[24px]">
                                <RequestInput title="ИМЯ & КОМПАНИЯ" placeholder="JOHN, COMPANY" />
                                <RequestInput title="EMAIL или TELEGRAM" placeholder="@USERNAME" />
                            </div>
                            <div>
                                <RequestInput title="С ЧЕМ МЫ МОЖЕМ ВАМ ПОМОЧЬ?" placeholder="СОЗДАНИЕ БОТА, ДИЗАЙН И Т.Д." />
                            </div>
                        </div>
                        <div>
                            <button className={styles.formButton}>ПОЛУЧИТЬ БЕСПЛАТНЫЙ ПЛАН ПРОЕКТА</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Stages