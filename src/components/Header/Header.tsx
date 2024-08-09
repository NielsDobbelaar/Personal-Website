import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { sectionTitleObject } from "@/types/language";

export type HeaderProps = {
  changeLanguage: () => void;
  data: sectionTitleObject[];
};

const Header: React.FC<HeaderProps> = (props) => {
  const { changeLanguage, data } = props;
  const [isDutch, setDutch] = useState<boolean>(false);
  const [isUp, setIsUp] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
        setIsScrolled(false);
        setIsUp(false);
      } else {
        setIsMobile(false);
        setIsScrolled(false);
        setIsUp(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();
    handleScroll();
  }, []);

  const mobileNavVariants = {
    up: {
      top: ["-100%", "7.5%"],
      transition: { duration: 0.5 },
    },
    down: {
      top: ["7.5%", "-100%"],
      transition: {
        duration: 0.5,
      },
    },
  };

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
    <>
      <motion.article
        animate={isUp && !isMobile ? "up" : "down"}
        variants={articleVariants}
        className={
          "headerWrapper" +
          (isScrolled || isMobile ? " headerWrapperScrolled" : "")
        }
      >
        {isScrolled && !isMobile ? (
          <motion.button
            animate={isUp ? "up" : "down"}
            variants={pullTabVariants}
            className="pullTabWrapper"
            onClick={() => setIsUp(!isUp)}
            aria-label="Open/close navigation"
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
        <section role="banner" className="headerLogoWrapper">
          <img
            src="/images/logo.webp"
            alt="Header Logo"
            className="headerLogo"
          />
        </section>
        <section
          aria-label="language switcher section"
          className="headerLanguageSection"
        >
          <p className="headerLanguageLabel">NL</p>
          <div
            role="switch"
            aria-checked={isDutch}
            aria-label="Language switch"
            className="switch"
            data-ison={!isDutch}
            onClick={flipLanguage}
          >
            <motion.div
              className="handle"
              layout
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
          </div>
          <p className="headerLanguageLabel">EN</p>
        </section>
        {!isMobile ? (
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
        ) : (
          <section className="headerNavSection">
            {isUp ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                onClick={() => setIsUp(!isUp)}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                viewBox="0 0 24 24"
                onClick={() => setIsUp(!isUp)}
              >
                <path
                  fill="currentColor"
                  d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
                />
              </svg>
            )}
          </section>
        )}
      </motion.article>
      {isMobile ? (
        <motion.section
          animate={isUp && isMobile ? "up" : "down"}
          variants={mobileNavVariants}
          className="headerNavSectionMobile"
        >
          {data.map((sectionHeader) => {
            return (
              <a
                key={"headerlinkto-" + sectionHeader.slug}
                className="headerNavItemWrapperMobile"
                href={"#" + sectionHeader.slug}
                onClick={() => setIsUp(!isUp)}
              >
                <motion.h3
                  initial={{ opacity: 1, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, translateY: -1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="headerNavItemMobile"
                >
                  {sectionHeader.title}
                </motion.h3>
              </a>
            );
          })}
        </motion.section>
      ) : null}
    </>
  );
};

export default Header;
