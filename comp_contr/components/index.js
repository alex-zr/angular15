/**
 * Created by al1 on 05.11.16.
 */
angular.module("myApp", [])
  .component("helloWorld",{
    template: "Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!",
    bindings: { name: '@' },
    controller: function(){
      this.myName = 'Alain';
    }
  });
