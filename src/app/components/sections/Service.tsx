"use client"

import React from 'react';
import ServicePopup from "@/app/components/popups/ServicePopup";
import styles from '@/app/styles/Service.module.scss'
import ActionButton from "@/app/components/ActionButton";
import Image from "next/image";
import RequestInput from "@/app/components/RequestInput";
import ServiceStage from "@/app/components/ServiceStage";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";


const Stages: React.FC = () => {
    const selectedService = useSelector((state: RootState) => state.service);

    console.log(selectedService)

    return (
        <section className="pt-[128px]" >
            <div className="container">
                <div className="mb-[128px]">
                    <h4>[УСЛУГИ]</h4>
                    <p>6+ НАПРАВЛЕНИЙ</p>
                </div>
                <div className={styles.preview}>
                    <div className={styles.serviceWrap}>
                        <ServicePopup
                            title="ЛЕНДИНГИ"
                            price="30 000"
                            deadline="30"
                            description="Описание для лендингов"
                            imageUrl="/landing.png"
                        />
                        <ServicePopup
                            title="МНОГОСТРАНИЧНЫЕ САЙТЫ"
                            price="40 000"
                            deadline="40"
                            description="Описание для многостраничных сайтов"
                            imageUrl="/landing.png"
                        />
                        <ServicePopup
                            title="ИНТЕРНЕТ-МАГАЗИНЫ"
                            price="80 000"
                            deadline="40"
                            description="Описание для многостраничных сайтов"
                            imageUrl="/landing.png"
                        />

                    </div>
                    <div className={styles.stageWrap}>
                        {selectedService.title && (
                            <ServiceStage
                                title={selectedService.title}
                                price={selectedService.price}
                                deadline={selectedService.deadline}
                                description={selectedService.description}
                                imageUrl={selectedService.imageUrl}
                            />
                        )}
                    </div>
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