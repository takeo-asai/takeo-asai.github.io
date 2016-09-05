import "reflect-metadata";

import {NgModule, Component} from "@angular/core";

import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from '@angular/common';

import HeaderComponent from "./header";
import SkillComponent from "./skill";

@Component({
  selector: "my-app",
  template: require("./template.html"),
})
class AppComponent {}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    SkillComponent,
    HeaderComponent,
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
class AppModule {
}

import "core-js";
import "rxjs/Rx";
import "zone.js/dist/zone";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";


platformBrowserDynamic().bootstrapModule(AppModule);
