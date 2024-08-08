import { projectObject } from "@/types/language";
import "./ProjectsSectionCard.css";
import { motion, Variants } from "framer-motion";

type ProjectsSectionCardProps = {
  cardData: projectObject;
  buttonText: string;
};

const ProjectsSectionCard: React.FC<ProjectsSectionCardProps> = (props) => {
  const { cardData, buttonText } = props;

  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      rotate: 15,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
      className="flipCard"
    >
      <div className="flipCardInner">
        <div className="flipCardFront">
          <img
            className="flipCardFrontImage"
            src={cardData.imageURL}
            alt={"Avatar for " + cardData.title}
          />
          <div className="flipCardFrontOverlay">
            <h2 className="flipCardFrontTitle">{cardData.title}</h2>
          </div>
        </div>
        <div
          className={"flipCardBack " + (!cardData.redirect ? "noRedirect" : "")}
        >
          <h3 className="flipCardBackTitle">{cardData.title}</h3>
          {cardData.technologies ? (
            <div className="flipCardBackTechnologies">
              {cardData.technologies.map((technology) => {
                return (
                  <p
                    className="flipCardBackTechnologiesItem"
                    key={"projectTech" + technology}
                  >
                    {technology}
                  </p>
                );
              })}
            </div>
          ) : null}
          <p className="flipCardBackParagraph">{cardData.description}</p>
          {cardData.redirect ? (
            <motion.button
              whileHover={{ scale: 1.2, translateY: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flipCardBackButton"
              onClick={() => {
                window.open(cardData.redirect, "_blank");
              }}
            >
              {buttonText}
            </motion.button>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSectionCard;
