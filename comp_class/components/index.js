/**
 * Created by al1 on 05.11.16.
 */
'use strict';

angular.module("myApp", [])
  .component("helloWorld",{
    template: `Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!`,
    bindings: { name: '@' },
    controller: class Contr {
      constructor() {
        this.myName = 'Alain';
      }
    }
/*    controller: function(){
      this.myName = 'Alain';
    }*/
  });
