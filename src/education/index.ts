import {Component, Input} from "@angular/core";

@Component({
  selector: "education-component",
  template: require('./template.html'),
  styles: [require("./style.css")],
})
export default class EducationComponent {
  @Input() schoolName: string;
  @Input() department: string;
  constructor() { }
}
