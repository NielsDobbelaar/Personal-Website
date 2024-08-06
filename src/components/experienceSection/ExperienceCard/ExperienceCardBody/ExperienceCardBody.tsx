import { titlesObject } from "@/types/language";
import "./ExperienceCardBody.css";

type ExperienceCardBodyProps = {
  description: string;
  technologies?: string[];
  company?: string;
  titles: titlesObject;
};

const ExperienceCardBody: React.FC<ExperienceCardBodyProps> = (props) => {
  const { description, technologies, company, titles } = props;

  console.log(titles);
  return (
    <article className="experienceCardBodyWrapper">
      {company ? (
        <p className="experienceCardBodyText">
          <strong>{titles.company}:</strong> {company}
        </p>
      ) : null}
      {technologies ? (
        <section className="experienceCardBodyTechnologiesSection">
          <p className="experienceCardBodyTechnologyText">
            <strong>{titles.technologies}:</strong>
          </p>
          {technologies.map((technology, index) => (
            <p
              key={"Technology: " + index}
              className="experienceCardBodyTechnologyText"
            >
              {technology + (index < technologies.length - 1 ? "," : "")}
            </p>
          ))}
        </section>
      ) : null}
      <p className="experienceCardBodyText">{description}</p>
    </article>
  );
};

export default ExperienceCardBody;
