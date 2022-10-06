import LinkComponent from "../core-components/link-component";
import Separator from "../core-components/separator";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top__left">
            <h3 className="footer__container__title">
              Powered and Design by <b>Leonel Redigonda</b>
            </h3>
          </div>
          <div className="footer__top__right">
            <LinkComponent
              className="contact-button"
              url="https://www.instagram.com/leo.redigonda/"
              text="instagram"
              isExternal
            />
            <LinkComponent
              className="contact-button"
              url="https://twitter.com/LeoRedigonda"
              text="twitter"
              isExternal
            />
            <LinkComponent
              className="contact-button"
              url="https://www.facebook.com/Leeo.Redi/"
              text="facebook"
              isExternal
            />
            <LinkComponent
              className="contact-button"
              url="https://www.linkedin.com/in/leonel-redigonda-809116194/"
              text="linkedin"
              isExternal
            />
            <LinkComponent
              className="contact-button"
              url="https://github.com/Lredigonda"
              text="github"
              isExternal
            />
          </div>
        </div>
        <Separator className="footer__separator" />
        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <p>Copyright® 2022</p>
          </div>
          <div className="footer__bottom__right">
            <button className="footer__darktheme-button">darkmodebutton</button>
            <button className="footer__translate-button">translate</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
