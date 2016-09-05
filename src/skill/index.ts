class SkillController {
  public name: string;
  public description: string;
  constructor() {    
    "ngInject";
  }
}

// Header
let SkillComponent: angular.IComponentOptions = {
  bindings: {
    name: "=",
    description: "=",
  },
  controller: SkillController,
  template: require("./template.html"),
};
export default SkillComponent;

