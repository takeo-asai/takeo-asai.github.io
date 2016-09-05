import "reflect-metadata";

import {Component, NgModule} from "@angular/core";

@Component({
  selector: "my-app",
  template: `<div>test</div>`,
})
class AppComponent {

}


import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from '@angular/common';

import HeaderComponent from "./header";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent, HeaderComponent],
})
class AppModule {
}

import "core-js";
import "rxjs/Rx";
import "zone.js/dist/zone";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";


platformBrowserDynamic().bootstrapModule(AppModule);
