// dropdown menu template

import { NodeFac } from "./dom";

/**
 * create options for dropdown (links)
 *
 * @param {number} numElem number of options for dropdown
 */
const dropDownOptions = (numElem) => {
  for (let i = 0; i < numElem; i += 1) {
    const currLink = NodeFac(
      "div",
      "dropdown-container",
      `Link ${i}`
    ).crtNode();
    currLink.id = `link-${i}`;
    currLink.className = "link";
    // currLink.setAttribute("href", "");
  }
};

/**
 * hide or show the options available from the dropdown
 *
 * @param {string} hideOrShow none or display -> hide or show options
 */
const hideShow = (hideOrShow) => {
  const links = document.getElementsByClassName("link");
  // iterate through links and change their display style
  for (let i = 0; i < links.length; i += 1) {
    links[i].style.display = hideOrShow;
  }
};

/**
 * template for creating dropdown menu
 */
export default () => {
  // dropdwon contaner
  const dropdownContainer = NodeFac("div", "content").crtNode();
  dropdownContainer.id = "dropdown-container";
  // dropdown menu
  const dropdownMenu = NodeFac("div", "dropdown-container", "Menu").crtNode();
  dropdownMenu.id = "menu";
  // add dropdown options (links)
  dropDownOptions(3);
  // hide dropdown options by default
  hideShow("none");
  dropdownMenu.addEventListener("click", (e) => {
    if (e.target.nextElementSibling.style.display === "block") {
      hideShow("none");
    } else {
      hideShow("block");
    }
  });
};
