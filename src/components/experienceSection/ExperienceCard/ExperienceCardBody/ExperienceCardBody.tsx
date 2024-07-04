import "./ExperienceCardBody.css";

type ExperienceCardBodyProps = {
  description: string;
  technologies?: string[];
  company?: string;
};

const ExperienceCardBody: React.FC<ExperienceCardBodyProps> = (props) => {
  const { description, technologies, company } = props;

  return (
    <article className="experienceCardBodyWrapper">
      {company ? (
        <p className="experienceCardBodyText">
          <strong>Company:</strong> {company}
        </p>
      ) : null}
      {technologies ? (
        <section className="experienceCardBodyTechnologiesSection">
          <p className="experienceCardBodyTechnologyText">
            <strong>Technologies:</strong>
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
