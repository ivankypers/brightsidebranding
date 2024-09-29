"use client"

import styles from '@/app/styles/Marque.module.scss'
import { motion } from 'framer-motion'

const Marque: React.FC = () => {
    const items = ["Branding", "Development", "Web Design", "Art Direction"];

    const duplicatedItems = [...items, ...items];

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.marquee}
                animate={{x: ['0%', '-25.3%']}}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: 'linear',
                }}
            >
                <ul className={styles.list}>
                    {duplicatedItems.map((item, index) => (
                        <li key={index} className={styles.item}>
                            {item}
                        </li>
                    ))}
                </ul>
                <ul className={styles.list}>
                    {duplicatedItems.map((item, index) => (
                        <li key={index} className={styles.item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}

export default Marque;
