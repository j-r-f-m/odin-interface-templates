import { NodeFac, dltNodeById } from "./dom";
import img0 from "./images/img_1.jpg";
import img1 from "./images/img_2.jpg";
import img2 from "./images/img_3.jpg";
import arrowLeft from "./images/arrow-left.svg";
import arrowRight from "./images/arrow-right.svg";
import dotEmpty from "./images/circle-empty.svg";
import dotFull from "./images/circle-full.svg";

// slider index
let CURR_SLIDER_IDX = 0;
// slider images
const ARR_SLIDER = [img0, img1, img2];

/**
 * set full dot at CURR_SLIDER_IDX
 *
 * @param {number} currIdx CURR_SLIDER_IDX of current slide
 */
const setFullDot = (currIdx) => {
  // create img object
  const fullDot = new Image();
  fullDot.src = dotFull;
  fullDot.id = `dot-${currIdx}`;
  fullDot.className = "dot";
  // get parent div of the dot that represents the current slide
  const parentCurrDot = document.getElementById(`id-div-dot-${currIdx}`);
  parentCurrDot.appendChild(fullDot);
  // add eventlistener
  // dotEvent(fullDot);
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
  currImage.src = ARR_SLIDER[currIdx];
  currImage.id = `image-${currIdx}`;
  currImage.className = "image";
  parenObj.appendChild(currImage);
  return currImage;
};

/**
 * calculate idx of new slide when clicking on dots
 * @param {number} newIdx idx of wanted image
 * @return {number} new index that will display wanted image
 */
const dotCalIdx = (e) => {
  // get id of clicked dot
  const getId = e.target.id;
  const idx = getId.charAt(getId.length - 1);

  return Number(idx);
};

/**
 * event listeners for the empty dots
 *
 * @param {object}
 */
const dotEvent = (objEvent) => {
  const obj = objEvent;
  obj.addEventListener("click", (e) => {
    // delete old image
    dltNodeById(`image-${CURR_SLIDER_IDX}`);
    // delete old full dot
    dltNodeById(`dot-${CURR_SLIDER_IDX}`);
    // create old empty dot
    setEmptyDot(CURR_SLIDER_IDX);
    // update the CURRENT_SLIDER_IDX !!!!!!!!!!!!!
    // get slideshow-container to load new image
    const parentSlide = e.target.parentElement.parentElement.parentElement;
    CURR_SLIDER_IDX = dotCalIdx(e);
    // load new image with revcieved idx
    addSlide(parentSlide, CURR_SLIDER_IDX);
    // delete empty dot of new image
    dltNodeById(`dot-${CURR_SLIDER_IDX}`);
    // set full dot
    setFullDot(CURR_SLIDER_IDX);
  });
};

/**
 * set empty dot at CURR_SLIDER_IDX
 *
 * @param {number} currIdx CURR_SLIDER_IDX of current slide
 */
const setEmptyDot = (currIdx) => {
  // append full dot to parent div current image(dot)
  const emptyDot = new Image();
  emptyDot.src = dotEmpty;
  emptyDot.id = `dot-${currIdx}`;
  emptyDot.className = "dot";
  // get parent div of the dot that represents the curren slide
  const parentCurrDot = document.getElementById(`id-div-dot-${currIdx}`);
  parentCurrDot.appendChild(emptyDot);
  // add eventlistener
  dotEvent(emptyDot);
};

/**
 * create the empty dots for images in ARR_SLIDER
 * this function is only used in the beginning
 */
const dots = () => {
  const dotsCon = NodeFac("div", "slideshow-container").crtNode();
  dotsCon.id = "dots-container";
  for (let i = 0; i < ARR_SLIDER.length; i += 1) {
    // create parent div for each dot
    const dotDiv = NodeFac("div", "dots-container").crtNode();
    dotDiv.id = `id-div-dot-${i}`;
    // create dot icon
    const currDot = new Image();
    currDot.src = dotEmpty;
    currDot.id = `dot-${i}`;
    currDot.className = "dot";
    dotDiv.appendChild(currDot);

    // add eventlistener
    dotEvent(currDot);
  }
};

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
    newIdx = ARR_SLIDER.length - 1;
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
  if (newIdx === ARR_SLIDER.length - 1) {
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
    // delete old full dot
    dltNodeById(`dot-${CURR_SLIDER_IDX}`);
    // create old empty dot
    setEmptyDot(CURR_SLIDER_IDX);
    // calculate new CURR_SLIDER_IDX !!!!!!!!!!!
    CURR_SLIDER_IDX = LeftCalIdx(CURR_SLIDER_IDX);
    // show next image with updated CURR_SLIDER_IDX
    addSlide(parentObj, CURR_SLIDER_IDX);
    // delete empty dot of new image
    dltNodeById(`dot-${CURR_SLIDER_IDX}`);
    // set full dot
    setFullDot(CURR_SLIDER_IDX);
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
    // delete old full dot
    dltNodeById(`dot-${CURR_SLIDER_IDX}`);
    // create old empty dot
    setEmptyDot(CURR_SLIDER_IDX);
    // calculate new CURR_SLIDER_IDX !!!!!!!!!!!
    CURR_SLIDER_IDX = RightCalIdx(CURR_SLIDER_IDX);
    // show next image with updated CURR_SLIDER_IDX
    addSlide(parentObj, CURR_SLIDER_IDX);
    // delete empty dot of new image
    dltNodeById(`dot-${CURR_SLIDER_IDX}`);
    // set full dot
    setFullDot(CURR_SLIDER_IDX);
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
  // add dots
  dots(CURR_SLIDER_IDX);
  // delete empty dot at current index
  dltNodeById(`dot-${CURR_SLIDER_IDX}`);
  // add full dot
  setFullDot(CURR_SLIDER_IDX);
};
