"use client"

import React, {useState, useEffect, useRef, useCallback} from "react";
import ActionButton from "@/app/components/ActionButton";
import Image from "next/image";
import gsap from "gsap";

import styles from '@/app/styles/Header.module.scss'
import clsx from "clsx";

const Header: React.FC = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    const headerContainer = useRef<HTMLHeadElement>(null)
    const burgerMenu = useRef<HTMLDivElement>(null)
    const blurLayer = useRef<HTMLDivElement>(null)


    useEffect(() => {
        if (headerContainer.current) {
            const height = headerContainer.current.offsetHeight;
            console.log('Высота ---', height)
            setHeaderHeight(height);

            gsap.fromTo(headerContainer.current, {y: -300, opacity: 0}, {
                y:0,
                opacity: 1,
                duration: 1,
                ease: "power2.Out"
            })
        }

    }, []);

    const animateBurgerMenu = useCallback((open: boolean) => {
        if (burgerMenu.current) {
            setIsAnimating(true);
            const menuHeight = `calc(100vh - ${headerHeight}px)`;
            if (open) {
                gsap.fromTo(burgerMenu.current, { height: '0' }, {
                    height: menuHeight,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => setIsAnimating(false)
                });
            } else {
                gsap.to(burgerMenu.current, {
                    height: '0',
                    duration: 0.5,
                    ease: "power2.in",
                    onComplete: () => {
                        setIsAnimating(false);
                        setIsBurgerOpen(false);
                    }
                });
            }
        }
    }, []);

    useEffect(() => {
        console.log('Высота при втором эффекте', headerHeight)
        if (isBurgerOpen) {
            animateBurgerMenu(true);
        }
    }, [isBurgerOpen, animateBurgerMenu, headerHeight]);

    const onMenuClick = () => {
        if (isAnimating) return;
        if (isBurgerOpen) {
            animateBurgerMenu(false);
        } else {
            setIsBurgerOpen(true);
        }
    };


    return (
        <>
            <header ref={headerContainer} className={styles.header}>
                <div className="container">
                    <div className={styles.logo}>
                        <Image src="/logo.png" alt="BSbranding" width={41} height={41}/>
                        <div>
                            BRIGHTSIDE BRANDING
                        </div>

                    </div>
                    <button className={clsx(styles.menu, isBurgerOpen && styles.menuActive)} onClick={onMenuClick}>
                        <span></span>
                    </button>
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

                    <ActionButton text="Связаться с нами" onClick={() => alert('k')}/>
                </div>
                <div ref={burgerMenu} className={styles.burger}>
                    <div className={styles.burgerInner}>
                    <ul className={styles.burgerList}>
                            <li><a className={styles.burgerLink} href="">О НАС</a></li>
                            <li><a className={styles.burgerLink} href="">ПРОЕКТЫ</a></li>
                            <li><a className={styles.burgerLink} href="">ОТЗЫВЫ</a></li>
                            <li><a className={styles.burgerLink} href="">УСЛУГИ</a></li>
                            <li><a className={styles.burgerLink} href="">КОМАНДА</a></li>
                        </ul>
                        <div className={styles.socialWrap}>
                            <div>
                                <div className={styles.socialTitle}>МЕССЕНДЖЕРЫ</div>
                                <ul className={styles.list}>
                                    <li className={styles.social}><a href="">TELEGRAM</a></li>
                                    <li className={styles.social}><a href="">WHATSAPP</a></li>
                                </ul>
                            </div>
                            <div>
                                <div className={styles.socialTitle}>ПОРТФОЛИО</div>
                                <ul className={styles.list}>
                                    <li className={styles.social}><a href="">BEHANCE</a></li>
                                    <li className={styles.social}><a href="">DRIBBLE</a></li>
                                    <li className={styles.social}><a href="">DPROFILE</a></li>
                                    <li className={styles.social}><a href="">GITHUB</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

        </>
    )

}

export default Header;