import "./navbar-button.scss";

export interface navbarButtonProps {
  className: string;
  text: string;
  url: string;
  children?: JSX.Element
}

function NavbarButton({ text, url, children, className }: navbarButtonProps) {
  return (
    <div className="navbarbutton">
      <a
        target="_blank"
        rel="noreferrer"
        href={`${url}`}
        className={`navbarbutton__link ${className ? className : ""}`}
      >
        {children}
        {text}
      </a>
    </div>
  );
}
export default NavbarButton;
