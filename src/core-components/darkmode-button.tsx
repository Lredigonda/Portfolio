import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../core-components/darkmode-button.scss";

function DarkModeButton() {
  const theme = "light";
  return (
    <button className="darkmode-button">
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        className="darkmode-button__icon"
      />
    </button>
  );
}
export default DarkModeButton;
