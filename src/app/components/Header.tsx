"use client"

import React, {useState, useEffect, useRef, useCallback} from "react";
import ActionButton from "@/app/components/ActionButton";
import Image from "next/image";

import gsap from "gsap";
import {motion, AnimatePresence} from "framer-motion";

import {useDispatch} from "react-redux";
import {setCursorText, setCursorVariant} from "@/redux/slices/CursorSlice";

import styles from '@/app/styles/Header.module.scss'
import clsx from "clsx";

const Header: React.FC = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const headerContainer = useRef<HTMLHeadElement>(null)
    const burgerMenu = useRef<HTMLDivElement>(null)
    const blurLayer = useRef<HTMLDivElement>(null)

    const dispatch = useDispatch();

    function linkEnter(event: any) {
        dispatch(setCursorVariant('link'))
        dispatch(setCursorText('go!'))
    }

    function linkLeave(event: any) {
        dispatch(setCursorVariant('default'))
        dispatch(setCursorText(''))
    }


    const headerLinks = [
        {
        name: 'О нас',
        url: 'aboutUs'
        },
        {
            name: 'Проекты',
            url: 'projects'
        },
        {
            name: 'Этапы',
            url: 'stages'
        },
        {
            name: 'Услуги',
            url: 'service'
        },
    ]


    useEffect(() => {
        if (headerContainer.current) {
            const height = headerContainer.current.offsetHeight;
            setHeaderHeight(height);

            gsap.fromTo(headerContainer.current, {y: -300, opacity: 0}, {
                y:0,
                opacity: 1,
                duration: 1,
                ease: '0.65, 0, 0.35, 1'
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
        window.addEventListener('scroll', controlHeader);

        if (isBurgerOpen) {
            animateBurgerMenu(true);
        }

        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [isBurgerOpen, animateBurgerMenu, headerHeight, lastScrollY]);

    const onMenuClick = () => {
        if (isAnimating) return;
        if (isBurgerOpen) {
            animateBurgerMenu(false);
        } else {
            setIsBurgerOpen(true);
        }
    };

    const controlHeader = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            // Прокрутка вниз
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    const variants = {
        hidden: { y: '-100%' },
        visible: { y: 0 },
    };

    const scrollToForm = () => {
        const form = document.getElementById('requestForm');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            <motion.header
                variants={variants}
                initial="visible"
                animate={isVisible ? 'visible' : 'hidden'}
                ref={headerContainer}
                className={styles.header}>
                <div className="container">
                    <div
                        className={styles.logo}
                    >
                        <Image src="/logo.png" alt="BSbranding" width={41} height={41}/>
                        <div>
                            BRIGHTSIDE BRANDING
                        </div>

                    </div>
                    <motion.button
                        initial={{ rotate: 0}}
                        animate={{ rotate: isBurgerOpen ? 45 : 0 }}
                        className={clsx(styles.menu, isBurgerOpen && styles.menuActive)}
                        onClick={onMenuClick}>
                        <span></span>
                    </motion.button>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            {
                                headerLinks.map((item, i) => (
                                    <li key={i}
                                        onMouseEnter={linkEnter}
                                        onMouseLeave={linkLeave}
                                    ><a className={styles.burgerLink} href={`#${item.url}`}>{item.name}</a></li>
                                ))
                            }
                        </ul>
                    </nav>

                    <ActionButton text="Связаться с нами" onClick={scrollToForm} />
                </div>
                <div ref={burgerMenu} className={styles.burger}>
                    <div className={styles.burgerInner}>
                    <ul className={styles.burgerList}>
                        {
                            headerLinks.map((item, i) => (
                                <li key={i}
                                    onMouseEnter={linkEnter}
                                    onMouseLeave={linkLeave}
                                ><a className={styles.burgerLink} href={`#${item.url}`}>{item.name}</a></li>
                            ))
                        }
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
            </motion.header>

        </AnimatePresence>
    )

}

export default Header;