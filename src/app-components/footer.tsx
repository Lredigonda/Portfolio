import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkComponent from "../core-components/link-component";

import TwitterLogo from "../assets/png-logos/iconmonstr-twitter-1-24.png";
import InstagramLogo from "../assets/png-logos/iconmonstr-instagram-11-24.png";
import FacebookLogo from "../assets/png-logos/iconmonstr-facebook-6-24.png";
import LinkedinLogo from "../assets/png-logos/iconmonstr-linkedin-1-24.png";
import GitHubLogo from "../assets/png-logos/iconmonstr-github-1-24.png";
import Separator from "../core-components/separator";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top__left">
            <h2 className="footer__container__logo">LR.</h2>
            <h3 className="footer__container__title">
              Powered and Designed by <b>Leonel Redigonda</b>
            </h3>
          </div>
          <div className="footer__top__right">
            <LinkComponent
              className="footer__contact-button"
              url="https://www.instagram.com/leo.redigonda/"
              isExternal
            >
              <img src={InstagramLogo} alt="instagram-logo" />
            </LinkComponent>

            <LinkComponent
              className="footer__contact-button"
              url="https://twitter.com/LeoRedigonda"
              isExternal
            >
              <img src={TwitterLogo} alt="twitter-logo" />
            </LinkComponent>

            <LinkComponent
              className="footer__contact-button"
              url="https://www.facebook.com/Leeo.Redi/"
              isExternal
            >
              <img src={FacebookLogo} alt="facebook-logo" />
            </LinkComponent>

            <LinkComponent
              className="footer__contact-button"
              url="https://www.linkedin.com/in/leonel-redigonda-809116194/"
              isExternal
            >
              <img src={LinkedinLogo} alt="linkedin-logo" />
            </LinkComponent>

            <LinkComponent
              className="footer__contact-button"
              url="https://github.com/Lredigonda"
              isExternal
            >
              <img src={GitHubLogo} alt="github-logo" />
            </LinkComponent>
          </div>
        </div>
        <Separator className="footer__separator" />
        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <p>Copyright® 2022</p>
          </div>
          <div className="footer__bottom__right">
            <button className="footer__darktheme-button">
              <FontAwesomeIcon icon={faMoon} />
            </button>
            <button className="footer__translate-button">translate</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
