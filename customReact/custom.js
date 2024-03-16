function customRendor(reactElement, mainContainer) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.Childern;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("targer", reactElement.props.target);
  //   mainContainer.append(domElement);
  //   version 2

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Childern;
  //   for (const prop in reactElement.props) {
  //     domElement.setAttribute(prop, reactElement.props[prop]);
  //   }
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.append(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  Childern: "Click me to visit Google ",
};

const mainContainer = document.getElementById("root");

customRendor(reactElement, mainContainer);
