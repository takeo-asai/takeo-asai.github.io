import angular = require("angular");
import "bootstrap";
import "jquery";
import "angular-ui-router";
import 'angular-ui-bootstrap';

angular.module("starter", ["ui.router", "ui.bootstrap"])
  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    "ngInject";

    $stateProvider
      .state("app", {
        url: "/",
        templateUrl: "src/index.html",
//        controller: "DashCtrl",
        controllerAs: "$ctrl",
      })

      ;

    $urlRouterProvider.otherwise("/");
  });
