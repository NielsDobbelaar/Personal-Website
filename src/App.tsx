import "./App.css";
import { useState } from "react";
import HeaderHero from "@/components/HeaderHero/HeaderHero";
import AboutSection from "@/components/aboutSection/AboutSection/AboutSection";
import ExperienceSection from "@/components/experienceSection/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/projectsSection/ProjectsSection/ProjectsSection";
import Footer from "@/components/Footer/Footer";
import en from "@/data/en.ts";
import nl from "@/data/nl.ts";

import language from "@/types/language";
import Header from "@/components/Header/Header";

function App() {
  const [translations, setTranslations] = useState<language>(en);

  const changeLanguage = () => {
    if (translations === en) {
      setTranslations(nl);
    } else {
      setTranslations(en);
    }
  };

  return (
    <>
      <HeaderHero data={translations.header} />
      <Header
        changeLanguage={changeLanguage}
        data={translations.sectionTitles}
      />
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
        <ProjectsSection
          data={translations.projectSection}
          sectionTitle={translations.sectionTitles[2]}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
