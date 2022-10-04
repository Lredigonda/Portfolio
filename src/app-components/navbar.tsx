import {
  faCodeBranch,
  faUser,
  faFolderOpen,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import NavbarButton from "../core-components/navbar-button";
import "./navbar.scss";

function Navbar() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <header className={`navbar `}>
      <div className="navbar__container">
        <NavbarButton
          url="/public/index.html"
          className="navbar__container__home"
          external
        >
          <h2 className="navbar__container__home__title">LR.</h2>
        </NavbarButton>

        <nav className="navbar__container__buttons">
          <NavbarButton
            text="Sobre mi"
            url=""
            icon={faUser}
            className="navbar__container__buttons__about"
            external
          />

          <NavbarButton
            text="Proyectos"
            url=""
            icon={faFolderOpen}
            className="navbar__container__buttons__projects"
            external
          />

          <NavbarButton
            text="Contacto"
            url=""
            icon={faIdCard}
            className="navbar__container__buttons__contact"
            external
          />

          <NavbarButton
            url="https://github.com/Lredigonda/Portfolio"
            icon={faCodeBranch}
            className="navbar__container__buttons__repository"
            external
          />
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
