
import React, { useState, Suspense } from "react";
import styles from '../styles/Spline.module.scss'
const Spline = React.lazy(() => import('@splinetool/react-spline/next'));

import {useSelector, useDispatch} from "react-redux";
import {setLoaded} from "@/redux/slices/splineSlice";


const SplineModel: React.FC = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: any) => state.spline.loaded)



    return (
        <>
            <Suspense fallback={<></>}>
                <Spline
                    className={`${styles.model} ${!isLoading ? styles.visible : ''}`}
                    scene="https://prod.spline.design/qrh5y4oKkagOwex4/scene.splinecode"
                    onLoad={() => {
                        setTimeout(() => {
                            dispatch(setLoaded(false));
                        }, 4000)
                    }}
                />
            </Suspense>
        </>
    )
}

export default SplineModel
