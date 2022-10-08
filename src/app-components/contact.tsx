import "./contact.scss";
import LinkComponent from "../core-components/link-component";

import TwitterLogo from "../assets/png-logos/twitter.png";
import InstagramLogo from "../assets/png-logos/instagram.png";
import FacebookLogo from "../assets/png-logos/facebook.png";
import LinkedinLogo from "../assets/png-logos/linkedin.png";
import GitHubLogo from "../assets/png-logos/github.png";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">
        Puedes contactarme en mis <b>Redes</b>
      </h1>
      <div className="contact__buttons">
        <div className="contact__buttons__instagram">
          <LinkComponent
            url="https://www.instagram.com/leo.redigonda/"
            isExternal
          >
            <img src={InstagramLogo} alt="instagram-logo" />
          </LinkComponent>
        </div>
        <div className="contact__buttons__twitter">
          <LinkComponent url="https://twitter.com/LeoRedigonda" isExternal>
            <img src={TwitterLogo} alt="twitter-logo" />
          </LinkComponent>
        </div>
        <div className="contact__buttons__facebook">
          <LinkComponent url="https://www.facebook.com/Leeo.Redi/" isExternal>
            <img src={FacebookLogo} alt="facebook-logo" />
          </LinkComponent>
        </div>
        <div className="contact__buttons__linkedin">
          <LinkComponent
            url="https://www.linkedin.com/in/leonel-redigonda-809116194/"
            isExternal
          >
            <img src={LinkedinLogo} alt="linkedin-logo" />
          </LinkComponent>
        </div>
        <div className="contact__buttons__github">
          <LinkComponent url="https://github.com/Lredigonda" isExternal>
            <img src={GitHubLogo} alt="github-logo" />
          </LinkComponent>
        </div>
      </div>
    </div>
  );
}
export default Contact;
