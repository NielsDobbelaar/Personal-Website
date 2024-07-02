import "./Footer.css";
import SocialsBlock from "@/components/common/socialsBlock/SocialsBlock";

function Footer() {
  return (
    <footer className="footerWrapper">
      <section className="footerSection">
        <h4 className="footerTitle">Niels Dobbelaar</h4>
        <p className="footerSubtitle">
          A motivated and enthusiastic frontend/ web developer and UX designer
        </p>
      </section>
      <section className="footerSection">
        <SocialsBlock title="Socials" />
      </section>
    </footer>
  );
}

export default Footer;
