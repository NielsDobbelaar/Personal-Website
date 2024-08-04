import SocialsBlock from "@/components/common/socialsBlock/SocialsBlock";
import "./AboutSection.css";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import { aboutSectionObject, sectionTitleObject } from "@/types/language";
import TechnologyCard from "@/components/aboutSection/TechnologyCard/TechnologyCard";
import { motion, Variants } from "framer-motion";

type AboutSectionProps = {
  sectionTitle: sectionTitleObject;
  data: aboutSectionObject;
};

const imageVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const AboutSection: React.FC<AboutSectionProps> = (props) => {
  const { data, sectionTitle } = props;

  return (
    <>
      <SectionTitle title={sectionTitle.title} />
      <article className="aboutMeWrapper">
        <div className="aboutMeIdWrapper" id={sectionTitle.slug}></div>
        <section className="aboutMeTextSection">
          {data.body.map((paragraph, index) => {
            return (
              <p key={"paragraph:" + index} className="aboutMeParagraph">
                {paragraph}
              </p>
            );
          })}
        </section>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="aboutMeBioSection"
        >
          <motion.img
            className="aboutMeImage"
            src={data.imageURL}
            alt="profile image"
            variants={imageVariants}
          />
          <div className="aboutMeSocialsBlockWrapper">
            <SocialsBlock />
          </div>
        </motion.section>
      </article>
      <article className="TechnologiesArticle">
        <h3 className="technologiesTitle">{data.technologiesTitle}</h3>
        <motion.section
          className="technologiesWrapper"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.technologies.map((technology) => {
            return (
              <TechnologyCard key={technology.name} technology={technology} />
            );
          })}
        </motion.section>
      </article>
    </>
  );
};

export default AboutSection;
