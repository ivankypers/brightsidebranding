// components/CustomCursor.jsx
"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import '@/app/styles/Cursor.scss';

const CustomCursor = () => {
    const { cursorVariant, cursorText } = useSelector((state: RootState) => state.cursor);
    const mouse = useMouse(document.body, {
        enterDelay: 100,
        leaveDelay: 100,
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = (mouse.clientX ?? 0) - 8;
    }

    if (mouse.y !== null) {
        mouseYPosition = (mouse.clientY ?? 0) - 8;
    }

    const variants = {
        default: {
            opacity: 1,
            height: 12,
            width: 12,
            fontSize: "16px",
            backgroundColor: "#FF672D",
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        contact: {
            opacity: 1,
            height: 64,
            width: 64,
            fontSize: "24px",
            backgroundColor: "#fff",
            x: mouseXPosition - 30,
            y: mouseYPosition - 30,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        link: {
            opacity: 1,
            height: 32,
            width: 32,
            fontSize: "12px",
            backgroundColor: "#fff",
            color: "#000",
            x: mouseXPosition - 14,
            y: mouseYPosition - 14,
            transition: {
                type: "spring",
                mass: 0.6
            }
        }

    };

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    return (

            <motion.div
                variants={variants}
                className="circle"
                animate={cursorVariant as string}
                transition={spring}
                style={{position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 1000}}
            >
                <span className="cursorText">{cursorText}</span>
            </motion.div>

    );
};

export default CustomCursor;
