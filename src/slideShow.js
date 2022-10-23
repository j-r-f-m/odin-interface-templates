import { NodeFac, dltNodeById } from "./dom";
import img0 from "./images/img_1.jpg";
import img1 from "./images/img_2.jpg";
import img2 from "./images/img_3.jpg";
import arrowLeft from "./images/arrow-left.svg";
import arrowRight from "./images/arrow-right.svg";

// slider index
let CURR_SLIDER_IDX = 0;
const arrSlider = [img0, img1, img2];
console.log(arrSlider);

/**
 * set images
 *
 * @param {object} parenObj parent object of slide
 * @param {string} image img that should be displayed
 * @return {object} return created image
 *
 */
const addImg = (parenObj, image) => {
  const currImage = new Image();
  currImage.src = image;
  parenObj.appendChild(currImage);
  console.log(typeof currImage);
  return currImage;
};

/**
 * calculate idex of current Slide if the left arrow was clicked
 * @param
 *
 */
const LeftCalIdx = (currIdx) => {
  let newIdx = currIdx;
  if (newIdx === 0) {
    // if current index is 0 and we click the left arrow the last image in the
    // slider array is supposed to be displayed
    newIdx = arrSlider.length - 1;
  } else {
    newIdx = currIdx - 1;
  }
  return newIdx;
};

/**
 * create left arrow-button that changes the images in the left direction
 *
 *
 */
const crtLeftArrow = (parentObj) => {
  // add left arrow
  const leftArrow = addImg(parentObj, arrowLeft);
  leftArrow.id = "left-arrow";
  console.log(leftArrow);

  leftArrow.addEventListener("click", () => {
    console.log("left");

    // delete old image
    dltNodeById(`image-${CURR_SLIDER_IDX}`);
    // calculate new CURR_SLIDER_IDX
    CURR_SLIDER_IDX = LeftCalIdx(CURR_SLIDER_IDX);
    // show next image
    const newImage = addImg(parentObj, arrSlider[CURR_SLIDER_IDX]);
    newImage.id = `image-${CURR_SLIDER_IDX}`;
    newImage.className = "image";
    //
  });
};

/**
 * template for creating slide show
 *
 */
export default () => {
  // slideshow container
  const slideShowCon = NodeFac("div", "content").crtNode();
  slideShowCon.id = "slideshow-container";
  // set default image that is displayed when page is loaded
  const defaultImage = addImg(slideShowCon, arrSlider[CURR_SLIDER_IDX]);
  defaultImage.id = "image-0";
  defaultImage.className = "image";
  // add left arrow
  crtLeftArrow(slideShowCon);
  // add right arrow
  const rightArrow = addImg(slideShowCon, arrowRight);
  rightArrow.id = "right-arrow";
};
