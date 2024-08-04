import "./App.css";
import { useEffect, useState } from "react";
import HeaderHero from "@/components/HeaderHero/HeaderHero";
import Header from "@/components/Header/Header";
import AboutSection from "@/components/aboutSection/AboutSection/AboutSection";
import ExperienceSection from "@/components/experienceSection/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/projectsSection/ProjectsSection/ProjectsSection";
import Footer from "@/components/Footer/Footer";
import en from "@/data/en.ts";
import nl from "@/data/nl.ts";

import language from "@/types/language";

function App() {
  const [translations, setTranslations] = useState<language>(en);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const changeLanguage = () => {
    if (translations === en) {
      setTranslations(nl);
    } else {
      setTranslations(en);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HeaderHero data={translations.header} />
      {!isMobile ? (
        <Header
          changeLanguage={changeLanguage}
          data={translations.sectionTitles}
        />
      ) : null}
      {/*<nav>Nav</nav> */}
      <main>
        <AboutSection
          sectionTitle={translations.sectionTitles[0]}
          data={translations.aboutSection}
        />
        <ExperienceSection
          sectionTitle={translations.sectionTitles[1]}
          data={translations.experienceSection}
        />
        <ProjectsSection sectionTitle={translations.sectionTitles[2]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
