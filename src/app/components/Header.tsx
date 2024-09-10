"use client"

import React, {useEffect, useRef} from "react";
import ActionButton from "@/app/components/ActionButton";
import styles from '@/app/styles/Header.module.scss'
import Image from "next/image";
import gsap from "gsap";

const Header: React.FC = () => {
    const headerContainer = useRef<HTMLHeadElement>(null)


    useEffect(() => {

        gsap.fromTo(headerContainer.current, {y: -400, opacity: 0}, {
            y:0,
            opacity: 1,
            duration: 1,
            ease: "power2.Out"
        })
    }, []);


    return (
        <header ref={headerContainer} className={styles.header}>
            <div className="container">
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="BSbranding" width={41} height={41} />
                    <div>
                        BRIGHTSIDE BRANDING
                    </div>
                    <button className={styles.menu}>
                        <span></span>
                    </button>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li>
                            <a href="#" className={styles.link}>О нас</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Проекты</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Отзывы</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Услуги</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Команда</a>
                        </li>
                    </ul>
                </nav>

                <ActionButton text="Связаться с нами" onClick={() => alert('Похуй')}/>
            </div>
        </header>
    )

}

export default Header;