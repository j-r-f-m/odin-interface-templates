/**
 * creates and returns dom-node
 *
 * @param {string} typeOfEle type dom-element.
 * @param {string} parentEleId parent of the new dom-element.
 * @param {string} txt add optional text content.
 * @return {object} crtNode returns newly created dom-node
 */
const NodeFac = (typeOfEle, parentEleId, txt) => {
  const crtNode = () => {
    // create element
    const createDomElement = document.createElement(typeOfEle);
    // optional text content
    createDomElement.textContent = txt;
    // set parent node
    const parentElement = document.getElementById(parentEleId);
    parentElement.appendChild(createDomElement);
    // created node is returned -> element methods can be used
    return createDomElement;
  };

  return { crtNode };
};

const dltNodeById = (id) => {
  if (document.getElementById(id)) {
    // delete node
    const node = document.getElementById(id);
    node.remove();
  }
};

export { NodeFac, dltNodeById };
