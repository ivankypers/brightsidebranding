"use client"

import React, {useRef} from "react";
import ActionButton from "@/app/components/ActionButton";
import styles from '@/app/styles/Header.module.scss'
import Image from "next/image";

const Header: React.FC = () => {
    const headerContainer = useRef<HTMLHeadElement>(null)




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
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <a href="#">Проекты</a>
                        </li>
                        <li>
                            <a href="#">Отзывы</a>
                        </li>
                        <li>
                            <a href="#">Услуги</a>
                        </li>
                        <li>
                            <a href="#">Команда</a>
                        </li>
                    </ul>
                </nav>

                <ActionButton text="Связаться с нами" onClick={() => alert('Похуй')}/>
            </div>
        </header>
    )

}

export default Header;