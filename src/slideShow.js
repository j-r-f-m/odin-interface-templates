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
 * @param {object} image image object
 * @param {number} currIdx current index for id
 * @return {object} return created image
 *
 */
const addArrow = (parenObj, image) => {
  const currImage = new Image();
  currImage.src = image;
  parenObj.appendChild(currImage);
  return currImage;
};

/**
 * set slides
 *
 * @param {object} parenObj parent object of slide
 * @param {number} currIdx current index of slide that is supposed to be displayed
 * @return {object} return created image
 *
 */
const addSlide = (parenObj, currIdx) => {
  // create image
  const currImage = new Image();
  currImage.src = arrSlider[currIdx];
  currImage.id = `image-${currIdx}`;
  currImage.className = "image";
  parenObj.appendChild(currImage);
  return currImage;
};

/**
 * calculate idex of new Slide if the left arrow was clicked
 *
 * @param {number} currIdx current index of slider
 * @return {number} newIdx that will display the wanted image
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
 * calculate idex of new Slide if the right arrow was clicked
 *
 * @param {number} currIdx current index of slider
 * @return {number} newIdx that will display the wanted image
 *
 */
const RightCalIdx = (currIdx) => {
  let newIdx = currIdx;
  if (newIdx === arrSlider.length - 1) {
    // if current index is 2 and we click the right arrow the first image
    // (arrSlides[0]) in the slider array is supposed to be displayed
    newIdx = 0;
  } else {
    newIdx = currIdx + 1;
  }
  return newIdx;
};

/**
 * create left arrow-button that changes the images in the left direction
 *
 *@param {object} parentObj parent object of image
 */
const crtLeftArrow = (parentObj) => {
  // add left arrow
  const leftArrow = addArrow(parentObj, arrowLeft);
  leftArrow.id = "left-arrow";
  leftArrow.addEventListener("click", () => {
    // delete old image
    dltNodeById(`image-${CURR_SLIDER_IDX}`);
    // calculate new CURR_SLIDER_IDX
    CURR_SLIDER_IDX = LeftCalIdx(CURR_SLIDER_IDX);
    // show next image with updated CURR_SLIDER_IDX
    addSlide(parentObj, CURR_SLIDER_IDX);
  });
};

/**
 * create right arrow-button that changes the images in the right direction
 *
 *@param {object} parentObj parent object of image
 */
const crtRightArrow = (parentObj) => {
  // add left arrow
  const leftArrow = addArrow(parentObj, arrowRight);
  leftArrow.id = "right-arrow";
  leftArrow.addEventListener("click", () => {
    // delete old image
    dltNodeById(`image-${CURR_SLIDER_IDX}`);
    // calculate new CURR_SLIDER_IDX
    CURR_SLIDER_IDX = RightCalIdx(CURR_SLIDER_IDX);
    // show next image with updated CURR_SLIDER_IDX
    addSlide(parentObj, CURR_SLIDER_IDX);
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
  // set slide
  addSlide(slideShowCon, CURR_SLIDER_IDX);
  // add left arrow
  crtLeftArrow(slideShowCon);
  // add right arrow
  crtRightArrow(slideShowCon, arrowRight);
};
