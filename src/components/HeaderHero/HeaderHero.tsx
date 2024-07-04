import "./HeaderHero.css";
import swipeAnimation from "../../assets/images/swipe.gif";
import { headerObject } from "@/types/language";

type HeaderHeroProps = {
  data: headerObject;
};

const HeaderHero: React.FC<HeaderHeroProps> = (props) => {
  const { data } = props;
  return (
    <article className="headerHeroWrapper">
      <h1 className="headerText">{data.headerText}</h1>
      <h2 className="subHeaderText">{data.headerSubText}</h2>
      {swipeAnimation ? (
        <img src={swipeAnimation} className="swipeAnimation" />
      ) : null}
    </article>
  );
};

export default HeaderHero;
