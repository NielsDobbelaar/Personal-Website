import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MobileHeader.css";
import { HeaderProps } from "../FullSizeHeader/DesktopHeader";

const MobileHeader: React.FC<HeaderProps> = (props) => {
  const { changeLanguage, data } = props;
  const [isDutch, setDutch] = useState<boolean>(false);
  const [isUp, setIsUp] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const flipLanguage = () => {
    setDutch(!isDutch);
    changeLanguage();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const articleVariants = {
    up: {
      y: ["0%", "10%", "-100%"],
      transition: { duration: 0.5, times: [0, 0.4, 1] },
    },
    down: {
      y: ["-100%", "10%", "-5%", "0%"],
      transition: {
        duration: 0.5,
        times: [0, 0.6, 0.8, 1],
      },
    },
  };

  const pullTabVariants = {
    up: {
      top: ["80%", "120%"],
      rotate: [0, -20, 180],
      transition: { duration: 0.5, times: [0, 0.2, 1] },
    },
    down: {
      top: ["120%", "80%"],
      rotate: [180, -20, 0],
      transition: {
        duration: 0.5,
        times: [0, 0.85, 1],
      },
    },
  };

  return (
    <motion.article
      animate={isUp ? "up" : "down"}
      variants={articleVariants}
      className={"headerWrapper" + (isScrolled ? " headerWrapperScrolled" : "")}
    >
      {isScrolled ? (
        <motion.button
          animate={isUp ? "up" : "down"}
          variants={pullTabVariants}
          className="pullTabWrapper"
          onClick={() => setIsUp(!isUp)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"
            />
          </svg>
        </motion.button>
      ) : null}
      <section className="headerLogoWrapper">
        <img src="/favicon.ico" alt="Logo" className="headerLogo" />
      </section>
      <section className="headerLanguageSection">
        <h4 className="headerLanguageLabel">NL</h4>
        <div className="switch" data-ison={!isDutch} onClick={flipLanguage}>
          <motion.div
            className="handle"
            layout
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
        </div>
        <h4 className="headerLanguageLabel">EN</h4>
      </section>
      <section className="headerNavSection">
        {data.map((sectionHeader) => {
          return (
            <a
              key={"headerlinkto-" + sectionHeader.slug}
              className="headerNavItemWrapper"
              href={"#" + sectionHeader.slug}
            >
              <motion.h3
                initial={{ opacity: 1, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, translateY: -1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="headerNavItem"
              >
                {sectionHeader.title}
              </motion.h3>
            </a>
          );
        })}
      </section>
    </motion.article>
  );
};

export default MobileHeader;
