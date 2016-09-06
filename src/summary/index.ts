import {Component, Input} from "@angular/core";

@Component({
  selector: "summary-component",
  template: require('./template.html'),
  styles: [require("./style.css")],
})
export default class SummaryComponent {
  @Input() description: string;
  constructor() { }
}
