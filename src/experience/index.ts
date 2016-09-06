import {Component, Input} from "@angular/core";

@Component({
  selector: "experience-component",
  template: require('./template.html'),
  styles: [require("./style.css")],
})
export default class ExperienceComponent {
  @Input() companyName: string;
  @Input() description: string;
  constructor() { }
}
