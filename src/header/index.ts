// import css from "./style.css";

// Header
let HeaderComponent: angular.IComponentOptions = {
  bindings: {
  },
  controller: HeaderController,
  template: require("./template.html"),
};
export default HeaderComponent;

class HeaderController {
  constructor() {
    "ngInject";
  }
}
