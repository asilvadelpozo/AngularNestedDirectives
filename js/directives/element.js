angular.module('app').
    directive('element', function() {
       return {
           restrict: 'E',
           replace: true,
           scope: {
               index: '=index'
           },
           templateUrl: 'templates/element.html'
       };
    });
