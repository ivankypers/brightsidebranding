import React, { useState, Suspense } from "react";
import styles from '../styles/Spline.module.scss'
const Spline = React.lazy(() => import('@splinetool/react-spline/next'));


const SplineModel: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <Suspense fallback={<></>}>
                <Spline
                    className={`${styles.model} ${loaded ? styles.visible : ''}`}
                    scene="https://prod.spline.design/qrh5y4oKkagOwex4/scene.splinecode"
                    onLoad={() => {
                        setLoaded(true);
                    }}
                />
            </Suspense>
        </>
    )
}

export default SplineModel
