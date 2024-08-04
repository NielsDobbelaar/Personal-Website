import { sectionTitleObject, experienceSectionObject } from "@/types/language";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./ExperienceSection.css";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";

type ExperienceSectionProps = {
  sectionTitle: sectionTitleObject;
  data: experienceSectionObject;
};

const ExperienceSection: React.FC<ExperienceSectionProps> = (props) => {
  const { data, sectionTitle } = props;
  return (
    <article className="experienceSectionWrapper" id={sectionTitle.slug}>
      <SectionTitle title={sectionTitle.title} />
      <section className="experienceSection">
        <h2 className="experienceSectionHeader">Work Experience</h2>
        {data.workExperience.map((experienceItem, index) => (
          <ExperienceCard
            key={"ExperienceItem: " + index}
            data={experienceItem}
          />
        ))}
      </section>
      <section className="experienceSection">
        <h2 className="experienceSectionHeader">Education</h2>
        {data.education.map((educationItem, index) => (
          <ExperienceCard
            key={"EducationItem: " + index}
            data={educationItem}
          />
        ))}
      </section>
    </article>
  );
};

export default ExperienceSection;
