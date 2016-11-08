/**
 * Created by dev on 11/7/16.
 */
var routerApp = angular.module('app', ['ui.router']);

routerApp .config(function($stateProvider) {

  $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
    .state('about', {
      url: '/about',
      component: 'about',
      // templateUrl: 'templates/home.html'
    })

    .state('hello', {
      url: '/hello',
      component: 'hello',
      // templateUrl: 'templates/helloWorld.html'
    });

})
  .component('about', {
    template:  '<h3>Its the UI-Router<br>Hello Solar System app!</h3>'
  })
  .component('hello', {
    template:  '<h3>{{$ctrl.greeting}} solar sytem!</h3>' +
    '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

    controller: function() {
      this.greeting = 'hello';

      this.toggleGreeting = function() {
        this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
      }
    }
  });

