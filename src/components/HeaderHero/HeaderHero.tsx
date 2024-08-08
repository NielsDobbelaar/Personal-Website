import "./HeaderHero.css";
import { headerObject } from "@/types/language";

type HeaderHeroProps = {
  data: headerObject;
};

const HeaderHero: React.FC<HeaderHeroProps> = (props) => {
  const { data } = props;
  return (
    <article role="region" className="headerHeroWrapper">
      <h1 role="heading" className="headerText">
        {data.headerText}
      </h1>
      <h2 role="heading" className="subHeaderText">
        {data.headerSubText}
      </h2>
      <img
        src="images/swipe2.gif"
        alt="Swipe down"
        className="swipeAnimation"
      />
    </article>
  );
};

export default HeaderHero;
