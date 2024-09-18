import React from "react";
import styles from  "@/app/styles/Constructor.module.scss"

export default function RequestConstructor() {


    return (
        <div className={styles.container}>
            <div>
                <h2>Какая основная цель создания сайта?</h2>
                <p>Можно выбрать несколько вариантов</p>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    <div>Ваши бонусы:</div>
                    <div>
                        <div>Бесплатная консультация</div>
                        <div>Блок/страница сайта</div>

                    </div>
                </div>
            </div>
        </div>
    )
}
