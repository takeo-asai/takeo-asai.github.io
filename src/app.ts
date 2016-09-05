import angular = require("angular");
import "angular-ui-router";
import 'angular-ui-bootstrap';
import "bootstrap-loader";

import headerComponent from "./header";
import skillComponent from "./skill";

angular.module("starter", ["ui.router", "ui.bootstrap"])

  .component("headerComponent", headerComponent)
  .component("skillComponent", skillComponent)

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
