import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./navbar-button.scss";

export interface navbarButtonProps {
  className: string;
  text?: string;
  url: string;
  children?: JSX.Element;
  icon?: IconProp;
  external?: boolean;
}

function NavbarButton({
  text,
  url,
  children,
  className,
  icon,
  external,
}: navbarButtonProps) {
  return (
    <div className="navbarbutton">
      {external ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={`${url}`}
          className={`navbarbutton__link ${className ? className : ""}`}
        >
          {children}
          {icon ? (
            <FontAwesomeIcon icon={icon} className="navbarbutton__link__icon" />
          ) : null}
          {text}
        </a>
      ) : (
        <Link
          target="_blank"
          rel="noreferrer"
          to={`${url}`}
          className={`navbarbutton__link ${className ? className : ""}`}
        >
          {children}
          {icon ? <FontAwesomeIcon icon={icon} /> : null}
          {text}
        </Link>
      )}
    </div>
  );
}
export default NavbarButton;
