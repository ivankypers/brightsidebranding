import aboutStyles from "@/app/styles/About.module.scss";
import styles from "@/app/styles/Projects.module.scss";
import React from "react";
import ProjectCard from "@/app/components/cards/ProjectCard";

const ProjectsSection : React.FC = () => {


    return (
        <section>
            <div className="container">
                <div className={aboutStyles.titleWrap}>
                    <div className={aboutStyles.subtitle}>[&gt; 20 ПРОЕКТОВ ВЫПОЛНЕНО]</div>
                    <div className={aboutStyles.title}>РЕАЛИЗОВАННЫЕ <span>ПРОЕКТЫ</span></div>
                </div>
                <div className={aboutStyles.titleWrap}>
                    <div className={aboutStyles.subtitle}>[ПОРТФОЛИО]</div>
                    <div className={aboutStyles.description}>Наши работы помогают опередить конкурентов на годы вперед и вывести имидж компании на новый уровень.</div>
                </div>
                <div className={styles.projectsWrap}>
                    <ProjectCard title="DEADCODE" type="Многостраничный сайт" stack="Продукт / Услуга" imgUrl={'/DEADCODE.png'} />
                    <ProjectCard title="DEADCODE" type="Многостраничный сайт" stack="Продукт / Услуга" imgUrl={'/bsproj.png'} />
                    <ProjectCard title="DEADCODE" type="Многостраничный сайт" stack="Продукт / Услуга" imgUrl={'/cqproj.png'} />
                    <ProjectCard title="DEADCODE" type="Многостраничный сайт" stack="Продукт / Услуга" imgUrl={'/uproj.png'} />
                </div>
            </div>
            <div className={styles.allprojects}>
                <div className="container">
                    <a className={styles.projectsLink} href="/">ПОСМОТРЕТЬ ВСЕ ПРОЕКТЫ
                        <svg xmlns="http://www.w3.org/2000/svg" width="166" height="30" viewBox="0 0 166 30"
                             fill="none">
                            <path
                                d="M165.414 16.4142C166.195 15.6332 166.195 14.3668 165.414 13.5858L152.686 0.857864C151.905 0.0768156 150.639 0.0768156 149.858 0.857864C149.077 1.63891 149.077 2.90524 149.858 3.68629L161.172 15L149.858 26.3137C149.077 27.0948 149.077 28.3611 149.858 29.1421C150.639 29.9232 151.905 29.9232 152.686 29.1421L165.414 16.4142ZM0 17H164V13H0V17Z"
                                fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default ProjectsSection