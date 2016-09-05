import {NgModule, Component} from "@angular/core";

import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from '@angular/common';

import HeaderComponent from "./header";
import SkillComponent from "./skill";

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
    SkillComponent,
    HeaderComponent,
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
class AppModule { }

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

platformBrowserDynamic().bootstrapModule(AppModule);
