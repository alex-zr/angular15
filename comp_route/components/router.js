/**
 * Created by dev on 11/7/16.
 */
var routerApp = angular.module('app', ['ui.router']);

routerApp
  .component("hello",{
    templateUrl: "templates/helloWorld.html",
    bindings: { name: '@' }
  })
  .component("home",{
    templateUrl: "templates/home.html",
    bindings: { name: '@' }
  });

routerApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/home');

  $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/home',
      component: 'home',
      // templateUrl: 'templates/home.html'
    })

    .state('hello', {
      url: '/hello',
      component: 'hello',
      // templateUrl: 'templates/helloWorld.html'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
      url: '/'
      // we'll get to this in a bit
    });
});

