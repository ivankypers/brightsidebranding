import styles from "@/app/styles/Projects.module.scss";
import Image from "next/image";
import React from "react";

interface CardProps {
    title: string;
    type: string;
    stack: string;
    imgUrl: string;
}

const ProjectCard: React.FC<CardProps> = ({title, type,stack,imgUrl}) => {

    return (
        <div className={styles.cardWrap}>
            <Image src={imgUrl} className={styles.img}  alt={title} width={765} height={621} />
            <div className={styles.dsc}>
                <div className={styles.col}>
                    <span>{title}</span>
                    <span>{type}</span>
                </div>
                <div>{stack}</div>
            </div>
        </div>
    )
}

export default ProjectCard