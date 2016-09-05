import "reflect-metadata";

import {NgModule} from "@angular/core";

import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from '@angular/common';

import HeaderComponent from "./header";
import SkillComponent from "./skill";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    SkillComponent,
    HeaderComponent,
  ],
  bootstrap: [HeaderComponent, SkillComponent],
})
class AppModule {
}

import "core-js";
import "rxjs/Rx";
import "zone.js/dist/zone";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";


platformBrowserDynamic().bootstrapModule(AppModule);
