import { projectSectionObject, sectionTitleObject } from "@/types/language";
import "./ProjectsSection.css";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import ProjectsSectionCard from "../ProjectsSectionCard/ProjectsSectionCard";

type ProjectsSectionProps = {
  sectionTitle: sectionTitleObject;
  data: projectSectionObject;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = (props) => {
  const { sectionTitle, data } = props;
  return (
    <article className="projectsSectionArticle" id={sectionTitle.slug}>
      <SectionTitle title={sectionTitle.title} />
      <section className="projectsSectionGrid">
        {data.projects.map((project, index) => {
          return (
            <ProjectsSectionCard
              key={index}
              cardData={project}
              buttonText={data.buttonText}
            />
          );
        })}
      </section>
    </article>
  );
};

export default ProjectsSection;
