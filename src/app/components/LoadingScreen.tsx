"use client"

import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/app/styles/LoadingScreen.module.scss';
import AnimatedCounter from './AnimatedCounter';

const LoadingScreen: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 1}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 1 }}
            className={styles.container}
        >
            <div className={styles.text}>
                <AnimatedCounter suffix="" />
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
