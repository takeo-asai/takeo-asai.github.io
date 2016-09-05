// import css from "./style.css";

import {Component} from "@angular/core";

@Component({
  selector: "header-component",
  template: require('./template.html'),
  styles: [require("./style.css")]
})
export default class HeaderComponent {
  constructor() {
  }
}
