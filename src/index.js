import "./styles.css";
import hideShow from "./logic";
import { dropdown } from "./dropdown";

(() => {
  // hide all links from dropdown
  hideShow("none");
  dropdown();
})();

// hover over menu-button -> open dropdown
