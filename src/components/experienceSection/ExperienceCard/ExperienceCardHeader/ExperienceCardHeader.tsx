import "./ExperienceCardHeader.css";

type ExperienceCardHeaderProps = {
  leftSide: string;
  rightSide: string;
  switchBodyOpenStatus: boolean;
};

const ExperienceCardHeader: React.FC<ExperienceCardHeaderProps> = (props) => {
  const { switchBodyOpenStatus, leftSide, rightSide } = props;

  return (
    <section className="experienceCardHeaderWrapper">
      <section className="experienceCardHeaderLeftSection">
        <p className="experienceCardHeaderText">{leftSide}</p>
      </section>
      <section className="experienceCardHeaderRightSection">
        <p className="experienceCardHeaderTitle">{rightSide}</p>
      </section>
      <section className="switcherSection">
        <p className="experienceCardHeaderTitle">
          {switchBodyOpenStatus ? "-" : "+"}
        </p>
      </section>
    </section>
  );
};

export default ExperienceCardHeader;
