import angular = require("angular");
import "angular-ui-router"

angular.module("starter", ["ui.router"])
  // Routes
  .config(function ($stateProvider) {
    $stateProvider.state('top', {
      url: '/',
      templateUrl: 'top/index.html',
      controller: 'topCtrl as top',
    })
  })
console.log("test")