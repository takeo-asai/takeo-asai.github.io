import angular = require("angular");
import "angular-ui-router";
import 'angular-ui-bootstrap';
import "bootstrap-loader";

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
