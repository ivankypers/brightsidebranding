import Spline from '@splinetool/react-spline/next';
import React from "react";
import styles from '../styles/Spline.module.scss'

const SplineModel : React.FC = () => {

    return (
        <Spline className={styles.model}
            scene="https://prod.spline.design/qrh5y4oKkagOwex4/scene.splinecode"
        />
    )
}

export default SplineModel