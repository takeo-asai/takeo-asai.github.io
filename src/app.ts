import {NgModule, Component} from "@angular/core";

import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from '@angular/common';

import HeaderComponent from "./header";
import ExperienceComponent from "./experience";
import SkillComponent from "./skill";
import EducationComponent from "./education";
import ContactComponent from "./contact";
import SummaryComponent from "./summary";
import PRComponent from "./pr";

@Component({
  selector: "my-app",
  template: require("./template.html"),
})
class AppComponent { }

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  // TODO: Add all components here!
  declarations: [
    PRComponent,
    SummaryComponent,
    ExperienceComponent,
    HeaderComponent,
    AppComponent,
    SkillComponent,
    EducationComponent,
    ContactComponent,
  ],
  bootstrap: [AppComponent],
})
class AppModule { }

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

platformBrowserDynamic().bootstrapModule(AppModule);

// ServiceWorker
window.addEventListener('load', function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
});
