"use client"
import React, {useRef} from "react";


import Header from "./components/Header";
import Main from "./components/sections/Main";
import AboutUs from "@/app/components/sections/AboutUs";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import Stages from "@/app/components/sections/Stages";
import Service from "@/app/components/sections/Service";
import Footer from "@/app/components/Footer";
import Marque from "@/app/components/Marque";

import {motion, AnimatePresence} from "framer-motion";

import './styles/Cursor.scss'
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/app/components/CustomCursor"), { ssr: false });

import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import LoadingScreen from "@/app/components/LoadingScreen";


export default function Home() {
    const isLoading = useSelector((state: RootState) => state.spline.isLoading);



  return (
      <>
          <AnimatePresence>
              {
                  isLoading && <LoadingScreen key="loading" />
              }
              <CustomCursor/>
          </AnimatePresence>
          <Header/>
          <Main/>
          <AboutUs/>
          <ProjectsSection/>
          <Stages/>
          <Service/>
          <Footer/>
          <Marque/>



      </>

  );
}
