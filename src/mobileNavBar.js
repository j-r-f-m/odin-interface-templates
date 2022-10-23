// template for mobile navbar

import { NodeFac } from "./dom";

/**
 * reset background color of navbar options
 *
 *
 */
const resetBackgroundColor = () => {
  const navBarOptions = document.getElementsByClassName("link-navbar");
  console.log(navBarOptions.length);
  for (let i = 0; i < navBarOptions.length; i += 1) {
    console.log(navBarOptions[i]);
    navBarOptions[i].parentNode.style.backgroundColor = "";
  }
};

/**
 * create elements of navbar
 *
 * @param {string} arrName array with name (string) of navbar elements
 *
 */
const navBarOpt = (arrName) => {
  for (let i = 0; i < arrName.length; i += 1) {
    // create otpion container for txt and img
    const optionCon = NodeFac("div", "navbar-container").crtNode();
    optionCon.className = "nav-opt-con";
    optionCon.id = `nav-opt-con-${i}`;
    // create option (link)
    const currLink = NodeFac(
      "div",
      `nav-opt-con-${i}`,
      `${arrName[i]}`
    ).crtNode();
    currLink.id = `link-navbar-${i}`;
    currLink.className = "link-navbar";
    // eventlistener
    optionCon.addEventListener("click", (e) => {
      // reset background color for all option
      resetBackgroundColor();
      // set background color for selected option
      e.target.parentNode.style.backgroundColor = "#D3D3D3";
    });
  }
  // set default background color for irst (default option)
  const firstOption = document.getElementById("nav-opt-con-0");
  console.log(firstOption);
  firstOption.style.backgroundColor = "#D3D3D3";
};

/**
 * template for creating mobile navbar
 */
export default () => {
  // navbar container
  const navBarCon = NodeFac("div", "content").crtNode();
  navBarCon.id = "navbar-container";
  // create navbar options
  navBarOpt(["News", "Videos", "Photos", "Chat"]);
};
