import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../core-components/darkmode-button.scss";

export interface darkmodeButtonProps {
  className?: string;
}

function DarkModeButton(className: darkmodeButtonProps) {
  const theme = "light";
  return (
    <button className={`darkmode-button ${className ? className : ``}`}>
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        className="darkmode-button__icon"
      />
    </button>
  );
}
export default DarkModeButton;
