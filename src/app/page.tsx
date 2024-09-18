import Header from "./components/Header";
import Main from "./components/sections/Main";
import AboutUs from "@/app/components/sections/AboutUs";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import Stages from "@/app/components/sections/Stages";
import Service from "@/app/components/sections/Service";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
      <>
          <Header />
          <Main />
          <AboutUs />
          <ProjectsSection />
          <Stages />
          <Service />
          <Footer />
      </>
  );
}
