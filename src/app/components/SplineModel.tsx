import React, { useEffect, Suspense } from "react";
import styles from '../styles/Spline.module.scss';
const Spline = React.lazy(() => import('@splinetool/react-spline/next'));

import {useDispatch, useSelector} from "react-redux";
import { loadStart, loadProgress, loadEnd } from "@/redux/slices/splineSlice";
import {RootState} from "@/redux/store";

const SplineModel: React.FC = () => {
    const isLoading = useSelector((state: RootState) => state.spline.isLoading);
    const dispatch = useDispatch();

    const handleSplineLoaded = () => {


        dispatch(loadEnd())
    }

    return (

        <Spline
            className={`${styles.model} ${!isLoading ? styles.visible : ''}`}
            scene="https://prod.spline.design/qrh5y4oKkagOwex4/scene.splinecode"
            onLoad={handleSplineLoaded}
        />
    );
}

export default SplineModel;
