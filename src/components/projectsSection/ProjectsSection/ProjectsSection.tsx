import { sectionTitleObject } from "@/types/language";
import "./ProjectsSection.css";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";

type ProjectsSectionProps = {
  sectionTitle: sectionTitleObject;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = (props) => {
  const { sectionTitle } = props;
  return (
    <article id={sectionTitle.slug}>
      <SectionTitle title={sectionTitle.title} />
    </article>
  );
};

export default ProjectsSection;
