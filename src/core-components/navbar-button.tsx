import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar-button.scss";

export interface navbarButtonProps {
  className: string;
  text?: string;
  url: string;
  children?: JSX.Element;
  icon?: IconProp;
}

function NavbarButton({
  text,
  url,
  children,
  className,
  icon,
}: navbarButtonProps) {
  return (
    <div className="navbarbutton">
      <a
        target="_blank"
        rel="noreferrer"
        href={`${url}`}
        className={`navbarbutton__link ${className ? className : ""}`}
      >
        {children}
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
        {text}
      </a>
    </div>
  );
}
export default NavbarButton;
