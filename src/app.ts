import angular = require("angular");
import "angular-ui-router"

angular.module("starter", ["ui.router"])
  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    "ngInject";

    $stateProvider
      .state("app", {
        url: "/",
        templateUrl: "src/index.html",
        controller: "DashCtrl",
        controllerAs: "$ctrl",
      })

      ;

    $urlRouterProvider.otherwise("/");
  });
