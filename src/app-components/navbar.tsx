import { faDove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarButton from "../core-components/navbar-button";
import "./navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <a>
            <img></img>
          </a>
        </div>
        <nav className="navbar__container__buttons">
          <NavbarButton text="Sobre mi" url="" className="navbar__container__buttons__about">
            <FontAwesomeIcon icon={faDove}/>
          </NavbarButton>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
