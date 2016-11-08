/**
 * Created by al1 on 05.11.16.
 */
angular.module("myApp", [])
  .component("helloWorld",{
    bindings: { name: '@' },
    template: 'Hello {{$ctrl.name}}!'
  });
