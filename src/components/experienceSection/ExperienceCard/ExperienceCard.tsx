import { useState } from "react";
import { experienceObject, titlesObject } from "@/types/language";
import "./ExperienceCard.css";
import ExperienceCardHeader from "@/components/experienceSection/ExperienceCard/ExperienceCardHeader/ExperienceCardHeader";
import ExperienceCardBody from "@/components/experienceSection/ExperienceCard/ExperienceCardBody/ExperienceCardBody";

type ExperienceCardProps = {
  data: experienceObject;
  titles: titlesObject;
};

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  const { data, titles } = props;

  const [isBodyOpen, setIsBodyOpen] = useState<boolean>(false);

  const switchBodyOpen = () => {
    setIsBodyOpen(!isBodyOpen);
  };

  return (
    <article className="experienceCardArticle" onClick={switchBodyOpen}>
      <ExperienceCardHeader
        switchBodyOpenStatus={isBodyOpen}
        leftSide={
          data?.startDate && data?.endDate
            ? `${data.startDate} - ${data.endDate}`
            : data?.institution
              ? data.institution
              : "l"
        }
        rightSide={
          data?.position ? data.position : data?.degree ? data.degree : "o"
        }
      />
      {isBodyOpen ? (
        <ExperienceCardBody
          description={data.description}
          technologies={data.technologies}
          company={data.company}
          titles={titles}
        />
      ) : null}
    </article>
  );
};

export default ExperienceCard;
