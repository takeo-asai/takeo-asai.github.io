// Header
let HeaderComponent: angular.IComponentOptions = {
  bindings: {
  },
  controller: HeaderController,
  template: `
  <div style="background-image: url('./imgs/background.jpg')">
    <img src="./imgs/icon.png" width="400" height="400" />
    <h1 style="color: white;">Takeo Asai</h1>
  </div>`,
};
export default HeaderComponent;

class HeaderController {
  constructor() {
    "ngInject";
  }
}
