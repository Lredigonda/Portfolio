import { faDove, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import NavbarButton from "../core-components/navbar-button";
import "./navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <NavbarButton url="/public/index.html" className="">
          <img src="" alt="" />
        </NavbarButton>

        <nav className="navbar__container__buttons">
          <NavbarButton
            text="Sobre mi"
            url=""
            icon={faDove}
            className="navbar__container__buttons__about"
          />

          <NavbarButton
            text="Proyectos"
            url=""
            icon={faDove}
            className="navbar__container__buttons__projects"
          />

          <NavbarButton
            text="Contacto"
            url=""
            icon={faDove}
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
