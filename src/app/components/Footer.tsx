"use client"

import React from "react";
import Image from "next/image";
import styles from '@/app/styles/Footer.module.scss'

const Footer : React.FC = () => {


    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="BSbranding" width={37} height={32} />
                    BrightSide Agency
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.socialWrap}>
                        <div>
                            <div className={styles.socialTitle}>МЕССЕНДЖЕРЫ</div>
                            <ul>
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
                    <div className={styles.actionWrap}>
                        <div>
                            <div className={styles.socialTitle}>СОЦ. СЕТИ</div>
                            <ul className={styles.listDual}>
                                <li className={styles.socialOther}><a href="">VKONTAKTE</a></li>
                                <li className={styles.socialOther}><a href="">TELEGRAM</a></li>
                            </ul>
                        </div>
                        <div>
                            <button className={styles.scrollTop}>
                                ВЕРНУТЬСЯ НАВЕРХ
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17"
                                     fill="none">
                                    <path
                                        d="M4.35355 0.646446C4.15829 0.451185 3.84171 0.451185 3.64645 0.646446L0.464466 3.82843C0.269203 4.02369 0.269203 4.34027 0.464466 4.53553C0.659728 4.7308 0.97631 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 17L4.5 1L3.5 1L3.5 17L4.5 17Z"
                                        fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer