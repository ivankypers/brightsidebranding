"use client"

import React, {useEffect, useRef} from "react";
import styles from '@/app/styles/Showcase.module.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Регистрация плагина GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


const Showcase: React.FC = () => {
    const caseRef = useRef<HTMLImageElement>(null);
    const caseRef2 = useRef<HTMLImageElement>(null);
    const caseRef3 = useRef<HTMLImageElement>(null);
    const caseRef4 = useRef<HTMLImageElement>(null);


    const animationStart = 'top-=1600px'
    const animationEnd = 'top+=100px'

    const animationRotationRight = 45;
    const animationRotationLeft = 45;

    useEffect(() => {
        if (caseRef.current) {
            gsap.fromTo(caseRef.current, {
                scale: 0.3,
                rotation: animationRotationRight,
            }, {
                scale: 1,
                rotation: 0,
                scrollTrigger: {
                    trigger: caseRef.current,
                    start: animationStart,
                    end: animationEnd,
                    markers: true,
                    scrub: true,
                },
            });

            gsap.fromTo(caseRef2.current, {
                scale: 0.3,
                rotation: -Math.PI / 2,
            }, {
                scale: 1,
                rotation: 0,
                scrollTrigger: {
                    trigger: caseRef.current,
                    start: animationStart,
                    end: animationEnd,
                    markers: true,
                    scrub: true,
                },
            });

            gsap.fromTo(caseRef3.current, {
                scale: 0.3,
                rotation: Math.PI / 2,
            }, {
                scale: 1,
                rotation: 0,
                scrollTrigger: {
                    trigger: caseRef.current,
                    start: animationStart,
                    end: animationEnd,
                    markers: true,
                    scrub: true,
                },
            });

            gsap.fromTo(caseRef4.current, {
                scale: 0.3,
                rotation: animationRotationRight,
            }, {
                scale: 1,
                rotation: 0,
                scrollTrigger: {
                    trigger: caseRef.current,
                    start: animationStart,
                    end: animationEnd,
                    markers: true,
                    scrub: true,
                },
            });

        }

    }, []);

    return (
        <></>

        /*<div className={styles.wrapper}>
            <div className={styles.soloWrap}>
                <img ref={caseRef} className={styles.image} src="/showcase.avif" alt=""/>
                <img ref={caseRef4} className={styles.image} src="/showcase.avif" alt=""/>
            </div>
            <div className={styles.doubleWrap}>
                <img ref={caseRef2} className={styles.image} src="/showcase.avif" alt=""/>
                <img ref={caseRef3} className={styles.image} src="/showcase.avif" alt=""/>
            </div>

        </div>*/
    )
}

export default Showcase;