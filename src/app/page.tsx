"use client"
import React from "react";


import Header from "./components/Header";
import Main from "./components/sections/Main";
import AboutUs from "@/app/components/sections/AboutUs";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import Stages from "@/app/components/sections/Stages";
import Service from "@/app/components/sections/Service";
import Footer from "@/app/components/Footer";
import Marque from "@/app/components/Marque";


import {useDispatch, useSelector} from "react-redux";
import {setCursorText, setCursorVariant} from "@/redux/slices/CursorSlice";
import {RootState} from "@/redux/store";

import useMouse from "@react-hook/mouse-position";
import {motion} from "framer-motion";

import './styles/Cursor.scss'


export default function Home() {
    const dispatch = useDispatch();
    const { cursorVariant, cursorText } = useSelector((state: RootState) => state.cursor);


    const ref = React.useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100,
    });

    let mouseXPosition: number | null = 0;
    let mouseYPosition: number | null = 0;

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
        project: {
            opacity: 1,
            backgroundColor: "#fff",
            color: "#000",
            height: 80,
            width: 80,
            fontSize: "18px",
            x: mouseXPosition - 32,
            y: mouseYPosition - 32
        },
        contact: {
            opacity: 1,
            backgroundColor: "#FFF",
            color: "#000",
            height: 64,
            width: 64,
            fontSize: "32px",
            x: mouseXPosition - 32,
            y: mouseYPosition - 32
        },
        link: {
            opacity: 1,
            backgroundColor: "#FFF",
            color: "#000",
            height: 32,
            width: 32,
            fontSize: "12px",
            x: mouseXPosition - 16,
            y: mouseYPosition - 16
        }
    };

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    function projectEnter(event: any) {
        setCursorText("View");
        setCursorVariant("project");
    }

    function projectLeave(event: any) {
        setCursorText("");
        setCursorVariant("default");
    }

    function contactEnter(event: any) {
        setCursorText("👋");
        setCursorVariant("contact");
    }

    function contactLeave(event: any) {
        dispatch(setCursorText(""));
        dispatch(setCursorVariant("default"));
    }



  return (
      <div ref={ref}>
          <Header/>
          <Main/>
          <AboutUs/>
          <ProjectsSection/>
          <Stages/>
          <Service/>
          <Footer/>
          <Marque/>
          <motion.div
              variants={variants}
              className="circle"
              animate={cursorVariant as string}
              transition={spring}
          >
              <span className="cursorText">{cursorText}</span>
          </motion.div>
      </div>
  );
}
