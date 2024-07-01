import "./HeaderHero.css";
import swipeAnimation from "../../assets/images/swipe.gif";

function HeaderHero() {
  return (
    <article className="headerHeroWrapper">
      <h1 className="headerText">Hi, i'm Niels Dobbelaar</h1>
      <h2 className="subHeaderText">
        A motivated and enthusiastic frontend/ web developer and UX designer
      </h2>
      {swipeAnimation ? (
        <img src={swipeAnimation} className="swipeAnimation" />
      ) : null}
    </article>
  );
}

export default HeaderHero;
