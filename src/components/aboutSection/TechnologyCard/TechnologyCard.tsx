import "./TechnologyCard.css";
import { technologyObject } from "@/types/language";
import { motion, Variants } from "framer-motion";

type TechnologyCardProps = {
  technology: technologyObject;
};

const TechnologyCard: React.FC<TechnologyCardProps> = (props) => {
  const { technology } = props;

  const technologiesVariants: Variants = {
    offscreen: {
      y: 50,
      rotate: -10,
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
      variants={technologiesVariants}
      className="technologyCardWrapper"
    >
      <img
        className="techCardImg"
        src={technology.iconURL}
        alt="" /* empty alt tag because h3 gives enough context */
      />
      <h3 className="techCardTitle">{technology.name}</h3>
    </motion.div>
  );
};

export default TechnologyCard;
