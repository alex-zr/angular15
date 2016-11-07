/**
 * Created by dev on 11/7/16.
 */
var routerApp = angular.module('app', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })

    .state('hello', {
      url: '/hello',
      templateUrl: 'templates/helloWorld.html'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
      // we'll get to this in a bit
    });
});
