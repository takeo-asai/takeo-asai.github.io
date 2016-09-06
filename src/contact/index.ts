import {Component, Input} from "@angular/core";

@Component({
  selector: "contact-component",
  template: require('./template.html'),
  styles: [require("./style.css")],
})
export default class ContactComponent {
  @Input() url: string;
  constructor() { }
}
