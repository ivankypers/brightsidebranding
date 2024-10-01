// src/components/AnimatedCounter.tsx
import React, { useEffect, useState } from 'react';
import { useMotionValue, animate } from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';
import {loadProgress} from "@/redux/slices/splineSlice";
import { RootState } from '@/redux/store';

interface AnimatedCounterProps {
    suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ suffix = '' }) => {
    const progress = useSelector((state: RootState) => state.spline.progress);
    const motionValue = useMotionValue(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = animate(motionValue, progress, {
            duration: 0.5,
            ease: 'linear',
            onUpdate: (latest) => {
                setCount(Math.floor(latest));
            },
        });

        return () => controls.stop();
    }, [progress, motionValue]);

    return <span>{count}{suffix}</span>;
};

export default AnimatedCounter;
