import {
  faCodeBranch,
  faUser,
  faFolderOpen,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
import NavbarButton from "../core-components/navbar-button";
import "./navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <NavbarButton
          url="/public/index.html"
          className="navbar__container__home"
        >
          <h2 className="navbar__container__home__title">LR.</h2>
        </NavbarButton>

        <nav className="navbar__container__buttons">
          <NavbarButton
            text="Sobre mi"
            url=""
            icon={faUser}
            className="navbar__container__buttons__about"
          />

          <NavbarButton
            text="Proyectos"
            url=""
            icon={faFolderOpen}
            className="navbar__container__buttons__projects"
          />

          <NavbarButton
            text="Contacto"
            url=""
            icon={faIdCard}
            className="navbar__container__buttons__contact"
          />

          <NavbarButton
            url="https://github.com/Lredigonda/Portfolio"
            icon={faCodeBranch}
            className="navbar__container__buttons__repository"
          />
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
