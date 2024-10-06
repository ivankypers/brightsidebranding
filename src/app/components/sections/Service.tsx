"use client"

import React from 'react';
import ServicePopup from "@/app/components/popups/ServicePopup";

import styles from '@/app/styles/Service.module.scss'
import clsx from "clsx"

import Image from "next/image";
import ServiceStage from "@/app/components/ServiceStage";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";


import ContactForm from "@/app/components/ContactForm";


const Stages: React.FC = () => {
    const selectedService = useSelector((state: RootState) => state.service);

    return (
        <section className={clsx('pt-[128px]', styles.section)}>
            <div className="container">
                <div className="mb-[40px] md:mb-[80px] xl:mb-[128px]">
                    <h4>[УСЛУГИ]</h4>
                    <p>6+ НАПРАВЛЕНИЙ</p>
                </div>
                <div className={styles.preview}>
                    <div className={styles.serviceWrap} >
                        <ServicePopup
                            title="ЛЕНДИНГИ"
                            price="30 000"
                            deadline="15"
                            description="Одностраничный сайт, созданный для привлечения и конверсии посетителей в клиентов.
                            Идеально подходит для рекламных кампаний, продвижения продукта или услуги."
                            imageUrl="/landing.png"
                        />
                        <ServicePopup
                            title="МНОГОСТРАНИЧНЫЕ САЙТЫ"
                            price="80 000"
                            deadline="30"
                            description="Полноценный веб-ресурс с несколькими страницами, позволяющий детально представить ваш бизнес, услуги и продукты. Идеален для компаний, стремящихся обеспечить пользователей полной информацией и улучшить взаимодействие с клиентами."
                            imageUrl="/multipage.png"
                        />
                        <ServicePopup
                            title="ИНТЕРНЕТ-МАГАЗИНЫ"
                            price="100 000"
                            deadline="40"
                            description="Онлайн-платформа для продажи ваших товаров и услуг круглосуточно, без географических ограничений. Он позволяет расширить клиентскую базу, увеличить продажи и повысить узнаваемость вашего бренда."
                            imageUrl="/webstore.png"
                        />
                        <ServicePopup
                            title="ФИРМЕННЫЙ СТИЛЬ"
                            price="20 000"
                            deadline="15"
                            description="Комплекс визуальных и смысловых элементов, которые отражают индивидуальность вашего бизнеса и создают узнаваемый образ на рынке. Он помогает установить доверие с клиентами, выделиться среди конкурентов и эффективно передать ценности вашей компании."
                            imageUrl="/servicestyle.png"
                        />
                        <ServicePopup
                            title="ДИЗАЙН ПРЕЗЕНТАЦИИ"
                            price="80 000"
                            deadline="40"
                            description="Создание профессиональных и визуально привлекательных слайдов, которые эффективно передают вашу идею и удерживают внимание аудитории. Хорошо оформленная презентация помогает выделиться, улучшить восприятие информации и повысить шансы на успех ваших проектов."
                            imageUrl="/presentationdesign.png"
                        />
                        <ServicePopup
                            title="УПАКОВКА СОЦ. СЕТЕЙ"
                            price="10 000"
                            deadline="40"
                            description="Комплексный подход к дизайну ваших аккаунтов в социальных сетях, который включает создание уникальных визуальных элементов, согласованных с вашим брендом. Это помогает привлечь внимание, удержать аудиторию и повысить взаимодействие с клиентами."
                            imageUrl="/socialdesign.png"

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
                    <div>
                        <p className={styles.alert}>
                            *Цены указаны ориентировочно и могут буть индивидуальными для каждого проекта
                        </p>
                        <a href="/" className={styles.pdf} download>
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29"
                                 fill="none">
                                <path
                                    d="M14.5 19.3335L8.45831 13.2918L10.15 11.5397L13.2916 14.6814V4.8335H15.7083V14.6814L18.85 11.5397L20.5416 13.2918L14.5 19.3335ZM7.24998 24.1668C6.5854 24.1668 6.01667 23.9304 5.54381 23.4575C5.07095 22.9847 4.83412 22.4156 4.83331 21.7502V18.1252H7.24998V21.7502H21.75V18.1252H24.1666V21.7502C24.1666 22.4147 23.9302 22.9839 23.4574 23.4575C22.9845 23.9312 22.4154 24.1676 21.75 24.1668H7.24998Z"
                                    fill="white"/>
                            </svg>
                            скачать прайс лист
                        </a>
                    </div>
                </div>

                <div className={styles.bannerWrap}>
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
                        </div>
                        <Image
                            className={styles.star}
                            src="/star.svg"
                            alt="Star Procent"
                            width={377}
                            height={377}
                        />
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Stages