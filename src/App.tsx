import "./App.css";
import { useEffect, useState } from "react";
import HeaderHero from "@/components/HeaderHero/HeaderHero";
import Header from "@/components/Header/Header";
import AboutSection from "@/components/aboutSection/AboutSection/AboutSection";
import ExperienceSection from "@/components/experienceSection/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/projectsSection/ProjectsSection/ProjectsSection";
import Footer from "@/components/Footer/Footer";
import en from "@/data/en.ts";
import language from "@/types/language";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [translations, setTranslations] = useState<language>(en);

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
      <HeaderHero data={translations.header} />
      {scrollY === 0 ? <Header /> : null}
      {/*<nav>Nav</nav> */}
      <main>
        <AboutSection data={translations.aboutSection} />
        <ExperienceSection data={translations.experienceSection} />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
