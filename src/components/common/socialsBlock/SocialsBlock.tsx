import "./SocialsBlock.css";
import { motion } from "framer-motion";

type SocialsBlockProps = {
  title?: string;
};

const SocialsBlock: React.FC<SocialsBlockProps> = (props) => {
  const { title } = props;

  return (
    <section className="socialsBlockWrapper">
      {title ? <h4 className="socialsBlockTimer">{title}</h4> : null}
      <section className="SocialsBlockSocialsWrapper">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/niels-dobbelaar-084619274/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="socialsIcon"
            src="https://img.icons8.com/color/100/000000/linkedin.png"
            alt="linkedin"
          />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/NielsDobbelaar"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="socialsIcon"
            src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
            alt="github"
          />
        </motion.a>
      </section>
    </section>
  );
};

export default SocialsBlock;
