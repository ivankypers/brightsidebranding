import styles from "@/app/styles/Projects.module.scss";
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";

interface CardProps {
    title: string;
    type: string;
    stack: string;
    imgUrl: string;
}

const ProjectCard: React.FC<CardProps> = ({title, type,stack,imgUrl}) => {

    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1, ease: 'easeInOut'}}
            className={styles.cardWrap}>
            <Image src={imgUrl} className={styles.img}  alt={title} width={765} height={621} />
            <div className={styles.dsc}>
                <div className={styles.col}>
                    <span>{title}</span>
                    <span>{type}</span>
                </div>
                <div>{stack}</div>
            </div>
        </motion.div>
    )
}

export default ProjectCard