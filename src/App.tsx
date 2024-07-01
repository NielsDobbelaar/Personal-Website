import "./App.css";
import { useEffect, useState } from "react";
import HeaderHero from "@/components/HeaderHero/HeaderHero";
import Header from "@/components/Header/Header";
import AboutSection from "@/components/aboutSection/AboutSection/AboutSection";
import ExperienceSection from "@/components/experienceSection/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/projectsSection/ProjectsSection/ProjectsSection";
import Footer from "@/components/Footer/Footer";

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderHero></HeaderHero>
      {scrollY === 0 ? <Header /> : null}
      {/*<nav>Nav</nav> */}
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
