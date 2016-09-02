import angular = require("angular");
import "angular-ui-router";
import 'angular-ui-bootstrap';
import "bootstrap-loader";

import headerComponent from "./header";

angular.module("starter", ["ui.router", "ui.bootstrap"])

  .component('listComponent', {
    bindings: {
      message: '=',
    },
    controller: class {
      public message: string;
      constructor() {
        "ngInject";
        this.message = "test";
      }
    },
    template: `<div>Hello {{ $ctrl.message }}</div>`,
  })
  .component("headerComponent", headerComponent)

  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    "ngInject";

    $stateProvider
      .state("app", {
        url: "/",
        templateUrl: "src/index.html"
      })

      ;

    $urlRouterProvider.otherwise("/");
  });
