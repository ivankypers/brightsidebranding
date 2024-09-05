import styles from "@/app/styles/Projects.module.scss";

interface CardProps {
    title: string;
    type: string;
    stack: string;
    imgUrl: string;
}

const ProjectCard: React.FC<CardProps> = ({title, type,stack,imgUrl}) => {

    return (
        <div className={styles.cardWrap}>
            <img src={imgUrl} className={styles.img}  alt={title}/>
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