import styles from "@/app/styles/About.module.scss";
import React from "react";


interface CardProps {
    title: string;
    description: string;
}

const AboutCard : React.FunctionComponent<CardProps> = ({title, description}) => {

    return (
        <div className={styles.aboutCard}>
            <div className={styles.textWrap}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDsc}>{description}</p>
            </div>
        </div>
    )
}

export default AboutCard;