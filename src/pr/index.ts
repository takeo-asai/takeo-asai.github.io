import {Component, Input} from "@angular/core";

@Component({
  selector: "pr-component",
  template: require('./template.html'),
  styles: [require("./style.css")],
})
export default class PRComponent {
  @Input() description: string;
  constructor() { }
}
