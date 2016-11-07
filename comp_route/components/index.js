/**
 * Created by dev on 11/7/16.
 */
'use strict';
angular.module('app', ['ui.router'])
  .config(function($stateProvider) {
    $stateProvider
      .state('foo', {
        resolve: { mydata: (Service) => Service.getData() },
        component: 'helloWorld'
      })
      .state('home', {  name: 'home',  url: '/home',  component: 'home' })
    })
  .component("helloWorld",{
      templateUrl: "templates/helloWorld.html",
      bindings: { name: '@' }
  })
  .component("home",{
    templateUrl: "templates/home.html",
    bindings: { name: '@' }
  });

