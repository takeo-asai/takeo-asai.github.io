import {Component, Input} from "@angular/core";

@Component({
  selector: "skill-component",
  template: require('./template.html'),
  styles: [require("./style.css")],
  
})
export default class SkillComponent {
  @Input() name: string;
  @Input() description: string;
  constructor() {
//    this.name = "hello world!";
//    this.description = "description";
  }
  public ngOnInit() {
  //  console.log("ngOnInit()", this.name, this.description);
  }
}
