import { useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";

function Header() {
  const [isDutch, setDutch] = useState<boolean>(false);

  const toggleSwitch = () => setDutch(!isDutch);

  return (
    <article className="headerWrapper">
      <section className="headerNavSection">
        <section className="headerLanguageSection">
          <h4 className="headerLanguageLabel">NL</h4>
          <div className="switch" data-ison={isDutch} onClick={toggleSwitch}>
            <motion.div
              className="handle"
              layout
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
          </div>
          <h4 className="headerLanguageLabel">EN</h4>
        </section>
        <motion.h3
          initial={{ opacity: 1, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="headerNavItem"
        >
          About me
        </motion.h3>
        <motion.h3
          initial={{ opacity: 1, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="headerNavItem"
        >
          Experience
        </motion.h3>
        <motion.h3
          initial={{ opacity: 1, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="headerNavItem"
        >
          Projects
        </motion.h3>
      </section>
    </article>
  );
}

export default Header;
