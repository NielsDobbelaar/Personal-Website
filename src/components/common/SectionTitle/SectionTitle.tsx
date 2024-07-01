import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./SectionTitle.css";

type SectionTitleProps = {
  title: string;
};
const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title } = props;

  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setHasAnimated(true);
      }
    },
  });

  return (
    <div className="sectionTitleContainer" ref={ref}>
      <motion.div
        className="animatedLine"
        initial={{ width: 0 }}
        animate={hasAnimated ? { width: ["2em", "20em", "2em"] } : {}}
        transition={{ duration: 0.5 }}
      />
      <h1 className="sectionTitleh1">{title}</h1>
    </div>
  );
};

export default SectionTitle;
