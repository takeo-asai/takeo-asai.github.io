// Header
let SkillComponent: angular.IComponentOptions = {
  bindings: {
    name: "="
  },
  controller: SkillController,
  template: require("./template.html"),
};
export default SkillComponent;

class SkillController {
  public name: string;
  constructor() {
    "ngInject";
  }
}
